import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

const SearchSweets = () => {
  const [sweets, setSweets] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    fetchSweets();
  }, []);

  const fetchSweets = async () => {
    const res = await axios.get("http://localhost:5000/api/sweets");
    setSweets(res.data);
    setFiltered(res.data);
  };

  const handleChange = (e) => {
    const updated = { ...filters, [e.target.name]: e.target.value };
    setFilters(updated);
    applyFilter(updated);
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

    setFiltered(result);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-success">🔍 Search Sweets</h2>

      <div className="card p-4 mb-4 shadow-sm bg-light">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control rounded-pill"
              placeholder="e.g. Kaju"
              value={filters.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Category</label>
            <input
              type="text"
              name="category"
              className="form-control rounded-pill"
              placeholder="e.g. Milk-Based"
              value={filters.category}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Min Price</label>
            <input
              type="number"
              name="minPrice"
              className="form-control rounded-pill"
              placeholder="0"
              value={filters.minPrice}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              className="form-control rounded-pill"
              placeholder="100"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped shadow">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price (₹)</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((sweet) => (
                <tr key={sweet._id}>
                  <td>{sweet.id}</td>
                  <td>{sweet.name}</td>
                  <td>{sweet.category}</td>
                  <td>{sweet.price}</td>
                  <td>{sweet.quantity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No sweets match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchSweets;
