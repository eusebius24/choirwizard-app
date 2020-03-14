import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import NavBar from './NavBar'
import config from '../config'
import ChoirWizardContext from '../context/ChoirWizardContext'



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