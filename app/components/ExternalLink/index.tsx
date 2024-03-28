import { ReactNode } from 'react';

interface ExternalLinkProps {
  title: string;
  url: string;
  className?: string;
  children: ReactNode;
}

export default function ExternalLink({
  title,
  url,
  className,
  children,
}: ExternalLinkProps) {
  return (
    <a
      href={url}
      rel='noopener noreferrer'
      target='_blank'
      aria-label={title + ' (opens in a new tab)'}
      title={title}
      className={className}
    >
      {typeof children !== 'string' && <span className='sr-only'>{title}</span>}
      {children}
    </a>
  );
}
