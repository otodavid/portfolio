'use-client';

import Link from 'next/link';
import styles from './mobile-menu.module.css';
import { useEffect, useRef } from 'react';
import { FaXmark } from 'react-icons/fa6';

export default function MobileNav({
  open,
  handleNav,
}: {
  open: boolean;
  handleNav: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  });

  return (
    <div className={styles.wrapper}>
      <dialog className={styles.sideNav} ref={ref}>
        <button onClick={handleNav} className={styles.close}>
          <FaXmark size={'1rem'} />
        </button>
        <ul className={styles.mobileMenu}>
          <li>
            <Link href='/' className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href='/projects' className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/contact' className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
