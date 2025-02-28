// useRoleLocalStorage.js
import { useState, useEffect } from "react";

const useRoleLocalStorage = (key) => {
  // Hardcoded default value
  const defaultValue = "company";

  // Retrieve the role from local storage or use the default value
  const [selectedRole, setSelectedRole] = useState(() => {
    const storedRole = localStorage.getItem(key);
    return storedRole ? JSON.parse(storedRole) : defaultValue;
  });

  // Save the selected role to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(selectedRole));
  }, [key, selectedRole]);

  return [selectedRole, setSelectedRole];
};

export default useRoleLocalStorage;
