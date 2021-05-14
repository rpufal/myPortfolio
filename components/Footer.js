import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={ styles.FooterDisplay }>
    <div className={ styles.NewProjectCard }>
      <h2 className={ styles.HeaderTitle }>Start a project</h2>
      <p>Interested in working together? Hit me up, I'll buy coffee.</p>
      <button type="button">Let's que bora</button>
    </div>
    <h2 className={ styles.HeaderTitle }>Trying to be my best version everyday</h2>
    <div className={ styles.ButtonsDisplay }>
      <img src="/SocialLogos/github.svg" alt="github" width="33%" />
      <img src="/SocialLogos/linkedin.svg" alt="linkedin" width="33%" />
      <img src="/SocialLogos/twitter.svg" alt="twitter" width="33%" />
    </div>
    <p>Made with love by me © Pandemic Year 2</p>
  </footer>
);

export default Footer;
