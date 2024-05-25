import './pageStaking.css';
import ImgStakingLeft from '../../img/stakingLeft-img.png';
import ImgStakingRight from '../../img/stakingRight-img.png';

const Staking = () => {
  return (
    <div className="staking">
      <div className="text-wrapper">
        <h1 className="staking__title">If you have a joker make a profit</h1>

        <p className="staking__text">
          on the Joker Poker site you can make a deposit for your joker token and receive interest every 50 hours.
          Select the deposit contract that suits you.
          Easy replenishment and withdrawal of deposit.
        </p>
      </div>
      <div className="img-wrapper">
        <img className="staking__img" src={ImgStakingLeft} alt="" />

        <img className="staking__img" src={ImgStakingRight} alt=""/>
      </div>
    </div>
  )
}

export default Staking;