import ExternalLink from '@components/ExternalLink';
import styles from './index.module.css';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Connect with Me</h2>
        <p>
          Do you have a project in mind? Let&apos;s discuss how my skills and
          experience can contribute to your vision. I&apos;m also open to
          hearing about new opportunities!
        </p>
      </div>

      <div className={styles.socials}>
        <ExternalLink
          title='LinkedIn'
          url='https://www.linkedin.com/in/otodavid'
        >
          <FaLinkedinIn size={24} />
        </ExternalLink>
        <ExternalLink title='email' url='mailto:mydevzone0@gmail.com'>
          <IoMdMail size={24} />
        </ExternalLink>
        <ExternalLink title='Github' url='https://www.github.com/otodavid'>
          <FaGithub size={24} />
        </ExternalLink>
        <ExternalLink title='X (twitter)' url='https://twitter.com/_davidojo_'>
          <FaXTwitter size={24} />
        </ExternalLink>
      </div>
    </div>
  );
}
