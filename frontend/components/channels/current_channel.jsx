import React from 'react';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.params.id) {
      this.props.fetchAChannel(this.props.params.id);
    }
    //componentDidMount() is invoked immediately after a component is mounted.
    // Initialization that requires DOM nodes should go here.
    // If you need to load data from a remote endpoint,
    //this is a good place to instantiate the network request
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.params.id) return;
    if (nextProps.params.id !== this.props.params.id) {
      this.props.fetchAChannel(nextProps.params.id);
    }
    // componentWillReceiveProps() is invoked before
    // a mounted component receives new props.
    // If you need to update the state in response to prop changes
    // (for example, to reset it),
    // you may compare this.props and nextProps
    // and perform state transitions using this.setState() in this method.
  }

  render() {
    return(
      <div className="current-channel">
        <h1>Current Channel Component</h1>
        <h2>{this.props.currentChannel.title}</h2>
        <h2>{this.props.currentChannel.description}</h2>
      </div>
    );
  }
}

export default CurrentChannel;
