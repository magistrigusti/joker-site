import './jokerPlatform.css';
import introImg from '../../img/jokerIntro-img.png';

const JokerPlatform = () => {
  return (
    <div className="platform">
      <div className="title-wrapper">
        
        <h1 className="platform__title">Play poker with a Joker</h1>
        <img className="platform__img" style={{height: 240}} src={introImg} alt=""/>
      </div>

      <div className="text-wrapper">
        <p className="main__text">
          Use the Joker token to  participate in a poker
          tournament and claim your winnings immediately.
          In the mobile application you can convert winning ito USDT or TON.
          Receive recback in jokertokens.
        </p>
      </div>
    </div>
  );
};


export default JokerPlatform;