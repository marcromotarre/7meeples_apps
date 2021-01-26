/** @jsx jsx */
import { jsx } from 'theme-ui';
import logoRed from '../assets/svg/logo-red.svg';
import siguenosEnInstagram from '../assets/svg/siguenos-en-instagram.svg';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav
      sx={{
        gridArea: 'nav',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%',
        width: '90%',
        margin: '0% 5%',
      }}
    >
      <Link href="/">
        <img
          sx={{
            height: '60%',
          }}
          src={logoRed}
          alt="logo"
        />
      </Link>
      <Link href="https://www.instagram.com/7meeples.es/">
        <img
          sx={{
            height: '60%',
          }}
          src={siguenosEnInstagram}
          alt="siguenos en instagram"
        />
      </Link>
    </nav>
  );
};

export default Nav;
