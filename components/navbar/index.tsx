'use client';

import { useState } from 'react';
import MobileNav from '@components/navbar/mobile-nav';
import { FaBarsStaggered } from 'react-icons/fa6';
import styles from './index.module.css';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };
  return (
    <nav className={styles.nav}>
      <h1>Dave.dev</h1>

      <MobileNav open={openMenu} handleNav={handleMenu} />

      <button type='button' onClick={handleMenu} className={styles.menuBtn}>
        <FaBarsStaggered />
      </button>
    </nav>
  );
}
