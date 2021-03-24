import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      {isUserLoggedIn}
      <FaGithub color="#04d361" />
      Felipe Austríaco
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      {isUserLoggedIn}
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  );
}
