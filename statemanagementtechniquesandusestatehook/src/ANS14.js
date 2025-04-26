import React, { useState } from 'react';
import './App.css';


function ANS14() {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    function addTask() {
        if (task.trim() === "") {
            alert("Enter The Input Fields");
            return;
        }
        const newTask = {
            id: list.length + 1,
            task: task,
            completed: false,
        };
        setList([...list, newTask]);
        setTask('');
    }

    function taskstatus(id) {
        setList(
            list.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    function taskdelete(id) {
        setList(list.filter((task) => task.id !== id));
    }

    return (
        <>
            <input
                type="text"
                value={task}
                placeholder="Enter The Task"
                onChange={(e) => setTask(e.target.value)}
            />
            <button className='buttonConatainer' onClick={addTask}>Add</button>

            {list.map((data) => (
                <div key={data.id}>
                    <p>{data.id}</p>
                    <p>{data.task}</p>
                    <p>{data.completed ? 'Completed' : 'Pending'}</p>
                    <button onClick={() => taskstatus(data.id)}>
                        Mark as {data.completed ? 'Pending' : 'Completed'}
                    </button>
                    <button onClick={() => taskdelete(data.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

export default ANS14;
