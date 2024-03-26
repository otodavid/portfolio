import React, { ReactNode } from 'react';

interface ExternalLinkProps {
  title: string;
  url: string;
  displayName: string | ReactNode;
  className?: string;
}

export default function ExternalLink({
  title,
  url,
  displayName,
  className,
}: ExternalLinkProps) {
  if (typeof displayName === 'string') {
    return (
      <a
        href={url}
        rel='noopener noreferrer'
        target='_blank'
        aria-label={title + ' (opens in a new tab)'}
        title={title}
        className={className}
      >
        {displayName}
      </a>
    );
  }

  return (
    <a
      href={url}
      rel='noopener noreferrer'
      target='_blank'
      aria-label={title + ' (opens in a new tab)'}
      title={title}
      className={className}
    >
      <span className='sr-only'>{title}</span>
      {displayName}
    </a>
  );
}
