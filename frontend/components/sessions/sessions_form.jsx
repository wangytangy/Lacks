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

    this.imgArray = [
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/designer_bg.jpg",
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/desktop2_bg.jpg",
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/desktop_bg.jpg",
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/wood1_bg.jpg",
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/wood2_bg.jpg"
    ];
    this.randomImg = this.imgArray[Math.floor(Math.random() * this.imgArray.length)];
    this.backgroundImg = {
      backgroundImage: 'url(' + this.randomImg + ')'
    };
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

  componentDidMount() {
    this.props.clearErrors();
  }


  redirect() {
    this.props.router.replace("messages");
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
      <div id="splash" style={this.backgroundImg}>

        <div className="form">

          <h1>Sign in to your team</h1>
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
      <div id="splash" style={this.backgroundImg}>

        <div className="form">

          <h1>Sign Up for Lacks</h1>
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
