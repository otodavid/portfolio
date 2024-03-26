import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>
        Designed and developed by David. Built with
        <a
          href='https://nextjs.org/'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Next.js (opens in a new tab)'
        >
          Next.js
        </a>
        and
        <a
          href='https://github.com/css-modules/css-modules'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='CSS Modules (opens in a new tab)'
        >
          CSS modules.
        </a>
        Hosted on{' '}
        <a
          href='https://vercel.com/'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Vercel (opens in a new tab)'
        >
          Vercel.
        </a>
      </p>
    </footer>
  );
}
