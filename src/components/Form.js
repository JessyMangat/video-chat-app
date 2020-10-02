import React from 'react'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.formSubmit(this.state.value)
    }
  
    render() {
      return (
          <div className="Form">
        <form onSubmit={this.handleSubmit}>
          
            <input className="input-field" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter your name here" />
         
          <input className="button" type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default Form;