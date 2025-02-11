import React, { useEffect, useState } from 'react';

const UseEffectEx = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(1000);
    }, 5000);
  }, []); 

  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='parent'>
      <h1>UseEffectEx</h1>
      {/* Uncomment to show the count after 5 seconds */}
      {/* <h1>{count}</h1> */}
      
      {users.map((user, index) => (
        <React.Fragment key={index}>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
        </React.Fragment>
      ))}
    </div>
  );
};

export default UseEffectEx;

