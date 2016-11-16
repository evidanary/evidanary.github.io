import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';
  const reactRouterLink = 'https://github.com/reactjs/react-router';
  const ghPagesLink = 'https://pages.github.com/';
  const repoReadmeLink = 'https://github.com/rafrex/spa-github-pages#readme';

  return (
    <div>
      <p>
        I'm the creator of <a href="https://www.greppage.com" target="_blank">GrepPage</a>. My mission is to make software development easy and frictionless.
      </p>
      <p>
        Previously, I was data engineer at <a href="https://www.lookout.com">Lookout Mobile Security</a>. My experience is in big data, search and web development.
      </p>
      <p>
        I have a Masters from Carnegie Mellon University in Information Systems and Bachelors in Computer Science from UT Dallas. Check out my <a href="https://medium.com/@evidanary">medium blog</a>.
      </p>
      <div><Link to="/risk-profile">Investor Risk Profile</Link> - Answer a few questions to get a score of how risky your startup is for investors</div>
      <div><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
        Example two deep with query and hash
      </Link></div>
    </div>
  );
}

export default Home;
