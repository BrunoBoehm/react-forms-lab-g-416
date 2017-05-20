const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    const {username, password} = this.state;
    //=> const username = this.state.username
    //=> const password = this.state.password
    event.preventDefault();

    if (!username || !password){
      console.log('Cannot log in with incomplete info');
      return;
      // if not valid gets out of the function without proceeding
    }
    // could be an else statement
    this.props.onSubmit({ username, password })
    // <LoginForm onSubmit={login} /> with login() a function that console.log()
    // function login({ username, password }) {
    //   console.log(`Logging in ${username} with password ${password}`);
    // }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
