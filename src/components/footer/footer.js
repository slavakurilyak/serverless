import React from "react";
import { Link } from "gatsby";

import styles from "./footer.module.scss";

const Footer = () => (
  <footer class={styles.homeFooter}>
    <h3 class={styles.whatis}>Yeah, but what is serverless?</h3>
    <div className={styles.findOutWrap}>
      <Link to="/about/" className={styles.findOut}>
        Find out →
      </Link>
    </div>
    <br />
    <img src="/img/footer-sep.svg" alt="" />
    <p>
      I'm a serverless noob. Got a correction? Something to add?{" "}
      <a href="https://github.com/CSS-Tricks/serverless">
        There is a GitHub Repo
      </a>{" "}
      where you can contribute or open an issue.
    </p>
    <p>
      Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> and hosted on{" "}
      <a href="https://www.netlify.com/">Netlify</a>.
    </p>
  </footer>
);

export default Footer;
