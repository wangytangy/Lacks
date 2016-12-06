import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { username: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
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
    this.props.processForm(user).then(() => this.redirect());
  }

  render() {
    let formName;
    if (this.props.formType === "login" || this.props.formType === "/login") {
      formName = "Log In";
    } else if (this.props.formType === "signup" || this.props.formType === "/signup") {
      formName = "Sign Up";
    }

    return (
      <div>
        <h1>{formName}</h1>
        <form onSubmit={this.handleSubmit}>
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

          <label>Email
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}>
            </input>
          </label>


          <button>{formName}</button>
        </form>
      </div>
    );
  }

}

export default SessionForm;
