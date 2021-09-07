import { Fragment } from "react";
import Image from "next/image";

import classes from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <Fragment>
       <section className={classes.freeImages}>
        <Image src='/images/watches/footer_analog/clickiopath-nJaRLGPIQu4-unsplash.jpg' width={400} height={500} />
        <Image src='/images/watches/footer_analog/bruno-van-der-kraan-VRERJ5Mjp4c-unsplash.jpg' width={400} height={500} />
        <Image src='/images/watches/footer_analog/jenn-lopez-DhiZ2ZUQSS4-unsplash.jpg' width={400} height={500} />
      </section>
      <section className={classes.root}>
        <div className={classes.logo}>
          <Image src="/images/logo/logo7.png" width={34} height={37} />
          <h5 style={{ marginTop: "-10px" }}>Moni Inc</h5>
        </div>
        <div className={classes.bottomNav}>
          <ul>
            <li className={classes.listTitle}>Explore</li>
          </ul>
          <ul>
            <li>
              <Link href="/">Smart Watches</Link>
            </li>
            <li>
              <Link href="/">Digital Watches</Link>
            </li>
            <li>
              <Link href="/">Gift Box</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={classes.about}>
          <h4>About Moni Watches Inc.</h4>
          <p>
            Moni Watches Inc. was established and founded out of the love for
            wrist watches. The company deals with all types of wrist watches for
            both female and male. With Moni Watches Inc., you are guaranteed
            quality, luxury and fashion.
          </p>
        </div>
      </section>
      <section>
        <div className={classes.copyright}>Powered by Moni Inc.</div>
      </section>
    </Fragment>
  );
}

export default Footer;
