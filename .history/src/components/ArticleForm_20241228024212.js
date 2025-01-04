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

  const categories = [
    "Pet Care",
    "Health and Wellness",
    "Adoption and Rescue",
    "Animal Behavior",
    "Wildlife and Conservation",
    "Lifestyle and Stories",
  ];

  // Handle changes for inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'bannerImage') {
      // Handle file upload
      setFormData({ ...formData, bannerImage: files[0] }); // Store the file object
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.bannerImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedFormData = { ...formData, bannerImage: reader.result }; // Add base64 string
        if (onSubmit) {
          onSubmit(updatedFormData); // Pass the form data to the parent component
        }
      };
      reader.readAsDataURL(formData.bannerImage); // Convert file to base64
    } else if (onSubmit) {
      onSubmit(formData); // Call the parent function with form data
    }

    // Reset the form after submission
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
