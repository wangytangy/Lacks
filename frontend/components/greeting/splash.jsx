import React from 'react';
import { Link } from 'react-router';


class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.imgArray = [
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/splash1.jpg",
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/splash2.jpg",
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/splash3.jpg",
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/wood1_bg.jpg",
      "https://s3.amazonaws.com/lacks-pro/messages/images/000/000/085/original/wood2_bg.jpg"
    ];
    this.randomImg = this.imgArray[Math.floor(Math.random() * this.imgArray.length)];
    this.backgroundImg = {
      backgroundImage: 'url(' + this.randomImg + ')'
    };
  }

  render() {

    return(
      <div className="splash" style={this.backgroundImg}>
        <div className="signup-bg">
          <h1>
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
