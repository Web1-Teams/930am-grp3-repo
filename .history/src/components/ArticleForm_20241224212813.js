import React, { useState } from 'react';
import '../styles/ArticleForm.css';

const ArticleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    bannerImage: '',
    hashtags: '',
    title: '',
    description: '',
    authorImage: '',
    authorName: '',
    authorFollowers: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      authorImage: '',
      authorName: '',
      authorFollowers: '',
    });
  };

  return (
    <div className="article-form-container">
      <form className="article-form" onSubmit={handleSubmit}>
        <h2>Create a New Article</h2>

        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
        </label>

        <label>
          Banner Image URL:
          <input
            type="text"
            name="bannerImage"
            value={formData.bannerImage}
            onChange={handleChange}
            placeholder="Enter banner image URL"
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
          Author Image URL:
          <input
            type="text"
            name="authorImage"
            value={formData.authorImage}
            onChange={handleChange}
            placeholder="Enter author image URL"
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

        <label>
          Author Followers:
          <input
            type="number"
            name="authorFollowers"
            value={formData.authorFollowers}
            onChange={handleChange}
            placeholder="Enter number of followers"
            required
          />
        </label>

        <button type="submit">Post Article</button>
      </form>
    </div>
  );
};

export default ArticleForm;
