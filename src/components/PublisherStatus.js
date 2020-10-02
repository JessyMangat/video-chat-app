import React from 'react';
 
class PublisherStatus extends React.Component {
  render() {
    let status = this.props.connected ? 'Connected' : 'Disconnected';
    return (
      <div className="PublisherStatus">
        <strong>{this.props.userName}:</strong> {status}
      </div>
    );
  }
}
export default PublisherStatus;