import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <>
      <p className={styles.error_text}>
        <hr />
        There was an error, please try again...
      </p>
    </>
  );
}