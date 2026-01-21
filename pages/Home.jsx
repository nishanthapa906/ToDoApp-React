import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState("");


  const navigate = useNavigate();
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  return (
    <div   style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
     
      <header className='mt-5 space-y-4 text-2xl p-20 '>
        <h1 className='font-semibold'>Master Plan</h1>
        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      </header>

      <hr style={{ margin: '20px 0', opacity: '0.2' }} />

      {todos.length === 0 && !showInput ? (
        <div className="empty-state p-10  mt-20  space-y-9">
          <div className='' style={{ fontSize: '50px' }}>📝</div>
          <h2 className='text-2xl text-amber-700  '>Welcome !! <br/>Set Up your Targets  </h2>
          <p  className='text-2xl text-amber-700 '>Be productive today. Start by adding a new task!</p>
          <button 
           onClick={()=>{
            navigate('/todo')
           }}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            + Create My First Task
          </button>
        </div>
      ) : (
        <div className="todo-section">
        
          <form onSubmit={handleAddTask} style={{ marginBottom: '20px' }}>
            <input 
              type="text" 
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="What needs to be done?"
              style={{ padding: '10px', width: '250px', borderRadius: '5px 0 0 5px', border: '1px solid #ccc' }}
            />
            <button type="submit" style={{ padding: '10px', borderRadius: '0 5px 5px 0', border: '1px solid #007bff', backgroundColor: '#007bff', color: 'white' }}>
              Add
            </button>
          </form>

         
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map(item => (
              <li key={item.id} style={{ background: '#f4f4f4', margin: '5px 0', padding: '10px', borderRadius: '5px', textAlign: 'left' }}>
                <input type="checkbox" /> {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;