import React from 'react';
import styles from './projectItem.module.css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import ExternalLink from '@components/ExternalLink';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectItemProps {
  name: string;
  description: string;
  imagePath: string;
  githubUrl: string;
  demoUrl: string;
  tech: string[];
}

export default function ProjectItem({
  name,
  description,
  imagePath,
  githubUrl,
  demoUrl,
  tech,
}: ProjectItemProps) {
  return (
    <div>
      <div className={styles.image}>
        <Image src={imagePath} alt={name} height={100} width={100} />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{name}</h3>

          <div>
            <ExternalLink
              url={githubUrl}
              title={name + ' Github'}
              displayName={<FaGithub />}
            />

            <ExternalLink
              url={demoUrl}
              title={name + ' demo'}
              displayName={<FaExternalLinkAlt />}
            />
          </div>
        </div>

        <div className={styles.tech}>
          {tech?.map((item) => (
            <span key={item} data-name={item} className={styles.tech_item}>
              {item}
            </span>
          ))}
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
