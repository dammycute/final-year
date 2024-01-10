import { useState, useEffect } from "react";
import Select from "react-select";

const TeamSelect = ({ backendUrl, onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(backendUrl, {
          headers: {
            Authorization: token,
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, [backendUrl]);

  const handleSearch = (inputValue) => {
    const filteredUsers = users.filter((user) =>
      user.email.toLowerCase().includes(inputValue.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const handleChange = (selectedOption) => {
    setSelectedUser(selectedOption);
    onSelectUser(selectedOption);
  };

  const options = users.map((user) => ({
    label: user.email,
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
        isSearchable
        styles={{
          menu: (provided) => ({
            ...provided,
            top: "auto",
            bottom: "100%",
          }),
          menuList: (provided) => ({
            ...provided,
            maxHeight: "150px", // Adjust the max height as needed
            overflowY: "auto",
          }),
        }}
      />
    </div>
  );
};

export default TeamSelect;
