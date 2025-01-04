import React, { useState, useRef } from 'react';
import './ArticleForm.css';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown' // Import the new component

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
  };

  return (
    <div className="article-form-container">
      <form className="article-form" onSubmit={handleSubmit}>
        <h2>Create a New Article</h2>

        <CategoryDropdown
          categories={categories}
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />

        {/* Other input fields remain here */}

        <button type="submit">Post Article</button>
      </form>
    </div>
  );
};

export default ArticleForm;
