import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './header.module.scss';

const Header = () => {
  return (
    <header className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link href='/'>
            <a>
              <Image
                src='/images/logo.png'
                alt='logo'
                width={500}
                height={100}
              />
            </a>
          </Link>
        </div>
        <nav className={classes.nav}>
          <Link href='/events'>All Events</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
