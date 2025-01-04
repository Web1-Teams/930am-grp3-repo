import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ArticlesPage from './ArticlesPage';
import JoinUsPage from './JoinUsPage';

const RafeeqCommunityPage = () => {
  return(
  <div>
    <h1>Rafeeq Community Page</h1>
    <nav>
      <ul>
        <li>
          <Link to="/community/articles">Articles</Link>
        </li>
        <li>
          <Link to="/community/joinus">Join Us</Link>
        </li>
      </ul>
    </nav>

    {/* Nested Routes */}
    <Switch>
      <Route path="/community/articles" component={ArticlesPage} />
      <Route path="/community/joinus" component={JoinUsPage} />
    </Switch>
  </div>
);
}

export default RafeeqCommunityPage;
