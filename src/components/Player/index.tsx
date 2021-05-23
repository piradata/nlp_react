import styles from  './styles.module.scss';

export function Player() {
  return(
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="playing now"/>
        <strong>playing now</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um Podcast para ouvir</strong>
      </div>

      <footer>
      </footer>
    </div>
  );
}