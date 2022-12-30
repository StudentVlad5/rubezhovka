import  heart from '../../img/heart.png';
import css from './Footer.module.css';

export const Footer = () => {
    return(
<footer className={css.footer}>
  <div className="container footer__box">
    <div className={css.footer__inner}>
      <p className="footer__text footer__text--begin">© 2022 </p>
      <p className="footer__text footer__text--begin">All Rights Reserved</p>
      <p className="footer__text footer__text--end">Developed with  by
        <img src={heart} alt={heart}/>
        <span className="footer__link">VP</span>
      </p>
      <p className="footer__info">Not for commercial use</p>
    </div>
</div>
</footer>
    )
}