import { Fragment } from "react";

import Image from "next/image";

import Button from "../components/ui/Button";
import classes from "../styles/Home.module.css";

export default function Home(props) {
 
  return (
    <Fragment>
      <section className={classes.jumbotron}>
        <div className={classes.content}>
          <h1>Welcome to Moni Watches Inc.</h1>
          <p>
            The place for quality, luxury, and trendy watches to help you manage
            your time
          </p>
          <div className={classes.actions}>
            <div style={{ padding: "10px" }}>
              {/* <button>Smart Watches</button> */}
              <Button>Smart Watches</Button>
            </div>
            <div style={{ padding: "10px" }}>
              {/* <button>Digital Watches</button> */}
              <Button>Digital Watches</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.partners}>
        <div>
          <h1 style={{ fontFamily: "Dancing Script" }}>apple</h1>
        </div>
        <div>
          <h1 style={{ fontFamily: "Kirang Haerang" }}>megir</h1>
        </div>
        <div>
          <h1 style={{ fontFamily: "Kirang Haerang" }}>lige</h1>
        </div>
        <div>
          <h1 style={{ fontFamily: "Lobster" }}>rolex</h1>
        </div>
      </section>

      <section className={classes.inStockSection}>
        <div className={classes.content}>
          <h1>
            Looking for quality watches. Something fashionable yet luxurious?
            Look no further
          </h1>
          <p>
            Boosted USA acquired all of the remaining inventory directly from
            Boosted. This means we have the electric skateboards and scooter you
            all love and have been looking for. Get your hands on these highly
            sought after products while supplies last.
          </p>
          <hr />
        </div>

        <div className={classes.inStockImg}>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/smart_watch/daniel-korpai-oOlPR-Fwd7A-unsplash.jpg"
              width={500}
              height={500}
            />
            <div className={classes.text}>
              <h3>Smart Watches</h3>
              <p>In stock</p>
            </div>
          </div>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/analog_watch/bence-balla-schottner-9JORz4CuUcI-unsplash.jpg"
              alt="analog watch"
              width={500}
              height={500}
            />
            <div className={classes.text}>
              <h3>Digital Watches</h3>
              <p>In stock</p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.jumbotron_two_high_performance}>
        <h5>High Performance</h5>
        <h1>Standard Smart Watches</h1>
       
          <p style={{paddingTop: '-50px'}}>
            Cruising campus, going to work or getting through that long list of
            errands has never been easier or more fun.
          </p>
     
        <div className={classes.actions}>
          {/* <button>Shop Now</button> */}
          <Button>Shop Now</Button>
        </div>
      </section>

      <section className={classes.boostedSmartWatchSection}>
        <div className={classes.boostedSmartWatch}>
          <div>
            <Image
              src="/images/watches/smart_watch/ankush-minda-Gz0B_k5vQgQ-unsplash.jpg"
              alt="smart watch"
              width={500}
              height={400}
            />
          </div>
          <div>
            <Image
              src="/images/watches/smart_watch/alvan-nee-vhvH46ASxH0-unsplash.jpg"
              alt="smart watch"
              width={500}
              height={400}
            />
          </div>
          <div className={classes.content}>
            <h3>Smart Watch</h3>
            <p>Be on time. Be tech savvy. Save on time. Be stylish. Be trendy. </p>
            <div className={classes.actions}>
              {/* <button>Shop Now</button> */}
              <Button>Shop Now</Button>
          </div>
          </div>
        </div>
      </section>

      <section className={classes.inStockSection}>
      <div className={classes.inStockImg}>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/smart_watch/daniel-korpai-oOlPR-Fwd7A-unsplash.jpg"
              width={500}
              height={500}
            />
            <div className={classes.text}>
              <h3>Smart Watches</h3>
              <p>In stock</p>
            </div>
          </div>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/analog_watch/bence-balla-schottner-9JORz4CuUcI-unsplash.jpg"
              alt="analog watch"
              width={500}
              height={500}
            />
            <div className={classes.text}>
              <h3>Digital Watches</h3>
              <p>In stock</p>
            </div>
          </div>
          <div className={classes.inStockImgContent}>
            <Image
              src="/images/watches/smart_watch/rachit-tank-2cFZ_FB08UM-unsplash.jpg"
              alt="analog watch"
              width={500}
              height={500}
            />
            <div className={classes.text}>
              <h3>Digital Watches</h3>
              <p>In stock</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}


