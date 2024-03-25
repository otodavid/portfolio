import Image from 'next/image';
import React from 'react';
import Avatar from '@public/images/avatar.png';
import styles from './index.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        <span className={styles.greeting}>Hey there!, I&apos;m</span>
        David Ojo
      </h1>

      <div className={styles.avatar}>
        <Image src={Avatar} alt='My Avatar Picture' />
      </div>
      <h3 className={styles.title}>Software Developer</h3>

      <p className={styles.content}>
        I transform ideas into a beautiful, functional and accessible
        experience.
      </p>
      <div className={styles.cta}>
        <Link href={'#projects'} className='primary-btn'>
          view projects
        </Link>
        <Link href={'#contact'} className={styles.contact}>
          contact me
        </Link>
      </div>
    </div>
  );
}
