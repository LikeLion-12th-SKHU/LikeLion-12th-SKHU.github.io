import './Navbar.css';
import logoimg from '/public/log.svg';
import qnaimg from '/public/LIKELION_brandcombi_white 1.png';

// import { Route, Routes, BrowserRouter } from 'react-router';
import { Link, useMatch } from 'react-router-dom';
const Navbar = () => {
  const qnAMatch = useMatch('/qna');

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };
  const logoImg = qnAMatch ? qnaimg : logoimg;

  return (
    <div className={`navbar ${qnAMatch ? 'qna' : ''}`}>
      <div className="navbar__left">
        <Link to="/">
          <img src={logoImg} alt="Logo" width={200} />
        </Link>
      </div>
      <div className={`navbar__right`}>
        {!qnAMatch && (
          <>
            <Link to="/qna">
              <button>QnA</button>
            </Link>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('recruit')}>Recruit</button>
            <button onClick={() => scrollTo('project')}>Project</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
