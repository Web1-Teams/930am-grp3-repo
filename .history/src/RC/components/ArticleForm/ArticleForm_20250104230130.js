import React, { useState, useRef } from 'react';
import './ArticleForm.css';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';

const ArticleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    bannerImage: null,
    hashtags: '',
    title: '',
    description: '',
    body: '',
    authorName: '',
  });

  const fileInputRef = useRef();

  const categories = [
    "Pet Care",
    "Health and Wellness",
    "Adoption and Rescue",
    "Animal Behavior",
    "Wildlife and Conservation",
    "Lifestyle and Stories",
  ];

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
        const updatedFormData = { ...formData, bannerImage: reader.result };
        if (onSubmit) onSubmit(updatedFormData);
        resetForm();
      };
      reader.readAsDataURL(formData.bannerImage);
    } else if (onSubmit) {
      onSubmit(formData);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      category: '',
      bannerImage: null,
      hashtags: '',
      title: '',
      description: '',
      body: '',
      authorName: '',
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="article-form-container55">
      <form className="article-form55" onSubmit={handleSubmit}>
        <h2>Create a New Article</h2>

        <CategoryDropdown
          categories={categories}
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />

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

        <label>
          Hashtags:
          <input
            type="text"
            name="hashtags"
            value={formData.hashtags}
            onChange={handleChange}
            placeholder="Enter hashtags (e.g., #pets)"
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
            rows="6"
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
