import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Adminpage from "./pages/adminpage/Adminpage";
import AddCategory from "./pages/addcategory/AddCategory";
import Contact from "./components/contact/Contact";
import TestimonialPage from "./pages/testimonials/TestimonialPage";
import WorkShop from "./pages/workshops/WorkShop";
import AppManagement from "./pages/AppManagement";
import Footer from "./components/footer/Footer";
import AboutSectionPage from "./pages/AboutManagement";
import ServiceMangement from "./pages/ServicesManagement";
import './App.css'

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <AppManagement />
        </Route>
        <Route path="/about-us">
          <AboutSectionPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contact-form">
          <Contact />
        </Route>
        <Route path="/workshops">
          <WorkShop />
        </Route>
        <Route path='/services'>
          <ServiceMangement/>
        </Route>
        <Route path="/testimonials">
          <TestimonialPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/all-posts">
          <Adminpage />
        </Route>
        <Route path="/add-category">
          <AddCategory />
        </Route>
        <Route path="/post/postId">
          <Single />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
