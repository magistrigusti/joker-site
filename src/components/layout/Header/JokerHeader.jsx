import { Layout } from 'antd';
import style from './JokerHeader.module.css';
import JokerPlaceLogo from '../../../../public/JokerPlace-logo.png';

const headerStyle = {
  textAlign: 'center',
  color: '#FF971D',
  height: 80,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4A0BB2',
};

export default function JokerHeader() {
  return (
    <Layout.Header style={headerStyle}>
      <div className={style.header__wrapper}>
        <div className={style.logo__wrapper}>
          <img className={style.header__logo} src={JokerPlaceLogo} alt="" />
        </div>

        <h2 className={style.header__title}>Joker Poker Plase</h2>

        <div>
          login
        </div>
      </div>
    </Layout.Header>
  )
}