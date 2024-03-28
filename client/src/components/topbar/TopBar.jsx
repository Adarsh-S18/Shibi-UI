import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='containersz'>
      <div className='logo'>
        <Link to='/'>
          <img src='/mainlogo.jpg' alt="Logo" className="logoImg" />
        </Link>
        {/* N'Able by Shibi Anand */}
      </div>
      <div className='links'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/about-us' className='link'>About</Link>
        <Link to='/services' className='link'>Services</Link>
        <Link to='/workshops' className='link'>Workshops</Link>
        <Link to='/testimonials' className='link'>Testimonials</Link>
        <Link to='/contact-form' className='link'>Contact</Link>
      </div>
    </div>
  );
}
