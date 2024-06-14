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
  padding: "0 20px",
  
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '90px',
  fontSize: "40px",
  color: '#F6EC00',
  backgroundColor: '#39128C',
  padding: "35px 5px",
};

const menuStyle = {
  textAlign: 'center',
  lineHeight: '90px',
  fontSize: "20px",
  color: '#F6EC00',
  padding: "5px",
  backgroundColor: '#39128C',
};

const menu = {
  marginTop: "35px",
  backgroundColor: '#39128C',
};

const menuItem = {
  fontFamily: "Rye",
  color: "#F6EC00",
  

};

const iconsMenu = {
  marginLeft: 5,
  color: '#FF971D',
}



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
                <Link style={menuItem} to='/about'> Platform <DesktopOutlined style={iconsMenu} /> </Link>
              </Menu.Item>
              <Menu.Item style={menu} key="3">
                <Link style={menuItem} to="/staking"> Staking <ContainerOutlined style={iconsMenu} /> </Link>
              </Menu.Item>
              <Menu.Item style={menu} key="4">
                <Link style={menuItem} to="/nft"> Joker NFT <AppstoreOutlined style={iconsMenu} /> </Link>
              </Menu.Item>
              <Menu.Item style={menu} key="5">
                <Link style={menuItem} to="/roadmap"> Road Map <MenuUnfoldOutlined style={iconsMenu} /> </Link>
              </Menu.Item>
              <Menu.Item style={menu} key="6">
                <Link style={menuItem} to="/tokenomik"> Tokenomiks <PieChartOutlined style={iconsMenu} /></Link>
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

