import React, { Component } from 'react';

class App extends Component{

  state = {
    value: 'Default',
    selectVal:2,
    checked:true,
    radioValue : '2'
  }

  setValue = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  setSelectValue = (event) => {
    this.setState({
      selectVal: event.target.value
    })
  }

  setCheckedValue = (event) => {
    this.setState({
      checked: event.target.checked
    })
  }
  changeRadio = (event) => {
    this.setState({
      radioValue: event.target.value
    })
  }

  render(){

     
    return (
      
      <div>


          <input value={this.state.value} onChange={this.setValue}/> <hr/>    
          <textarea value={this.state.value} onChange={this.setValue}/> <hr/>  
          <select value= {this.state.selectVal} onChange={this.setSelectValue} >
            <option value = '1'> One</option>
            <option value = '2'> Two</option>
            <option value = '3'> Three</option>
          </select><hr/>  
          <input type = "checkbox" checked = {this.state.checked} onChange={this.setCheckedValue}/>
          <label>Checkbox</label><hr/>  
          <div onChange={this.changeRadio}>    
              <input type = "radio" value = '1' checked= {this.state.radioValue === '1' } /> One
              <input type = "radio" value = '2' checked= {this.state.radioValue === '2' } /> Two
          </div><hr/> 


      </div>
    );
  }
}

export default App;
