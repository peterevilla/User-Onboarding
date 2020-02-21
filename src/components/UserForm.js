import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { Button, FormGroup } from "reactstrap";
import List from "./List";

const UserForm = ({ touched, errors, status }) => {
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    status && setUser(status);
    status && setUserList(userList => [...userList, status]);
  }, [status]);

  console.log(userList);
  return (
    <div className="box">
      <Form className="form">
        <FormGroup col>
          <label>
            <p>Name</p>
            <br />
            <Field name="name" type="text" placeholder="Name" />
            {errors.name && touched.name &&  (
            <div className='err'>{errors.name}</div>
          )}
            
            <br />
          </label>
        </FormGroup>
        <FormGroup col>
          <label>
            <p>Password</p>
            <br />
            <Field name="password" type="password" placeholder="Password" />
            {errors.password && touched.password &&  (
            <div className='err'>{errors.password}</div>)}
            <br />
          </label>
        </FormGroup>
        <FormGroup col>
          <label>
            <p>Email</p>
            <br />
            <Field name="email" type="email" placeholder="email" />
            {errors.email && touched.email &&  (
            <div className='err'>{errors.email}</div>)}
            <br />
          </label>
        </FormGroup>
        <FormGroup>
        <Field component="select"  name="role">
            <option>Choose an Option</option>
            <option value="student">Student</option>
            <option value="graduated">Graduated</option>
        </Field>
        </FormGroup>
        <FormGroup col>
          <label>
            <p>Term Of Service</p>
            <Field type="checkbox" name="termOfService" />
            <br />
          </label>
        </FormGroup>

        <Button>Submit</Button>
      </Form>

   
      <div className="list">
        <h2>Users</h2>
        <List userList={userList} />
      </div>

    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    name: "",
    password: "",
    email: "",
    role: "",
    termOfService: ""
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    // console.log("Submitting!", formikBag)
    // POST body === {}
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        setStatus(response.data);
        alert("Your information was submitted");
        resetForm();
      })
      .catch(err => console.log(err.response));
  },
  validationSchema: yup.object().shape({
    name: yup
      .string()
      .required("Required!"),
    email: yup
    .string()
    .email('Add a valid email'),
    password: yup
    .string()
    .min(8)
  }),
})(UserForm);
