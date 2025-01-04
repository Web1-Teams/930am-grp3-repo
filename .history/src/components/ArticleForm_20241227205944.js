import React, { useState } from 'react';
import '../styles/ArticleForm.css';

const ArticleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    bannerImage: '',
    hashtags: '',
    title: '',
    description: '',
    body: '',
    authorName: '',
  });

  const categories = [
    "Pet Care",
    "Health and Wellness",
    "Adoption and Rescue",
    "Animal Behavior",
    "Wildlife and Conservation",
    "Lifestyle and Stories",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to the parent or save
    setFormData({
      category: '',
      bannerImage: '',
      hashtags: '',
      title: '',
      description: '',
      body: '',
      authorName: '',
    });
  };

  return (
    <div className="article-form-container">
      <form className="article-form" onSubmit={handleSubmit}>
        <h2>Create an Article</h2>

        {/* Dropdown for Category */}
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleCategoryChange}
            required
          >
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

        <label>
          Banner Image:
          <input
            type="image"
            alt='banner image'
            name="bannerImage"
            value={formData.bannerImage}
            onChange={handleChange}
            placeholder="Upload a banner image"
            required
          />
        </label>

        <label>
          Hashtags:
          <input
            type="text"
            name="hashtags"
            value={formData.hashtags}
            onChange={handleChange}
            placeholder="Enter hashtags (e.g., #webdevelopment)"
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter article title"
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a short description..."
            rows="4"
            required
          />
        </label>

        <label>
          Body:
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Write the body of the article"
            rows="4"
            required
          />
        </label>

        <label>
          Author Name:
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            placeholder="Enter author name"
            required
          />
        </label>

        <button type="submit">Post Article</button>
      </form>
    </div>
  );
};

export default ArticleForm;
