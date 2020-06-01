
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

let history = useHistory();

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const changeUsername = e => {
        setUsername(e.target.value)
      }
    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          username: username,
        };
        console.log(newUser);
        axios.post('http://localhost:5000/users/add', newUser)
        .then(res => console.log(res.data));
        setUsername('')
        history.push("/");
      }
  return (
    <div>
      <p>You are on the Create User component!</p>
      <div>
        <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                defaultValue={username}
                onChange={changeUsername}
                />
            </div>
    <div className="form-group">
      <input type="submit" value="Create User" className="btn btn-primary" />
    </div>
  </form>
</div>
    </div>
    
  );
};

export default CreateUser;