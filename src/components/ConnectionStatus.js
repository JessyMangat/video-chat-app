import React from 'react';
 
class ConnectionStatus extends React.Component {
  render() {
    let status = this.props.connected ? 'Connected' : 'Disconnected';
    return (
      <div className="connectionStatus">
        <strong>{this.props.userName}:</strong> {status}
      </div>
    );
  }
}
export default ConnectionStatus;