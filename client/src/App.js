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
import AboutPage from "./pages/aboutus/AboutPage";
import WorkShop from "./pages/workshops/WorkShop";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/contact-form"> <Contact /> </Route>
        <Route path='/workshops'><WorkShop /></Route>
        <Route path="/about-us"> <AboutPage /> </Route>
        <Route path="/testimonials"> <TestimonialPage /> </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path='/all-posts'><Adminpage/></Route>
        <Route path='/add-category'>{user ? <AddCategory /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
