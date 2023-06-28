import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import { getDocs, collection } from "firebase/firestore";

export default function Data() {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);
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
      }
    };
    getUser();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Admin Dashboard</h1>
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
