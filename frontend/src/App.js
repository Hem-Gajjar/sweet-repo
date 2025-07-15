import React, { useEffect, useState } from "react";
import axios from "axios";
import AddSweetForm from "./components/AddSweetForm";


const App = () => {
  const [sweets, setSweets] = useState([]);

  const fetchSweets = async () => {
    const res = await axios.get("http://localhost:5000/api/sweets");
    setSweets(res.data);
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-5">Sweet Shop Management</h1>
      <AddSweetForm setSweets={setSweets} sweets={sweets} />
      
    </div>
  );
};

export default App;
