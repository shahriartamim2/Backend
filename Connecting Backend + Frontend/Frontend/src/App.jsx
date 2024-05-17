import { useState, useEffect } from 'react';
import './App.css'
import axios from "axios";

function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  })
  
  return (
    <>
      <div className=" bg-cyan-200 text-yellow-50 w-screen h-screen flex flex-col justify-center items-center gap-5">
        <div className="px">
          <h1 className="text-2xl mx-auto text-gray-800 bg-slate-50 px-3 py-3  ">
            All site users details
          </h1>
        </div>
        <ul className="flex flex-wrap mx-1 content-center items-center">
          {user.map((user) => (
            <li
              key={user.id}
              className="bg-slate-300 text-black my-3 mx-3 px-3 py-3 h-60 w-80"
            >
              <p className="bg-white ring-2 px-3 py-3">
                <b>Name:</b> {user.name}
              </p>
              <p className="bg-white ring-2 px-3 py-3">
                <b>Username:</b> {user.username}
              </p>
              <p className="bg-white ring-2 px-3 py-3">
                <b>Email: </b>
                {user.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App
