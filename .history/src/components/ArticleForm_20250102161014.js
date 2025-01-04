import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArticleForm.css';

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    bannerImage: null,
    hashtags: '',
    title: '',
    description: '',
    body: '',
    authorName: '',
  });

  const navigate = useNavigate(); // React Router's navigation hook
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'bannerImage') {
      setFormData({ ...formData, bannerImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.bannerImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const articleData = { ...formData, bannerImage: reader.result };
        const articleId = Date.now(); // Unique ID for the article
        navigate(`/articles/${articleId}`, { state: articleData });
      };
      reader.readAsDataURL(formData.bannerImage);
    } else {
      const articleId = Date.now();
      navigate(`/articles/${articleId}`, { state: formData });
    }
  };

  return (
    <div className="article-form-container">
      <form className="article-form" onSubmit={handleSubmit}>
        {/* Form fields */}
        <h2>Create a New Article</h2>
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={(e) => handleChange(e)}
            required
          >
            <option value="" disabled>Select a category</option>
            {/* Categories */}
          </select>
        </label>
        <label>
          Banner Image:
          <input
            type="file"
            name="bannerImage"
            accept="image/*"
            onChange={handleChange}
            ref={fileInputRef}
            required
          />
        </label>
        {/* Other fields */}
        <button type="submit">Post Article</button>
      </form>
    </div>
  );
};

export default ArticleForm;
