import './Tokenomika.css';
import ImgTokenomik from '../../img/imageTokens.png';

const Tokenomika = () => {
  return (
    <div className="tokenomiks">
      <h1 className="tokenomik__title">Tokenomika</h1>

      <div className="intro-wrapper">
        <img style={{height: 500}} src={ImgTokenomik} alt />

        <div className="text-wrapper">
          <p className="tokenomik-list" style={{color: "#00EC42"}}>Joker ecosystem bank 30%</p>
          <p className="tokenomik-list" style={{color: "#00EC42"}} >Joker Poker Place balance 20%</p>
          <p className="tokenomik-list" style={{color: "#00EC42"}} >Ensuring liquidity of the joker token 10%</p>
          <p className="tokenomik-list" style={{color: "#00EC42"}}>Liquidity of the decentralized  joker exchange 10%</p>
          <p className="tokenomik-list" style={{color: "#00EC42"}}>Joker poker platform development fund 10%</p>
          <p className="tokenomik-list" style={{color: "#00EC42"}}>NFT marketplace Joker 10%</p>
          <p className="tokenomik-list" style={{color: "#00EC42"}}>Joker ecosystem development foundation 5%</p>
          <p className="tokenomik-list" style={{color: "#00EC42"}}>Poker tournament fund 5%</p>
        </div>
      </div>
    </div>
  )
}

export default Tokenomika;