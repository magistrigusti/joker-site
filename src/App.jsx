import { Layout } from 'antd';
import JokerHeader from './components/layout/Header/JokerHeader';
import JokerFooter from './components/layout/Footer/JokerFooter';
import MainImg from '../public/main-img.png';


const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 160px)',
  color: '#AFB663',
  backgroundColor: '#410151',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '90px',
  fontSize: 24,
  color: '#F6EC00',
  backgroundColor: '#39128C',
};



export default function App() {
  return (

    <Layout >
      <JokerHeader />

      <Layout>
        <Layout.Sider width="15%" style={siderStyle}>
          Menu
          <br />
          Joker Platform
          <br />
          Staking
          <br />
          NFT Colections
          <br />
          Road Map
          <br />
          Tokenomiks

        </Layout.Sider>
        <Layout.Content style={contentStyle}>

          <div className="title__img-wrapper">
            <h1>Welcome to the Website Joker Jeton</h1>

            <img style={{height: 200}} src={MainImg} alt />
          </div>
          <p>Joker is an Trade exchangeable token, the connecting link of all products
            ecosystems L2 token solution blockchain to the open network.
            It is a native token of a poker platform and at the same time a poker chip.
            The Joker token allows you to play poker on the Poker Place Joker poker platform
          </p>

        </Layout.Content>
      </Layout>

      <JokerFooter />
    </Layout>

  )
}

