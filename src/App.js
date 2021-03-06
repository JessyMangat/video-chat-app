import React from "react";
import { OTSession, OTStreams, preloadScript } from "opentok-react";
import LandingPage from "./components/LandingPage";
import Publisher from "./components/Publisher";
import Subscriber from "./components/Subscriber";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.createSession = this.createSession.bind(this);
    this.state = {
      error: null,
      connected: false,
      hasCreatedSession: false,
      userName: "",
    };
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      },
    };
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  createSession(input) {
    this.setState({ userName: input });
    this.setState({ hasCreatedSession: true });
  }

  render() {
    return (
      <div className="App">
        {this.state.hasCreatedSession ? (
          <div className="video-container">
            <OTSession
              apiKey={this.props.apiKey}
              sessionId={this.props.sessionId}
              token={this.props.token}
              eventHandlers={this.sessionEvents}
              onError={this.onError}
            >
              {this.state.error ? (
                <div id="error">{this.state.error}</div>
              ) : null}
                <div className="publisher-container">
                <Publisher
                  connected={this.state.connected}
                  userName={this.state.userName}
                />
                </div>
              <OTStreams>
                <div className="subscriber-container">
                  <Subscriber/>
                  </div>
              </OTStreams>
            </OTSession>
          </div>
        ) : (
          <LandingPage createSession={this.createSession} />
        )}
      </div>
    );
  }
}
export default preloadScript(App);
