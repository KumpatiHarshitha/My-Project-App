import React from 'react';
import './PageNotFoundStyles.css'; // Adjust the path as necessary
import 'react-toastify/dist/ReactToastify.css';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img src="/images/404.png" alt="Page Not Found" />
    </div>
  );
}

export default PageNotFound;
