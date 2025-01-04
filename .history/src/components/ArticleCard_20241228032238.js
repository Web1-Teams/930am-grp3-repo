import '../styles/ArticleCard.css';

const ArticleCard = ({
  category,
  bannerImage,
  hashtags,
  title,
  description,
  authorName,
  expanded,
}) => {
  const defaultProfilePic = 'https://via.placeholder.com/150/cccccc?text=Profile'; // Default profile image URL

  return (
    <div className={`wrapper ${expanded ? 'expanded' : ''}`}>
      <div className="card">
        <div className="card-banner">
          <p className={`category-tag ${category.toLowerCase()}`}>{category}</p>
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
