import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { username: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
    this.renderLogIn = this.renderLogIn.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
  }

  handleChange(e) {
    if (e.currentTarget.type === "text") {
      this.setState({username: e.currentTarget.value});
    } else if (e.currentTarget.type === "password") {
      this.setState({password: e.currentTarget.value});
    } else if (e.currentTarget.type === "email") {
      this.setState({email: e.currentTarget.value});
    }
  }

  redirect() {
    this.props.router.push("/");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then((user) => {
      window.currentUser = user;
      this.redirect();
    });
    this.setState({username: "", email: "", password: ""});
  }

  renderLogIn(errorsArr) {

    return (
      <div className="login-form">
        <div className="login-header">
          <h1>Log In</h1>
        </div>

        <form className="login-form-field" onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}>
            </input>
          </label>

          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
          </label>

          <button>Log In</button>
        </form>
        <ul>{errorsArr}</ul>
      </div>
    );
  }

  renderSignUp(errorsArr) {
    return (
      <div className="signup-form">

        <h1 className="signup-header">Sign Up</h1>
        <h2 className="signup-instruction">enter a username, email, and password</h2>
        
        <form className="signup-form-field" onSubmit={this.handleSubmit}>

           <label htmlFor="form-username">Username</label>
            <input
              id="form-username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}>
            </input>

          <label htmlFor="form-password">Password</label>
            <input
              id="form-password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>

          <label htmlFor="form-email">Email</label>
            <input
              id="form-email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}>
            </input>

          <button>Sign Up</button>
        </form>
        <ul>{errorsArr}</ul>
      </div>
    );
  }

  render() {
    let errorsArr;
    if (this.props.errors.length > 0) {
      errorsArr = this.props.errors.map((error, i) => {
        return <li key={i}>{error}</li>;
      });
    }

    if (this.props.formType === "login" || this.props.formType === "/login") {
      return this.renderLogIn(errorsArr);
    } else if (this.props.formType === "signup" || this.props.formType === "/signup") {
      return this.renderSignUp(errorsArr);
    }
  }


}

export default SessionForm;
