import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={styles.wrap}>
          <p>Developer: Oksana Sydorenko</p>
          <p>
            Contact us:{' '}
            <a href="mailto:student@notehub.app" className={styles.link}>
              student@notehub.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
