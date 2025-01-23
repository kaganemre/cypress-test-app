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
import axios from "axios";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
);

const errorMessages = {
  email: "Please enter a valid email address",
  password: "Password must be at least 4 characters long",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      if (emailRegex.test(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "password") {
      if (passwordRegex.test(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "terms") {
      if (checked) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    useEffect(() => {
      const validation = Object.values(errors).every((val) => val === true);
      setIsValid(validation);
    }, [form]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      axios
        .get("https://6540a96145bedb25bfc247b4.mockapi.io/api/login")
        .then((res) => {
          const user = res.data.find(
            (item) => item.password == form.password && item.email == form.email
          );
          if (user) {
            setForm(initialForm);
            history.push("/main");
          } else {
            history.push("/error");
          }
        });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="border p-4 bg-light">
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
            invalid={errors.email}
          />
          {errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
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
            invalid={errors.password}
          />
          {errors.password && (
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
          <Button color="primary" disabled={!form.terms}>
            Sign In
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
