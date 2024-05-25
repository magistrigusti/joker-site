import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import JokerHeader from './components/layout/Header/JokerHeader';
import JokerFooter from './components/layout/Footer/JokerFooter';
import JokerMain from './pages/Main/JokerMain';
import JokerPlatform from './pages/JokerPlatform/JokerPlatform';
import JokerStaking from './pages/staking/pageStaking';
import JokerNFT from './pages/Nft/pageNft';
import JokerRoadMap from './pages/RoadMap/RoadMap';
import JokerTokenomiks from './pages/Tokenomika/Tokenomika';




const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 160px)',
  color: '#FF971D',
  backgroundColor: '#410151',
  padding: "0 50px",
  
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '90px',
  fontSize: "40px",
  color: '#F6EC00',
  backgroundColor: '#39128C',
  padding: "10px 10px",
};

const menuStyle = {
  textAlign: 'center',
  lineHeight: '90px',
  fontSize: "20px",
  color: '#F6EC00',
  padding: "10px",
  backgroundColor: '#39128C',
};

const menu = {
  marginTop: "40px",
  backgroundColor: '#39128C',
};

const menuItem = {
  fontFamily: "Rye",
  color: "#F6EC00",
  

};



export default function App() {

  return (
    <Router>
      <Layout >
        <JokerHeader />

        <Layout>
          <Layout.Sider width="15%" style={siderStyle}>
            <Menu style={menuStyle} mode='vertical' defaultSelectedKeys={['1']}>

              <Menu.Item style={menu}  key="1">
                <Link style={menuItem} to='/main'>Main</Link>
              </Menu.Item>
              <Menu.Item style={menu} key="2">
                <Link style={menuItem} to='/about'>Joker Platform</Link>
              </Menu.Item>
              <Menu.Item style={menu} key="3">
                <Link style={menuItem} to="/staking">Staking</Link>
              </Menu.Item>
              <Menu.Item style={menu} key="4">
                <Link style={menuItem} to="/nft">Joker NFT</Link>
              </Menu.Item>
              <Menu.Item style={menu} key="5">
                <Link style={menuItem} to="/roadmap">Road Map</Link>
              </Menu.Item>
              <Menu.Item style={menu} key="6">
                <Link style={menuItem} to="/tokenomik">Tokenomiks</Link>
              </Menu.Item>
              
            </Menu>
          </Layout.Sider>

          <Layout.Content style={contentStyle}>
            <Routes>
              <Route exact path="/main" element={<JokerMain />} />
              <Route exact path="/about" element={<JokerPlatform />} />
              <Route exact path="/staking" element={<JokerStaking />} />
              <Route exact path="/nft" element={<JokerNFT />} />
              <Route exact path="/roadmap" element={<JokerRoadMap />} />
              <Route exact path="/tokenomik" element={<JokerTokenomiks />} />
            </Routes>
          </Layout.Content>
        </Layout>

        <JokerFooter />
      </Layout>
    </Router>
  )
}

