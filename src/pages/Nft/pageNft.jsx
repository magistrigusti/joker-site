import './pageNft.css';
import NFT1 from '../../img/nft-1.png';
import NFT5 from '../../img/nft-5.png';

const PageNft = () => {
  return (
    <div class="nft">
      <h1 className="nft__title">Wint NFT</h1>

      <div className="nft-wrapper">
        <img style={{height: 200, marginBottom: 100}} src={NFT1} alt />
        <p className="nft__text" style={{color: "#AFB663"}}>
          Take part in tournaments and win unique NFTs that increase your rackBack
          Participate in club rating competitions and receive unique NFTs that increase the prestige of your club.
          Bye and sell NFTs on our marketplace.
          Hold NFT and receive joker tokens as a reward.
        </p>
        <img style={{height: 200, marginTop: 100}} src={NFT5} alt />
      </div>
    </div>
  )
}

export default PageNft;