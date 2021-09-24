import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import {addUser} from "../redux/actions/action"
const Add = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const [newUser, setnewUser] = useState({name:"",email:""})
    const handleChange=(e)=>{
        e.preventDefault();
        setnewUser({...newUser,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
dispatch(addUser(newUser,history))
    }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Age"
            placeholder="Age"
            name="age"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="joe@schmoe.com"
          error={{
            content: "Please enter a valid email address",
            pointing: "below",
          }}
          name="email"
          onChange={handleChange}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Confirm"
          label="Label with htmlFor"
        />
      </Form>
    </div>
  );
};

export default Add;
