import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar'
import config from '../config'
import ChoirWizardContext from '../context/ChoirWizardContext'
import { createBrowserHistory } from 'history';


class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  addRecord = record => {
    this.setState({
      records: [ ...this.state.records, record ],
    })
  }

  updateRecord = record => {
    console.log('record:', record);
    const updatedRecords = this.state.records.map(rec => {
     if(rec.id === parseInt(record.id)) {
       rec.title = record.title;
       rec.composer = record.composer;
       rec.arranger = record.arranger;
       rec.voicing = record.voicing;
       rec.number_copies = record.number_copies;
       rec.instrumentation = record.instrumentation;
      rec.lang = record.lang;
      rec.notes = record.notes;
      return rec;
     } else {
       return rec;
     }
    })
    console.log('updatedRecords:', updatedRecords);
    this.setState({
      records: updatedRecords
    })
  }

  deleteRecord = (recordID) => {
    const history = createBrowserHistory();
    history.push('/home');
    const newRecords = this.state.records.filter(record => {
      return record.id !== recordID
    })

    this.setState({
      records: newRecords,
    })
  }

  deleteItemRequest = (recordID, callback) => {
    const history = createBrowserHistory();
    console.log('You clicked delete item!');
    // alert('This action cannot be undone!');
    fetch(`${config.API_ENDPOINT}/music/${recordID}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
      })
      .then(data => {
        callback(recordID)
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/music/`)
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status)
           }
        return res.json();
    })
    .then(data => {
        console.log("data:", data);
        this.setState({
            records: data
        })
    })
  }

  render() {
    const contextValue = {
      records: this.state.records,
      addRecord: this.addRecord,
      deleteItemRequest: this.deleteItemRequest,
    }
    return (
      <main className='App'>
      
        <BrowserRouter>
          <ChoirWizardContext.Provider value={contextValue}>
            <NavBar />
            {this.state.hasError && <p className='red'>There was an error!  Oh no!</p>}
            <Main />
          </ChoirWizardContext.Provider>
        </BrowserRouter>
      </main>
    );
  }
  
}

export default App;