import React from "react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
    const params= useParams();
    console.log(params);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const userId = params.id;

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching user:", error));
    }, [userId]);


  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {loading ? 
          <p>Loading...</p>
        : 
          <div>
            <h1>User Profile</h1>
            <h1>{user.name}</h1>
          </div>
        }
      </main>
    </>
  );
};

export default UserProfile;