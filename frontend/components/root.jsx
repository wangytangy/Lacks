import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import SessionFormContainer from './sessions/sessions_form_container';
import Splash from './greeting/splash';
import HomeContainer from './home/home_container';
import CurrentChannelContainer from './channels/current_channel_container';

const Root = ({ store }) => {

  function _redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser) {
      replace("/messages");
    }
  }

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Splash } />
          <Route path="login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        </Route>
        <Route path="messages" component={ HomeContainer }>
          <Route path=":id" component={ CurrentChannelContainer } />
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;
