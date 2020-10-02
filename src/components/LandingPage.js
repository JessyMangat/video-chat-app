import React from "react";
import Form from './Form'

const LandingPage = ({ createSession }) => {
  const handleSubmit = (input) => {
    createSession(input);
  };

  return (
    <div className="LandingPage">
      <h1>Welcome to the Video Chat App</h1>
      <h2>Built by Jessy Mangat <a href="https://github.com/JessyMangat/video-chat-app" target="blank"><img alt="github logo" src="https://img.icons8.com/fluent/23/000000/github.png"/></a></h2>
      <h2>Enter your name and click the button below to get started</h2>
      <Form formSubmit={handleSubmit}/>
    </div>
  );
};

export default LandingPage;
