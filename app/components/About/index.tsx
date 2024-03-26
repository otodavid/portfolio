import Image from 'next/image';
import styles from './index.module.css';
import Avatar from '@public/images/about-avatar.png';

export default function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.heading}>
        <span className={styles.small_text}>A little</span>About me
      </h2>

      <div>
        <div className={styles.avatar}>
          <Image
            src={Avatar}
            alt="David's full avatar"
            fill={true}
          />
        </div>

        <div className={styles.content}>
          <p>
            My journey in computer science began with an unwavering curiosity
            about technology and a fascination with the world of programming.
            This curiosity recently led me to complete my Master&apos;s degree
            at the University of Manitoba, further solidifying my passion for
            the field.{' '}
          </p>
          <p>
            My interests encompass various aspects of development, including
            frontend and backend development, mobile development, and
            blockchain. However, my main focus and passion lies in frontend
            development. I find immense satisfaction in creating user interfaces
            (UI) that are not only visually appealing and interactive but also
            accessibile, ensuring everyone has a seamless experience.
          </p>
          <p>
            While the world of code is fun (and annoying sometimes) I also enjoy
            maintaining a healthy balance. When I&apos;m not at the computer,
            you&apos;ll likely find me at a volleyball court, competing in a
            &apos;friendly&apos; game of FIFA, or battling it out in Warzone.
          </p>
        </div>
      </div>
    </div>
  );
}
