import React, { useState } from 'react';

const CrudOperation= () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editingUserId, setEditingUserId] = useState(null);

  // Handle form input changes
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission for creating or updating a user
  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingUserId) {
      // Perform update operation
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingUserId ? { ...user, ...formData } : user
        )
      );

      // Clear the form and editing state
      setFormData({ name: '', email: '' });
      setEditingUserId(null);
    } else {
      // Perform create operation
      const newUser = { id: Date.now(), ...formData };
      setUsers((prevUsers) => [...prevUsers, newUser]);

      // Reset form data
      setFormData({ name: '', email: '' });
    }
  };

  // Handle deletion of a user
  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  // Handle editing a user
  const handleEditUser = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditingUserId(user.id);
  };

  return (
    <div className='user'>
      <h1>User CRUD Opration</h1>

      {/* User creation/edit form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          style={{height: "30px", width:"200px", margin: "5px"}}
        />
        <input
         style={{height: "30px",width: "200px", margin: "5px"}}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <button className='but' type="submit">{editingUserId ? 'Update' : 'Create'}</button>
      </form>

      {/* User list */}
      <div>
        {users.map((user) => (
          <div key={user.id}>
           User: {user.name} & Email: ({user.email})
            <button className='but' onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button className='but' onClick={() => handleEditUser(user)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrudOperation;
