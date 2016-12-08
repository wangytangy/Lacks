import { connect } from 'react-redux';
import CreateChannelForm from './create_channel_form';
import { createAChannel } from '../../actions/channels_actions';


const mapDispatchToProps = (dispatch) => ({
  createChannel: (channel) => dispatch(createAChannel(channel))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateChannelForm);
