import React, { Component } from 'react'
import { createBrowserHistory } from 'history';
import TokenService from '../services/token-service'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleOnClickCancel() {
    const history = createBrowserHistory();
    history.goBack()
}

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target
      TokenService.saveAuthToken(
        TokenService.makeBasicAuthToken(user_name.value, password.value)
      )

      user_name.value = ''
      password.value = ''
      this.props.onLoginSuccess()

  }

  render() {
    const { error } = this.state
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitBasicAuth}
      >
          <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            type="text"
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button type='submit'>
          Login
        </button>
        <button type="reset" onClick={this.handleOnClickCancel}>Cancel</button>
      </form>
    )
  }
}