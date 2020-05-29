import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EditExercise = () => {
  const [exercises, setExercises] = useState(['']);
    useEffect(() => {
        axios
          .get("http://localhost:5000/exercises/")
          .then((response) => {
            setExercises(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);

    const deleteExercise = (id) => {
        axios
          .delete("http://localhost:5000/exercises/" + id)
          .then((res) => console.log(res.data));
        setExercises(exercises.filter((el) => el._id !== id));
      };
    const exerciseList = () => {
        return exercises.map((currentexercise) => {
          return (
            <Exercise
              exercise={currentexercise}
              deleteExercise={deleteExercise}
              key={currentexercise._id}
            />
          );
        });
      };  

      const Exercise = (props) => (
        <tr>
          <td>{props.exercise.username}</td>
          <td>{props.exercise.description}</td>
          <td>{props.exercise.duration}</td>
          <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
            <a
              href="#"
              onClick={() => {
                props.deleteExercise(props.exercise._id);
              }}
            >
              delete
            </a>
          </td>
        </tr>
      );
      
  return (
    <div>
      <p>You are on the Edit Exercise component!</p>
        <div>
          <div>
            <h3>Logged Exercises</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>{exerciseList()}</tbody>
            </table>
          </div>
        </div>
    </div>    
        
      );
  
};

export default EditExercise;