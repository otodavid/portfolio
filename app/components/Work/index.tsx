import React from 'react';
import styles from './index.module.css';
import projects from '@data/projects.json';
import Image from 'next/image';

export default function Work() {
  return (
    <div>
      <h2>Projects</h2>

      <div>
        {projects.map((data) => (
          <div key={data.id}>
            <div className={styles.content}>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
            <div className={styles.image}>
              <Image
                src={data.image}
                alt={data.name}
                height={100}
                width={100}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
