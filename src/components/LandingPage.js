import React from 'react'

const LandingPage = ({ createSession }) => {

    const session = () => {
        createSession()
    }

    return(
        <div className="LandingPage">
            <h1>Welcome to the Video Chat App</h1>
            <h2>Enter your name and click the button below to get started</h2>
            <div className="form-container">
            <input placeholder="Enter your name here"></input>
            </div>
            <button onClick={session}>Get Started</button>
        </div>
    )
}

export default LandingPage