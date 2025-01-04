import '../styles/ArticleCard.css';

const ArticleCard = () => {
    return(

        <div>
         <div className="wrapper">
          <div className="card">
           <div className="card-banner">
            <p className="category-tag popular">Popular</p>
            <img
              className="banner-img"
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Front-end development future banner"
            />
          </div>
          <div className="card-body">
            <p className="blog-hashtag">#webdevelopment #frontend</p>
            <h2 className="blog-title">What is the future of front end development?</h2>
            <p className="blog-description">My thoughts on the future of front end web development</p>
      
            <div className="card-profile">
              <img
                className="profile-img"
                src="https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Maya Eleanor Peña's profile picture"
              />
              <div className="card-profile-info">
                <h3 className="profile-name">Maya Eleanor Peña</h3>
                <p className="profile-followers">1.2k followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default ArticleCard;