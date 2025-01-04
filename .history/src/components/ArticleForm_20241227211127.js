import React, { useState } from 'react';
import '../styles/ArticleForm.css';

const ArticleForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    bannerImage: null, // Change to store a file object
    hashtags: '',
    title: '',
    description: '',
    body: '',
    authorName: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'bannerImage') {
      // Handle file upload
      setFormData({ ...formData, bannerImage: files[0] }); // Store the file object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the file to a readable format if necessary
    const formDataWithImage = { ...formData };
    if (formData.bannerImage) {
      const reader = new FileReader();
      reader.onload = () => {
        formDataWithImage.bannerImage = reader.result; // Base64 string for preview or saving
        onSubmit(formDataWithImage);
      };
      reader.readAsDataURL(formData.bannerImage);
    } else {
      onSubmit(formDataWithImage);
    }

    // Reset form data
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
          Banner Image:
          <input
            type="file"
            name="bannerImage"
            accept="image/*"
            onChange={handleChange}
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
