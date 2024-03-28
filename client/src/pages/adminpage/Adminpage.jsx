// Admin.js

import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/admin-sidebar/Adminsidebar';
import Posts from '../../components/posts/Posts';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import './adminpage.css'
// import Write from '../write/Write';
const Adminpage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div>
      <AdminSidebar />
      <div className='posts-section'>
      <Posts posts={posts} />
      {/* <Write /> */}
      </div>
    </div>
  )
}

export default Adminpage
