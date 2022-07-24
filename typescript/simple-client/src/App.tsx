import React, { useEffect, useState } from 'react';
import User from './components/User';
import api from './services/api';


interface IUsers {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    api.get<IUsers[]>("/users").then(response => {
      setUsers(response.data);
      console.log(response);
      
    })
  
    return () => {
      setUsers([]);
    }
  }, [])
  

  return (
    <div className="App">
      { users.map((user, key) => <User user={user} key={key} /> ) }
    </div>
  );
}

export default App;
