'use client';

import Navbar from '@components/Navbar';
import MobileNav from '@components/Navbar/mobile-nav';
import { useState } from 'react';
import { FaBarsStaggered, FaCloudSun } from 'react-icons/fa6';
import styles from './index.module.css';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenu = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  };

  return (
    <header className={styles.header}>
      <h1>david.ojo</h1>

      <MobileNav isDialogOpen={openMenu} handleDialog={handleMenu} />

      <div className={styles.controls}>
        <FaCloudSun size={'1.5rem'} />
        {/* <FaCloudMoon /> */}

        <button type='button' onClick={handleMenu} className={styles.menuBtn}>
          <FaBarsStaggered color='#fff' />
        </button>
      </div>
    </header>
  );
}
