'use-client';

import Link from 'next/link';
import styles from './mobile-menu.module.css';
import { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';
import useFocusTrap from 'app/hooks/useFocusTrap';
import { dialogProps } from 'app/types/types';

const NAVLINKS = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact', link: '/contact' },
];

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
          {NAVLINKS.map(({ name, link }) => (
            <li key={name}>
              <Link href={link} className={styles.navLink}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </dialog>
    </div>
  );
}
