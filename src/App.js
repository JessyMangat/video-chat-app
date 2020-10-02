import React from "react";
import { OTSession, OTStreams, preloadScript } from "opentok-react";
import LandingPage from './components/LandingPage'
import ConnectionStatus from "./components/ConnectionStatus";
import Publisher from "./components/Publisher";
import Subscriber from "./components/Subscriber";
import Footer from './components/Footer';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.createSession = this.createSession.bind(this);
    this.state = {
      error: null,
      connected: false,
      hasCreatedSession: false,
    };
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  }
    
  createSession(){
    this.setState({ hasCreatedSession: true })
  }


  render() {
    return (
      <div className = "App">
        {this.state.hasCreatedSession ? (
       <OTSession
       apiKey={this.props.apiKey}
       sessionId={this.props.sessionId}
       token={this.props.token}
       eventHandlers={this.sessionEvents}
       onError={this.onError}
     >
       {this.state.error ? <div id="error">{this.state.error}</div> : null}
       <ConnectionStatus connected={this.state.connected}/>
       <Publisher />
       <OTStreams>
         <Subscriber />
       </OTStreams>
     </OTSession>
      ) : (
        <LandingPage createSession={this.createSession}/>
      )}
      <Footer />
      </div>
    );
  }
}
export default preloadScript(App);
