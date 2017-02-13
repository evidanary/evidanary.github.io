import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';
  const reactRouterLink = 'https://github.com/reactjs/react-router';
  const ghPagesLink = 'https://pages.github.com/';
  const repoReadmeLink = 'https://github.com/rafrex/spa-github-pages#readme';

  return (
    <div>
      <p></p>
      <h2>Contact</h2>
      <ul>
        <li><a href="https://twitter.com/evidanary">@evidanary</a> on Twitter</li>
        <li><a href="https://github.com/evidanary">@evidanary</a> on GitHub</li>
        <li><a href="https://medium.com/@evidanary">@evidanary</a> on Medium</li>
      </ul>
      <p>
        <h2>About</h2>
        I love making products. I'm the creator of <a href="https://www.greppage.com" target="_blank">GrepPage</a> - a step towards making software development frictionless.
      </p>
      <p>
        Previously, I was data engineer at <a href="https://www.lookout.com">Lookout Mobile Security</a>. My experience is in big data, search and web development.
      </p>
      <p>
        I have a Masters from Carnegie Mellon University in Information Systems and Bachelors in Computer Science from UT Dallas.
      </p>
      <p>
        Check out my <a href="https://medium.com/@evidanary">medium blog</a>.
      </p>

      <p>
        <h2>Products</h2>
        List of products I created/helped create:
        <ul>
          <li>
            <a href="https://www.greppage.com/">GrepPage</a> - a platform for software developers to search and share programming snippets
          </li>
          <li>
            Analytics Infrastructure at <a href="https://www.lookout.com">Lookout Mobile Security</a>
          </li>
          <li>
            <a href="https://apps.nlrb.gov/eservice/efileterm.aspx">E-filing</a> at <a href="https://www.nlrb.gov/">NLRB</a>
          </li>
          <li>
            <a href="https://www.nlrb.gov/search/all">Legal Document Search</a> at <a href="https://www.nlrb.gov/">NLRB</a>
          </li>
        </ul>
      </p>

      <p>
        <h2>Interesting Links</h2>
        <div><Link to="/risk-profile">Investor Risk Profile</Link> - Answer a few questions to get a score of how risky your startup is for investors</div>
      </p>

      <p>
        <h2>Talks</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=9l5JN1fKVO8&index=7&list=PLSAiKuajRe2lQKV3OzYs1ncQSD9_QysqT">Video</a> and <a href="http://www.slideshare.net/Hadoop_Summit/storm-as-an-etl-engine-to-hadoop">slides</a> of my talk at Hadoop Summit Europe
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=iRudDdHFW3A">Video</a> and <a href="http://www.slideshare.net/yashranadive/hadoop-atlookout-siftscience">slides</a> of my talk at <a href="https://siftscience.com/">Sift Science</a>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Home;
