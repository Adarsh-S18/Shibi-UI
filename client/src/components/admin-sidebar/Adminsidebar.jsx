// Sidebar.js

import React from 'react';
import './admin-sidebar.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const AdminSidebar = () => {
  return (
    <div className="sidebarr">
      <div className='side-cont'>
      <div className="sidebarr-field"><Link className='sidebarlinks' to='/all-posts'>Posts</Link></div>
      <div className="sidebarr-field"><Link className='sidebarlinks' to='/add-category'>Categories</Link></div>
      <div className="sidebarr-field"><Link className='sidebarlinks' to='/write'> Add Post</Link></div>
      </div>
    </div>
  );
};

export default AdminSidebar;
