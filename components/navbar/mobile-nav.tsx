'use-client';

import Link from 'next/link';
import styles from './mobile-menu.module.css';
import { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';
import useFocusTrap from 'app/hooks/useFocusTrap';
import { dialogProps } from 'app/types/types';

export default function MobileNav({ isDialogOpen, handleDialog }: dialogProps) {
  const modal = useFocusTrap({ isDialogOpen, handleDialog });

  useEffect(() => {
    const dialog = modal.current?.firstElementChild as HTMLDialogElement;

    if (isDialogOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [modal, isDialogOpen]);

  return (
    <div className={styles.wrapper} ref={modal}>
      <dialog className={styles.sideNav}>
        <button onClick={handleDialog} className={styles.close}>
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
            <Link
              href='/contact'
              className={styles.navLink}
              // ref={lastElementRef}
            >
              Contact
            </Link>
          </li>
        </ul>
      </dialog>
    </div>
  );
}
