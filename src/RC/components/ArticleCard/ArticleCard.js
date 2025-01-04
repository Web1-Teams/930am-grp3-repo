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
    <div className="wrapper55">
      <div className="card55">
        <div className="card-banner55">
          <p
            className="category-tag55"
            style={{ backgroundColor: categoryColors[category.toLowerCase()] || '#ccc' }}
          >
            {category}
          </p>
          <img
            className="banner-img55"
            src={bannerImage}
            alt={`${title} banner`}
          />
        </div>
        <div className="card-body55">
          <p className="blog-hashtag55">{hashtags}</p>
          <h2 className="blog-title55">{title}</h2>
          <p className="blog-description55">{description}</p>
          <div className="card-profile55">
            <img
              className="profile-img55"
              src={defaultProfilePic}
              alt="Default profile"
            />
            <div className="card-profile-info55">
              <h3 className="profile-name55">{authorName}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
