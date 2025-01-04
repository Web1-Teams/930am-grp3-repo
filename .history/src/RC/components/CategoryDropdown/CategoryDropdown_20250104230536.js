import React from 'react';
import './CategoryDropdown.css'; 

const CategoryDropdown = ({ categories, value, onChange }) => (
  <label className="dropdown-label55">
    Category:
    <select className="category-dropdown55" value={value} onChange={onChange} required>
      <option value="" disabled>
        Select a category
      </option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </label>
);

export default CategoryDropdown;
