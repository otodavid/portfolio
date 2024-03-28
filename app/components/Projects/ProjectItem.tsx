import React, { ReactNode } from 'react';
import styles from './projectItem.module.css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa6';
import ExternalLink from '@components/ExternalLink';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { iconsList } from 'app/utils/icons';

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
    <div className={styles.project_item}>
      <div className={styles.project_image}>
        <ExternalLink url={demoUrl} title={name + ' demo'}>
          <Image src={imagePath} alt={name} fill={true} />
        </ExternalLink>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{name}</h3>

          <div>
            <ExternalLink url={githubUrl} title={name + ' Github'}>
              <FaGithub />
            </ExternalLink>
            <ExternalLink url={demoUrl} title={name + ' demo'}>
              <FaExternalLinkAlt />
            </ExternalLink>
          </div>
        </div>

        <div className={styles.tech}>
          {tech?.map((techName) => (
            <p key={techName} data-name={techName} className={styles.tech_item}>
              <span>{iconsList.get(techName)}</span>
              {techName}
            </p>
          ))}
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
