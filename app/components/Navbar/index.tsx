'use client';

import { useState } from 'react';
import MobileNav from '@components/Navbar/mobile-nav';
import {
  FaBarsStaggered,
  FaCloudMoon,
  FaCloudSun,
  FaRegSun,
  FaSun,
  FaSunPlantWilt,
} from 'react-icons/fa6';
import styles from './index.module.css';
import Link from 'next/link';

const NAVLINKS = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact', link: '/contact' },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.mobileMenu}>
        {NAVLINKS.map(({ name, link }) => (
          <li key={name}>
            <Link href={link} className={styles.navLink}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
