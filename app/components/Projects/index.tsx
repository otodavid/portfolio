import styles from './index.module.css';
import projects from '@data/projects.json';
import ProjectItem from './ProjectItem';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>My Projects</h2>

      <div className={styles.project_list}>
        {projects.map((data, id) => (
          <ProjectItem
            key={data.name}
            name={data.name}
            description={data.description}
            imagePath={data.imagePath}
            githubUrl={data.githubUrl}
            demoUrl={data.demoUrl}
            tech={data.tech}
          />
        ))}
      </div>
    </div>
  );
}
