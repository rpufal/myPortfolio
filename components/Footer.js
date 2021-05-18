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
      <a href="https://github.com/rpufal"><img src="/SocialLogos/github.png" alt="github" width="60%" /></a>
      <a href="https://www.linkedin.com/in/rpufal/"><img src="/SocialLogos/linkedin.png" alt="linkedin" width="60%" /></a>
      <a href="https://twitter.com/rpufal1"><img src="/SocialLogos/twitter.png" alt="twitter" width="60%" /></a>
    </div>
    <p>Made with love by me © Pandemic Year 2</p>
  </footer>
);

export default Footer;
