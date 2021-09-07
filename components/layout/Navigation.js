import classes from "./Navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  faBars,
  faSign,
  faTimes,
  faSignOutAlt,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSession, signOut } from "next-auth/client";

function MainNavigation(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [session, loading] = useSession();

  const router = useRouter();

  const openSideMenuNavBar = () => {
    setIsChecked(!isChecked);
  };

  const closeSideMenuNav = () => {
    setIsChecked(false);
  };

  // if(session) return <p>Signed in as {session.user.email}</p>

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
            <FontAwesomeIcon icon={faTimes} onClick={closeSideMenuNav} />
          </span>
        )}

        <span className={classes.img}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo/logo7.png"
                alt="Smart Watch"
                width={30}
                height={33}
              />
            </a>
          </Link>
          <span className={classes.title}>Moni Inc.</span>
        </span>
        <ul className={isChecked ? classes.checked : ""}>
          <li
            className={router.pathname === "/" ? classes.active : ""}
            onClick={closeSideMenuNav}
          >
            <Link href="/">smart watches</Link>
          </li>
          <li
            className={
              router.pathname === "/analog-watches" ? classes.active : ""
            }
            onClick={closeSideMenuNav}
          >
            <Link href="/analog-watches">analog watches</Link>
          </li>
          <li
            className={router.pathname === "/gift-box" ? classes.active : ""}
            onClick={closeSideMenuNav}
          >
            <Link href="/gift-box">gift box</Link>
          </li>
          <li
            className={router.pathname === "/contact" ? classes.active : ""}
            onClick={closeSideMenuNav}
          >
            <Link href="/contact">contact us</Link>
          </li>

          <li
            className={router.pathname === "/new-product" ? classes.active : ""}
            onClick={closeSideMenuNav}
          >
            <Link href="/new-product">Add New Product</Link>
          </li>

          {!session && (
            <li
              className={classes.signInBtn}
              onClick={closeSideMenuNav}
              title="Login"
            >
              <Link href="/auth">
                <a>
                  <FontAwesomeIcon icon={faSign} />
                </a>
              </Link>
            </li>
          )}

          {session && (
            <li
              className={classes.signInBtn}
              onClick={closeSideMenuNav}
              title="My Cart"
            >
              <Link href="/cart">
                <a>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </a>
              </Link>
            </li>
          )}

          {session && (
            <li
              className={classes.signInBtn}
              onClick={closeSideMenuNav}
              title="Logout"
            >
              <FontAwesomeIcon
                icon={faSignOutAlt}
                onClick={() => signOut()}
                style={{ cursor: "pointer" }}
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
