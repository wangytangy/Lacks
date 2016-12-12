import { connect } from 'react-redux';
import ChannelHeader from './channel_header';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelHeader);
