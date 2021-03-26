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
    <Field name = "email" type="email"/><hr/>

    <label>Select : </label>
    <Field name = "type" component="select">
        <option value = "1"> One</option>  
        <option value = "2"> Two</option>  
    </Field><hr/>

    <label>Checkbox : </label>
    <Field name = "active" type="checkbox"/><hr/>


    <label>Radio : </label>
    <Field name = "category" type="radio" value = '1'/>
    <Field name = "category" type="radio" value = '2'/><hr/>

      <button type = "submit"> Send</button>
    </form>
  }


  render(){

     
    return (
      
      <div>

          <Formik initialValues = {{name: "", email: "",type: "", active:false, category:'1'}}onSubmit = {this.onSubmit} >
            {this.form}
          </Formik>

      </div>
    );
  }
}

export default App;
