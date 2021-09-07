import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function MainNavigation() {
  const [isChecked, setIsChecked] = useState(false);

  const openSideMenuNavBar = () => {
    setIsChecked(!isChecked);
  };

  const closeSideMenuNav = () => {
    setIsChecked(false);
  }

  return (
    <header className={classes.header}>
      <nav>
        <input
          type="checkbox"
          id="check"
          onChange={(e) => setIsChecked(e.target.value)}
          checked={isChecked}
        />
        {!isChecked && (
          <span className={classes.checkBtn}>
            <FontAwesomeIcon icon={faBars} onClick={openSideMenuNavBar} />
          </span>
        )}

        {isChecked && (
          <span className={classes.closeBtn}>
            <FontAwesomeIcon icon={faTimes} onClick={closeSideMenuNav}/>
          </span>
        )}

        <span className={classes.img}>
          <Link href='/'>
          <Image
            src="/images/smart-watch.jpg"
            alt="Smart Watch"
            width={166}
            height={70}
          />
          </Link>
        </span>
        <ul className={isChecked ? classes.checked : ""}>
          <li>
            <Link href="/">smart watches</Link>
          </li>
          <li>
            <Link href="/new-product">analog watches</Link>
          </li>
          <li>
            <Link href="/new-product">gift box</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
