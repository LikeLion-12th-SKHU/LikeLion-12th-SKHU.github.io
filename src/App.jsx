import './App.css';

import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import About from './component/ui/About';
import Recruit from './component/ui/Recruit';
import SloganArea from './component/ui/Slogan';
import Curriculum from './component/ui/Curriculum';
import Project from './component/ui/Project';
import QnA from './component/ui/QnA';
import ChannelTalk from './component/ui/IconUI/ChannelTalk';
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
                bannerContent="멋쟁이사자처럼 성공회대 12기 아기사자들의 모집 일정입니다.
                전공자/비전공자 상관없이 나의 아이디어를 웹 서비스를 구현해보고 싶은 누구나 지원가능합니다. "
              />
              <Recruit
                recruitlist={TEXT.schedule}
                bannerType="ROADMAP"
                bannerTitle="주요일정"
                bannerContent="멋쟁이사자처럼 성공회대 12기의 주요일정입니다.멋쟁이사자처럼 성공회대 12기에서는 
                프론트엔드, 백엔드 파트로 나누어 진행됩니다."
              />
              <Curriculum />
              <Project />
            </>
          }
        />
        <Route
          path="/qna"
          element={
            <div
              style={{
                height: '100vh',
                background: '#FFFFFF',
                color: '#1C1B1A',
              }}
            >
              <QnA />
            </div>
          }
        />
      </Routes>
      <ChannelTalk />
    </>
  );
}

export default App;
