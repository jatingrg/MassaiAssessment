import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from './firebase';

function Ans5() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskInput, setEditTaskInput] = useState('');
  
  const tasksCollectionRef = collection(db, 'tasks');

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(tasksCollectionRef);
      setTasks(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchTasks();
  }, [tasks]);

  const addTask = async () => {
    if (taskInput.trim()) {
      await addDoc(tasksCollectionRef, { name: taskInput, status: 'not-started' });
      setTaskInput('');
    }
  };

  const editTask = async () => {
    if (editTaskInput.trim()) {
      const taskDoc = doc(db, 'tasks', editTaskId);
      await updateDoc(taskDoc, { name: editTaskInput });
      setEditTaskId(null);
      setEditTaskInput('');
    }
  };

  const deleteTask = async (id) => {
    const taskDoc = doc(db, 'tasks', id);
    await deleteDoc(taskDoc);
  };

  const handleEdit = (task) => {
    setEditTaskId(task.id);
    setEditTaskInput(task.name);
  };

  return (
    <div>
      <h2>Task Management</h2>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {editTaskId && (
        <div>
          <input
            type="text"
            value={editTaskInput}
            onChange={(e) => setEditTaskInput(e.target.value)}
            placeholder="Edit task"
          />
          <button onClick={editTask}>Update Task</button>
        </div>
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ans5;
