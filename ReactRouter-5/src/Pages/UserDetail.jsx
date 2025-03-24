import React from 'react';
import { useParams,  useNavigate, Link } from 'react-router-dom';


const UserDetail = () => {
  const { ID } = useParams();
  const navigate = useNavigate()

  const goBack = ()=>{
    navigate('/user')
  }

  const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
    { id: 4, name: "David", age: 28, email: "david@example.com" },
    { id: 5, name: "Emma", age: 26, email: "emma@example.com" },
    { id: 6, name: "Frank", age: 32, email: "frank@example.com" }
  ];

  const user = users.find(user => user.id === Number(ID));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="border border-black p-4">
      <h2 className="text-xl font-bold">User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
       <Link to={goBack()} 
       className="text-blue-500 underline"
       >Go Back</Link>
    </div>
  );
};

export default UserDetail;
 