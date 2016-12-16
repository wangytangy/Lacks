import React from 'react';
import { Link } from 'react-router';


class Splash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="splash">
        <div className="signup-bg">
          <h1 className="header-title">
            A messaging app for teams who like not working
          </h1>

          <button className="signup-button">
            <Link to="signup">Sign up for free</Link>
          </button>
        </div>

      </div>
    );
  }

}

export default Splash;

// if (!this.props.usersChannels.length) {
//   return <MDSpinner className="spinner" size={100} />;
// }
