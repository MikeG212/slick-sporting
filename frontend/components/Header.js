import Router from 'next/router';
import NProgress from 'nprogress';

import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <div>
    <div className='bar'>
      <a href='/'>SlickSporting</a>
      <Nav />
    </div>
    <div className='sub-bar'>
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);
export default Header;
