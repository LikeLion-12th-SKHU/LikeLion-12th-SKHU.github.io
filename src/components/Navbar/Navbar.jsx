import './Navbar.css';
import logoimg from '/public/log.svg';
// import { Route, Routes, BrowserRouter } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src={logoimg} alt="Logo" />
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/qna">
          <button>QnA</button>
        </Link>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('recruit')}>Recruit</button>
        <button onClick={() => scrollTo('project')}>Project</button>
      </div>
    </div>
  );
};

export default Navbar;
