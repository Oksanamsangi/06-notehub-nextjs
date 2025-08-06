import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={styles.wrap}>
          <p>Developer: Oksana Sydorenko</p>
          <p>
            Contact us:
            <Link href="<mailto:student@notehub.app>"></Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
