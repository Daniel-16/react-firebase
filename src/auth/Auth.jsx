import { useState } from "react";
import { auth, googleProvider } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import Form from "react-bootstrap/Form";
const Auth = () => {
  const [signinForms, setSigninForms] = useState({});
  const handleInputs = (e) => {
    //Destructured name and value for e.target
    const { name, value } = e.target;
    setSigninForms((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(signinForms);
    try {
      await createUserWithEmailAndPassword(
        auth,
        signinForms.email,
        signinForms.password
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error();
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(auth?.currentUser?.email);

  return (
    <div className="container mt-3">
      <form onSubmit={handleFormSubmit}>
        <Form.Control
          type="email"
          name="email"
          value={signinForms.email || ""}
          onChange={handleInputs}
          placeholder="Email"
          className="mb-2"
          required
        />
        <Form.Control
          className="mb-2"
          type="password"
          name="password"
          value={signinForms.password || ""}
          onChange={handleInputs}
          placeholder="Enter Password here"
          required
        />
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      <button className="btn btn-primary mt-2" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
      <br />
      <button className="btn btn-danger mt-1" onClick={signout}>
        Log out
      </button>
    </div>
  );
};

export default Auth;
