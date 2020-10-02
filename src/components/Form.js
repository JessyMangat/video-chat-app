import React from 'react'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        validUsername: true
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if(this.state.value.length <= 3){
        this.setState({validUsername: false})
        alert("username must be more than 3 characters!")
      }
      else{
      this.props.formSubmit(this.state.value)}
    }
  
    render() {
      return (
          <div className="Form">
        <form onSubmit={this.handleSubmit}>
        {this.state.validUsername ? (
          
            <input className="input-field" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter your name here" />
        ):(
          <input className="incorrect-field" type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.state.value} />
        )}
          <input className="button" type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default Form;