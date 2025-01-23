import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import "./index.css";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
const passwordRegex = RegExp("^.{1,6}$");

const errorMessages = {
  email: "Please enter a valid email address",
  password: "Your input must be at most 6 characters long.",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    terms: null,
  });

  const history = useHistory();

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let isValid;
    if (name === "email") {
      isValid = emailRegex.test(value);
    } else if (name === "password") {
      isValid = passwordRegex.test(value);
    } else if (name === "terms") {
      isValid = value;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: isValid }));
  };

  useEffect(() => {
    const validation = Object.values(errors).every((val) => val === true);
    setIsValid(validation);
  }, [errors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isValid);
    console.log(errors);
    if (isValid) {
      history.push("/success");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="border p-4 bg-light" noValidate>
        <h4 className="text-center mb-3">Login</h4>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Enter your email"
            type="email"
            onChange={handleChange}
            value={form.email}
            valid={errors.email === true}
            invalid={errors.email === false}
          />
          {!errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Enter your password "
            type="password"
            onChange={handleChange}
            value={form.password}
            valid={errors.password === true}
            invalid={errors.password === false}
          />
          {!errors.password && (
            <FormFeedback>{errorMessages.password}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup check>
          <Input
            id="terms"
            name="terms"
            checked={form.terms}
            type="checkbox"
            onChange={handleChange}
          />{" "}
          <Label htmlFor="terms" check>
            I agree to terms of service and privacy policy
          </Label>
        </FormGroup>
        <FormGroup className="text-center p-4">
          <Button type="submit" color="primary" disabled={!isValid}>
            Sign In
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
