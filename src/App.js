import React, { Component } from 'react';
import {Formik, Field, ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';

class App extends Component{


  onSubmit = (values) => {
      console.log(values)
  }

  form = (props) =>{
    return <form onSubmit = {props.handleSubmit}>

    <label>Name : </label>
    <Field name = "name"/><br/>
    <ErrorMessage name ="name"/><br/>

    <label>E-Mail : </label>
    <Field name = "email" type="email"/><br/>
    <ErrorMessage name ="email"/><br/>

    <label>Select : </label>
    <Field name = "type" component="select">
        <option value = "1"> One</option>  
        <option value = "2"> Two</option>  
    </Field><br/>
    <ErrorMessage name ="type"/><br/>

    <label>Checkbox : </label>
    <Field name = "active" type="checkbox"/><br/><br/>


    <label>Radio : </label>
    <Field name = "category" type="radio" value = '1'/>
    <Field name = "category" type="radio" value = '2'/><br/>
    <ErrorMessage name ="category"/><br/>


    <label>facebook : </label>
    <Field name = "social.facebook"/><br/>
    <ErrorMessage name ="social.facebook"/><br/>


    <label>twitter : </label>
    <Field name = "social.twitter"/><br/>
    <ErrorMessage name ="social.twitter"/><br/>

    <FieldArray name = "friends"
      render = {arrayHelper => (
      <div>{
        props.values.friends.map((_, index) => (
          <div key = {index}> <Field name = {`friends.${index}`}/> 
          <button type = "button" onClick = {()=> arrayHelper.remove({index})}> Delete</button>
          <ErrorMessage name ={`friends.${index}`}/><br/>
          </div>

        ))}
         <button type = "button" onClick = {()=> arrayHelper.push("some thing")}> Add</button>
      </div>)
        }/>



      <button type = "submit"> Send</button>
    </form>
  }

  schema = () => {
    const schema = Yup.object().shape({
      name : Yup.string().required(),
      email : Yup.string().required(),
      type : Yup.string().required(),
      category : Yup.string().required(),
      social : Yup.object().shape({
        facebook :  Yup.string().required("Facebook is a required field"),
        twitter :  Yup.string().required("Twitter is a required field"),
      }),
      friends: Yup.array().of(
        Yup.string().required('required field')
      )

    });
    return schema;
  }


  render(){

     
    return (
      
      <div>

          <Formik 
          initialValues = {{
            name: "",
            email: "",
            type: "", 
            active:false, 
            category:'1', 
            social:{
              facebook:'',
              twitter:'',
          },
          friends: ['Rabee','Hussam']
        }}
          onSubmit = {this.onSubmit}
          validationSchema = {this.schema()} >
            {this.form}
          </Formik>

      </div>
    );
  }
}

export default App;
