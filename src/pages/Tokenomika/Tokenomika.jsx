import './Tokenomika.css';
import ImgTokenomik from '../../img/imageTokens.png';

const Tokenomika = () => {
  return (
    <div className="tokenomiks">
      <h1 className="tokenomik__title">Tokenomika</h1>

      <div className="intro-wrapper">
        <img style={{height: 500}} src={ImgTokenomik} alt />

        <div className="text-wrapper">
          <p className="tokenomik-list">Joker ecosystem bank 30%</p>
          <p className="tokenomik-list">Joker Poker Place balance 20%</p>
          <p className="tokenomik-list">Ensuring liquidity of the joker token 10%</p>
          <p className="tokenomik-list">liquidity of the decentralized  joker exchange 10%</p>
          <p className="tokenomik-list">Joker poker platform development fund 10%</p>
          <p className="tokenomik-list">NFT marketplace Joker 10%</p>
          <p className="tokenomik-list">joker ecosystem development foundation 5%</p>
          <p className="tokenomik-list">poker tournament fund 5%</p>
        </div>
      </div>
    </div>
  )
}

export default Tokenomika;