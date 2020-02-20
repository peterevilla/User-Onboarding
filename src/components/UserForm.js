import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";



const UserForm = ({ touched, errors, status }) => {

    const [user, setUser] = useState({});
    const [userList, setUserList] = useState([])

    
    useEffect(() => {
        status && setUser(status);
        status && setUserList(userList => [...userList, status])
    }, [status]);
    
    
    

    console.log(userList);
    return (
        <div className='form'>
            <Form>
                <label>
                    Name:<br />
                    <Field name='name' type='text' placeholder='Name' /><br />
                </label>
                <label>
                    password:<br />
                    <Field name='password' type='password' placeholder='Password' /><br />
                </label>
                <label>
                    Email:<br />
                    <Field name='email' type='email' placeholder='email' /><br />
                </label>
                <label>
                    Term Of Service:
                <Field type="checkbox" name="termOfService" /><br />
                </label>


                <button>Sumit</button>
            </Form>

            {user.name && (
                <ul key={user.id}>
                    <li>Name: {user.name}</li>
                </ul>
            )}
        </div>
    )
}


export default withFormik({

    mapPropsToValues: props => ({

        name: '',
        password: '',
        email: '',
        termOfService: ''

    }),
    handleSubmit: (values, { resetForm, setStatus }) => {
        // console.log("Submitting!", formikBag)
        // POST body === {}
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {

                setStatus(response.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }

})(UserForm);