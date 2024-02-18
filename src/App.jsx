import './App.css';

import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import About from './component/ui/About';
import Recruit from './component/ui/Recruit';
import SloganArea from './component/ui/Slogan';
import Curriculum from './component/ui/Curriculum';
import Project from './component/ui/Project';
import { TEXT } from './constants/text';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SloganArea />
              <About />
              <Recruit
                recruitlist={TEXT.recruit}
                bannerType="RECRUIT"
                bannerTitle="모집일정"
                bannerContent="멋쟁이사자처럼 성공회대 12기 아기사자들의 모집 일정입니다."
              />
              <Recruit
                recruitlist={TEXT.schedule}
                bannerType="ROADMAP"
                bannerTitle="주요일정"
                bannerContent="멋쟁이사자처럼 성공회대 12기의 주요일정입니다."
              />
              <Curriculum />
              <Project />
            </>
          }
        />
        <Route
          path="/qna"
          element={<div style={{ height: '200vh' }}>qna page</div>}
        />
      </Routes>
    </>
  );
}

export default App;
