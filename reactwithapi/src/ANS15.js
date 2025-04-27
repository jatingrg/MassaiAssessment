import axios from "axios";
import { useEffect, useState } from "react";

function ANS15() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [list, setList] = useState([]);
  const [editname, seteditname] = useState('');
  const [editemail, seteditemail] = useState('');
  const [editvalue, seteditvalue] = useState(null);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc

  async function gettodos() {
    try {
      const response = await axios.get("https://tasks-bd851-default-rtdb.firebaseio.com/todos.json");
      if (response.data) {
        const fetched = Object.entries(response.data).map(([id, todo]) => ({
          id,
          ...todo
        }));
        setList(fetched);
      } else {
        setList([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addTodo() {
    if (name.trim() === "" || email.trim() === "") {
      alert("Enter the input fields");
      return;
    }
    try {
      await axios.post("https://tasks-bd851-default-rtdb.firebaseio.com/todos.json", {
        name: name,
        email: email,
        completed: false
      });
      setname('');
      setemail('');
      gettodos(); 
    } catch (err) {
      console.log("Error adding new todo", err);
    }
  }

  async function updateTodo(id, updatedEmail, updatedName) {
    try {
      await axios.patch(`https://tasks-bd851-default-rtdb.firebaseio.com/todos/${id}.json`, {
        name: updatedName,
        email: updatedEmail
      });
      gettodos(); 
    } catch (err) {
      console.log("Error updating todo", err);
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`https://tasks-bd851-default-rtdb.firebaseio.com/todos/${id}.json`);
      gettodos();
    } catch (error) {
      console.log(error);
    }
  }

  function getFilteredAndSortedList() {
    let filtered = list.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
    );

    let sorted = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return sorted;
  }

  useEffect(() => {
    gettodos();
  }, []);

  return (
    <>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)} />
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <br /><br />

      {/* Search input */}
      <input 
        type="text" 
        placeholder="Search by name or email..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort toggle button */}
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort {sortOrder === 'asc' ? '🔼 Asc' : '🔽 Desc'}
      </button>

      <br /><br />

      {getFilteredAndSortedList().map((data) => (
        <div key={data.id}>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <button onClick={() => {
            seteditemail(data.email);
            seteditname(data.name);
            seteditvalue(data.id);
          }}>Edit</button>
          <button onClick={() => {
            deleteTodo(data.id);
          }}>Delete</button>
          <hr />
        </div>
      ))}

      {/* Edit section */}
      {editvalue && (
        <>
          <input type="text" placeholder="Edit Name" value={editname} onChange={(e) => seteditname(e.target.value)} />
          <input type="email" placeholder="Edit Email" value={editemail} onChange={(e) => seteditemail(e.target.value)} />
          <button onClick={() => {
            updateTodo(editvalue, editemail, editname);
            seteditemail('');
            seteditname('');
            seteditvalue(null);
          }}>Save</button>
          <button onClick={() => {
            seteditemail('');
            seteditname('');
            seteditvalue(null);
          }}>Cancel</button>
        </>
      )}
    </>
  );
}

export default ANS15;
