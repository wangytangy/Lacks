import React from 'react';
import { Link } from 'react-router';


const Splash = () => {
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
};

export default Splash;
