import { Layout } from 'antd';
import JokerHeader from './components/layout/Header/JokerHeader';
import JokerFooter from './components/layout/Footer/JokerFooter';
import Main from './pages/Main/Main';




const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 160px)',
  color: '#FF971D',
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

          <Main />

        </Layout.Content>
      </Layout>

      <JokerFooter />
    </Layout>

  )
}

