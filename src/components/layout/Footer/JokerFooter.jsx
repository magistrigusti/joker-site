import { Layout } from 'antd';
import style from './JokerFooter.module.css';
import LogoFagundes from '../../../img/fugundes.png';
import LogoMagistruGusti from '../../../img/magistrigusti.png';
import LogoJokerPlace from '../../../img/JokerPlace-logo.png';

const footerStyle = { 

  height: 90,
  color: '#FF971D',
  backgroundColor: '#4A0BB2',

};

export default function JokerFooter() {
  return (
    <Layout.Footer style={footerStyle}>
      {/* <h6 className={style.title_footer}>Our partners</h6> */}

      <div className={style.footer_wrapper}>
        <img className={style.footer_img} src={LogoMagistruGusti} alt="" />

        <img className={style.footer_img} src={LogoFagundes} alt="" />

        <img className={style.footer_img} src={LogoJokerPlace} alt="" />
      </div>
    </Layout.Footer>
  )
}