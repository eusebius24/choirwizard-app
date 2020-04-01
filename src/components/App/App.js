import React from 'react';
import Main from '../../components/Main/Main';
import NavBar from '../NavBar/NavBar'
import config from '../../config'
import ChoirWizardContext from '../../context/ChoirWizardContext'
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
    this.getAllRecords();
  }

  //Get request
  getAllRecords = () => {
    fetch(`${config.API_ENDPOINT}/music/`)
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status)
           }
        return res.json();
    })
    .then(data => {
        this.setState({
            records: data
        })
    })
    .catch(error => {
      this.setState({ error });
    })
  }
  

  //Patch request
  updateItemRequest = (updatedRecord, recordId) => {
    fetch(`${config.API_ENDPOINT}/music/${recordId}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedRecord),
      headers: {
          'content-type': 'application/json',
      }
  })
  .then(res => {
      if (!res.ok) {        
        return res.json().then(error => {
            throw error
        })
    }
    return res.json();
  })
  .then(
      this.updateRecord(updatedRecord)
  )
  .catch(error => {
      this.setState({ error });
  })
  this.getAllRecords();
}

//Updates record in state
  updateRecord = record => {
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

    this.setState({
      records: updatedRecords
    })
    
  }

  //Deletes item in state
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

  //Delete request to server
  deleteItemRequest = (recordID, callback) => {
    fetch(`${config.API_ENDPOINT}/music/${recordID}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(error => Promise.reject(error))
        } 
    })
      .then(() => {
        callback(recordID)
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentDidMount() {
    this.getAllRecords();
  }

  render() {
    const contextValue = {
      records: this.state.records,
      addRecord: this.addRecord,
      deleteItemRequest: this.deleteItemRequest,
      deleteRecord: this.deleteRecord,
      updateItemRequest: this.updateItemRequest,
      getAllRecords: this.getAllRecords,
    }
    return (
      <main className='App'>
      
        
          <ChoirWizardContext.Provider value={contextValue}>
            <NavBar />
            {this.state.hasError && <p className='red'>There was an error!  Oh no!</p>}
            <Main />
          </ChoirWizardContext.Provider>
       
      </main>
    );
  }
  
}

export default App;