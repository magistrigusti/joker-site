import { Layout } from 'antd';
import style from './JokerFooter.module.css';
import LogoFagundes from '../../../../public/fugundes.png';
import LogoMagistruGusti from '../../../../public/magistrigusti.png';
import LogoJokerPlace from '../../../../public/JokerPlace-logo.png';

const footerStyle = {
  height: 80,
  textAlign: 'center',
  color: '#FF971D',
  backgroundColor: '#4A0BB2',
};

export default function JokerFooter() {
  return (
    <Layout.Footer style={footerStyle}>
      <h4>Our partners</h4>

      <div className={style.footer_wrapper}>
        <img className={style.footer_img} src={LogoMagistruGusti} alt="" />

        <img className={style.footer_img} src={LogoFagundes} alt="" />

        <img className={style.footer_img} src={LogoJokerPlace} alt="" />
      </div>
    </Layout.Footer>
  )
}