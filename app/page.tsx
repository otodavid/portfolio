import Hero from '@components/Hero';
import styles from './page.module.css';
import About from '@components/About';
import Work from '@components/Work';
import Contact from '@components/Contact';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
