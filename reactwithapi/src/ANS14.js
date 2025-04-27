import React from 'react'
import axios from "axios";
import { useEffect } from "react";

function ANS14() {
  const [tasks, setTasks] = React.useState([]);

  const fetchData = () => {
    axios("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        const tasksData = response.data;
        const tasksArray = Object.keys(tasksData).map((key) => ({
          id: key,
          name: tasksData[key].name,
        }));
        setTasks(tasksArray);
      })
      .catch((error) => console.log("Error fetching tasks:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ANS14;
