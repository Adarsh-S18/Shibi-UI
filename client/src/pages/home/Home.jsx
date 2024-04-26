import { useEffect, useState } from "react";
// import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import CategoryList from "../../components/category-list/CategoryList";
import MenuPosts from "../../components/menu-posts/MenuPosts";
import Footer from "../../components/footer/Footer";
// import AboutSection from "../../components/aboutSection/AboutSection";
// import Testimonials from "../../components/Testimonials/Testimonials";
// import ServiceBrief from "../../components/moreaboutSection/ServiceBrief";

export default function Home() {
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
    <>
      <div style={{ marginBottom: "20px" }}>
        {/* <Header /> */}
      </div>
      {/* <AboutSection /> */}
      <div className="title">
        <h1> What do we provide?</h1>
      </div>
      {/* <ServiceBrief /> */}
      <div>
        <div>{/* <CategoryList /> */}</div>
        {/* <Testimonials /> */}
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
