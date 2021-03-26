import React, { Component } from 'react';
import {Formik, Field} from 'formik';
class App extends Component{


  onSubmit = (values) => {
      console.log(values)
  }

  form = (props) =>{
    return <form onSubmit = {props.handleSubmit}>
    <label>Name : </label>
    <Field name = "name"/><hr/>
    <label>E-Mail : </label>
    <Field name = "email"/><hr/>
      <button type = "submit"> Send</button>
    </form>
  }


  render(){

     
    return (
      
      <div>

          <Formik initialValues = {{name: "", email: ""}}onSubmit = {this.onSubmit} >
            {this.form}
          </Formik>

      </div>
    );
  }
}

export default App;
