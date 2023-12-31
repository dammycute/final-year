import { useState, useEffect } from "react";
import Select from "react-select";

const UserSelect = ({ backendUrl }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(backendUrl, {
        headers: {
          Authorization: token,
        },
      });
      const users = await response.json();
      
      setUsers(users);
    }

    fetchUsers();
  }, [backendUrl]);

  const handleSearch = (inputValue) => {
    if (typeof inputValue === 'string') {
      const filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(inputValue.toLowerCase())
      );
      setUsers(filteredUsers);
    }
  };
  

  const handleChange = (selectedOption) => {
    setSelectedUser(selectedOption);
  };

  const options = users.map((user) => ({
    label: (
      <div className="flex justify-between">
        <p>{user.email}</p>
        <p>{user.name}</p>
      </div>
    ),
    value: user.id,
  }));

  return (
    <div>
      <Select
        options={options}
        value={selectedUser}
        onChange={handleChange}
        onInputChange={handleSearch}
        placeholder="Select a user to add to the project"
        linkTo={backendUrl}
      />
    </div>
  );
};

export default UserSelect;
