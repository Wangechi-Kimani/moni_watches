import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Navigation from './Navigation';
import TopNav from './TopNav';
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      {/* <MainNavigation /> */}
      <TopNav />
      <Navigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
