import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  const repoLink = 'https://github.com/evidanary';

  return (
    <div className="container">
      <div className="row">
        <h1> <Link to="/">Yash Ranadive</Link></h1>
        <nav>
          {generateMapMenu()}
        </nav>
      </div>
      <div className="row">
        {children}
      </div>
      <div className="row">
        <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
          <a href="http://www.medium.com/@evidanary" className="extended-link">
            &copy;2017. <span className="link-style">Yash Ranadive</span>
          </a>
        </div>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
