import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  medical: [],
  addMedical: (obj) => {},
  removeMedical: (id) => {},
});

const AuthContextProvider = (props) => {
  const url = "https://crudcrud.com/api/d84e261d03974f15b4014b5242a72192";

  const medicalOnDatabase = async () => {
    try {
      const response = await fetch(`${url}/medical`);

      if (response.ok) {
        const data = await response.json();
        console.log("Medical data:", data);
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching medical data:", error.message);
    }
  };

  useEffect(() => {
    medicalOnDatabase();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ADD: addMedical,
        REMOVE: removeMedical,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
