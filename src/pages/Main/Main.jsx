import "./Main.css";
import MainImg from '../../img/main-img.png';

const Main = () => {
  return (
    <div className="main">
      <div className="title_wrapper">
        <img style={{ height: 200 }} src={MainImg} alt />
        <h1 className="main__title">Welcome to the Website Joker Jeton</h1>
      </div>

      <div className="text_wrapper" >
        <p className="main__text">Joker is an Trade exchangeable token, the connecting link of all products
          ecosystems L2 token solution blockchain to the open network.
          It is a native token of a poker platform and at the same time a poker chip.
          The Joker token allows you to play poker on the Poker Place Joker poker platform
        </p>
      </div>
    </div>

  )
}

export default Main;