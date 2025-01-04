import './ArticleCard.css';

const ArticleCard = ({
  category,
  bannerImage,
  hashtags,
  title,
  description,
  authorName,
}) => {
  const defaultProfilePic = 'images/user-avatar.png'; 

  const categoryColors = {
    adoption: '#FFD700',
    rescue: '#32CD32',
    training: '#FF4500',
    health: '#1E90FF',
    general: '#9370DB',
    other: '#FFA500',
  };

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-banner">
          <p
            className="category-tag"
            style={{ backgroundColor: categoryColors[category.toLowerCase()] || '#ccc' }}
          >
            {category}
          </p>
          <img
            className="banner-img"
            src={bannerImage}
            alt={`${title} banner`}
          />
        </div>
        <div className="card-body">
          <p className="blog-hashtag">{hashtags}</p>
          <h2 className="blog-title">{title}</h2>
          <p className="blog-description">{description}</p>
          <div className="card-profile">
            <img
              className="profile-img"
              src={defaultProfilePic}
              alt="Default profile"
            />
            <div className="card-profile-info">
              <h3 className="profile-name">{authorName}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
