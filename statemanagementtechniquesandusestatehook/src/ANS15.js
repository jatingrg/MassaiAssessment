import React, { useState } from 'react';

function ANS15() {
  const [items, setItems] = useState('');
  const [priority, setPriority] = useState('High');
  const [list, setList] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  function addItems() {
    if (items.trim() === '') {
      alert('Enter the input fields');
      return;
    }
    const newTask = {
      id: list.length + 1,
      items,
      priority,
      completed: false
    };
    setList([...list, newTask]);
    setItems('');
  }

  function deleteItems(id) {
    setList(list.filter((task) => task.id !== id));
  }

  function markAsCompleted(id) {
    setList(
      list.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function filterByPriority() {
    const priorityFilter = { High: 1, Medium: 2, Low: 3 };
    const sortedList = [...list].sort(
      (a, b) => priorityFilter[a.priority] - priorityFilter[b.priority]
    );
    setList(sortedList);
  }

  const filteredList = list.filter((task) => {
    if (filterStatus === 'Completed') return task.completed;
    if (filterStatus === 'Pending') return !task.completed;
    return true;
  });

  return (
    <>
      <input
        type="text"
        placeholder="Enter The Item Name"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={addItems}>Add</button>
      <button onClick={filterByPriority}>Sort by Priority</button>

      <select onChange={(e) => setFilterStatus(e.target.value)} value={filterStatus}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>

      {filteredList.map((data) => (
        <div key={data.id}>
          <p>ID: {data.id}</p>
          <p>Item: {data.items}</p>
          <p>Priority: {data.priority}</p>
          <p>Status: {data.completed ? 'Completed' : 'Pending'}</p>
          <button onClick={() => markAsCompleted(data.id)}>
            {data.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </button>
          <button onClick={() => deleteItems(data.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default ANS15;
