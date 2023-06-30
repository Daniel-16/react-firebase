import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import { getDocs, collection } from "firebase/firestore";
import ReactModal from "react-modal";

export default function Data() {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getDocs(userCollectionRef);
        const filteredUser = user.docs.map((user) => ({
          ...user.data(),
          id: user.id,
        }));
        console.log(filteredUser);
        setUsers(filteredUser);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setError("An error occured while loading data");
      }
    };
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-grow"></div>
      </div>
    );
  } else if (error !== null) {
    return (
      <div className="container pt-3">
        <h3 className="text-center">An error occured while loading.</h3>
      </div>
    );
  } else {
    return (
      <div className="container pt-3">
        {users.map((user) => (
          <div className="card mb-2" key={user.id}>
            <div className="card-body">
              <h3 className="card-title">{user.name}</h3>
              <p className="card-text">{user.age}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
