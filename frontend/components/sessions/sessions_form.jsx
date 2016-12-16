import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { username: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
    this.renderLogIn = this.renderLogIn.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
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

  guestLogin() {
    let user = {username: "guest", email: "guest@gmail.com", password: "guestpassword"};
    this.props.login(user).then((user) => {
      window.currentUser = user;
      this.redirect();
    });
  }


  redirect() {
    this.props.router.push("messages");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.processForm(user).then((user) => {
      window.currentUser = user;
      this.redirect();
    }, (errors) => {
      console.log(errors);
    });
    this.setState({username: "", email: "", password: ""});
  }

  renderLogIn(errorsArr) {

    return (
      <div className="splash">

        <div className="form">

          <h1 className="header">Sign in to your team</h1>
          <h2 className="signup-instruction">enter a username and password</h2>

          <form className="form-field" onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}>
              </input>
            </label>

            <label>
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}>
              </input>
            </label>

            <button className="submit">Log In</button>
          </form>
          <div className="guest-login">Don't have an account&#63; Sign up <Link to="signup">
            here</Link>
          </div>
          <ul className="errors-list">{errorsArr}</ul>

        </div>
      </div>
    );
  }

  renderSignUp(errorsArr) {
    return (
      <div className="splash">

        <div className="form">

          <h1 className="header">Sign Up for Lacks</h1>
          <h2 className="signup-instruction">sign up with a username and password</h2>

          <form className="form-field" onSubmit={this.handleSubmit}>

             <label htmlFor="form-username"></label>
              <input
                id="form-username"
                placeholder="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}>
              </input>

            <label htmlFor="form-password"></label>
              <input
                id="form-password"
                placeholder="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}>
              </input>

            <button className="submit">Sign Up</button>
            <div className="guest-login">Sign up as a <a onClick={this.guestLogin}>guest</a></div>
          </form>
          <ul className="errors-list">{errorsArr}</ul>

        </div>
      </div>
    );
  }

  render() {
    let errorsArr;
    if (this.props.errors.length > 0) {
      errorsArr = this.props.errors.map((error, i) => {
        return <li key={i} className="auth-errors">{error}</li>;
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
