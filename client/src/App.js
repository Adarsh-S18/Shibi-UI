import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppManagement from "./pages/AppManagement";
import Footer from "./components/footer/Footer";
import AboutSectionPage from "./pages/AboutManagement";
import ServiceMangement from "./pages/ServicesManagement";
import WorkshopManagement from "./pages/WorkshopManagement";
import FeedbackManagement from "./pages/FeedbackManagement";
import "./App.css";
import VlogsMangement from "./pages/VlogsManagement";
import TestimonialsManagement from "./pages/TestimonialManagement";
import ContactManagement from "./pages/ContactManagement";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Switch>
        <Route exact path="/">
          <AppManagement />
        </Route>
        <Route path="/about-us">
          <AboutSectionPage />
        </Route>
        <Route path="/contact-form">
          <ContactManagement />
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
