import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

const AddSweetForm = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const [sweets, setSweets] = useState([]);
  const [filteredSweets, setFilteredSweets] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    const updated = { ...filters, [e.target.name]: e.target.value };
    setFilters(updated);
    applyFilter(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/sweets", form);
    setForm({ name: "", category: "", price: "", quantity: "" });
    fetchSweets();
  };

  const fetchSweets = async () => {
    const res = await axios.get("http://localhost:5000/api/sweets");
    setSweets(res.data);
    setFilteredSweets(res.data);
  };

  const deleteSweet = async (id) => {
    await axios.delete(`http://localhost:5000/api/sweets/${id}`);
    fetchSweets();
  };

  const applyFilter = (filters) => {
    let result = sweets;

    if (filters.name.trim()) {
      result = result.filter((s) =>
        s.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.category.trim()) {
      result = result.filter((s) =>
        s.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    if (filters.minPrice) {
      result = result.filter((s) => s.price >= Number(filters.minPrice));
    }

    if (filters.maxPrice) {
      result = result.filter((s) => s.price <= Number(filters.maxPrice));
    }

    setFilteredSweets(result);
  };

   // 🛒 Purchase Feature
  const handlePurchase = async (sweet) => {
    const qty = parseInt(prompt(`Enter quantity to purchase (Available: ${sweet.quantity})`));
    if (!qty || qty <= 0) return alert("Invalid quantity!");
    if (qty > sweet.quantity) return alert("Not enough stock!");

    const updatedQty = sweet.quantity - qty;
    
    try {
      await axios.put(`http://localhost:5000/api/sweets/purchase/${sweet._id}`, {
        ...sweet,
        quantity: updatedQty,
      });
      console.log(updatedQty)
      fetchSweets();
      alert("Purchase successful!");
    } catch (err) {
      alert(err);
    }
  };
   // Restock
  const handleRestock = async (sweet) => {
    const qty = parseInt(prompt(`Enter quantity to restock:`));
    if (!qty || qty <= 0) return alert("Invalid quantity!");

    try {
      await axios.put(`http://localhost:5000/api/sweets/restock/${sweet._id}`, {
        quantity: qty,
      });
      fetchSweets();
      alert("Restock successful!");
    } catch (err) {
      alert("Restock failed.");
      console.error(err);
    }
  };
  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <div className="min-vh-50 align-items-center justify-content-center">
      
      {/* Add Sweet Form */}
      <div
        className="card shadow-lg p-4 mb-3 m-auto"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-4"> Add New Sweet </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              <i className="bi bi-cupcake me-2 text-danger" />
              Name
            </label>
            <input
              name="name"
              className="form-control rounded-pill"
              placeholder="E.g. Kaju Katli"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              <i className="bi bi-tags-fill me-2 text-success" />
              Category
            </label>
            <input
              name="category"
              className="form-control rounded-pill"
              placeholder="E.g. Milk-Based"
              value={form.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              <i className="bi bi-currency-rupee me-2 text-warning" />
              Price(₹)
            </label>
            <input
              name="price"
              type="number"
              className="form-control rounded-pill"
              placeholder="E.g. 50"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">
              <i className="bi bi-box-seam me-2 text-secondary" />
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              className="form-control rounded-pill"
              placeholder="E.g. 20"
              value={form.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-lg btn-warning px-5 rounded-pill shadow"
            >
              <i className="bi bi-plus-circle me-2" />
              Add Sweet
            </button>
          </div>
        </form>
      </div>
      {/* Sweet List with Filters */}
      <div className="container mt-4">
        <h2 className="mb-4 text-center"> Available Sweets </h2>
        {/* Filters */}
        <div className="card p-3 mb-3 bg-light shadow-sm">
          <div className="row g-2">
            <div className="col-md-4">
              <input
                type="text"
                name="name"
                className="form-control rounded-pill"
                placeholder="Search by name"
                value={filters.name}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="category"
                className="form-control rounded-pill"
                placeholder="Search by category"
                value={filters.category}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                name="minPrice"
                className="form-control rounded-pill"
                placeholder="Min ₹"
                value={filters.minPrice}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                name="maxPrice"
                className="form-control rounded-pill"
                placeholder="Max ₹"
                value={filters.maxPrice}
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
        {/* Table */}
        <table className="table table-striped table-hover table-bordered text-center rounded-10">
          <thead className="table-dark">
            <tr>
              <th> Name </th> <th> Category </th> <th> Price(₹) </th>
              <th> Quantity </th> <th> Action </th>
            </tr>
          </thead>
          <tbody>
            
            {filteredSweets.map((sweet) => (
              <tr key={sweet._id}>
                <td> {sweet.name} </td> <td> {sweet.category} </td>
                <td> {sweet.price} </td> <td> {sweet.quantity} </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm m-1"
                    onClick={() => deleteSweet(sweet._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success btn-sm m-1"
                    onClick={() => handlePurchase(sweet)}
                  >
                    Purchase
                  </button>
                  <button
                      className="btn btn-primary btn-sm m-1"
                      onClick={() => handleRestock(sweet)}
                    >
                      Restock
                  </button>
                </td>
              </tr>
            ))}
            {filteredSweets.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No sweets found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddSweetForm;
