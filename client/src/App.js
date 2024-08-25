import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import AppManagement from "./pages/AppManagement";
import Footer from "./components/footer/Footer";
import AboutSectionPage from "./pages/AboutManagement";
import ServiceMangement from "./pages/ServicesManagement";
import WorkshopManagement from "./pages/WorkshopManagement";
import FeedbackManagement from "./pages/FeedbackManagement";
import "./App.css";
import VlogsMangement from "./pages/VlogsManagement";
import TestimonialsManagement from "./pages/TestimonialManagement";

function App() {
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
          <WorkshopManagement />
        </Route>
        <Route path="/feedbacks">
          <FeedbackManagement />
        </Route>
        <Route path="/vlogs">
          <VlogsMangement />
        </Route>
        <Route path="/services">
          <ServiceMangement />
        </Route>
        <Route path="/testimonials">
          <TestimonialsManagement />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
