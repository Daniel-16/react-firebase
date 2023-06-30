import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function CreateUser() {
  const [user, setUser] = useState({});
  const createUser = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <form>
        <Form.Control></Form.Control>
      </form>
    </div>
  );
}
