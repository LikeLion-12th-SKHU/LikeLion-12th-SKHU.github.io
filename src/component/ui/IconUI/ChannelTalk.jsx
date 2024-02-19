import ChannelTalkImg from '/recruit_page_fe/채널톡.svg';
import './ChannelTalk.css';

const ChannelTalk = () => {
  return (
    <div className="channelTalk">
      <span>채팅상담</span>
      <img
        src={ChannelTalkImg}
        onClick={() => window.open('https://pf.kakao.com/_lxmDSG')}
      />
    </div>
  );
};

export default ChannelTalk;
