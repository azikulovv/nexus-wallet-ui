import styles from './page.module.scss';
import CopyIcon from '@/assets/icons/fields/copy.svg';

export default function Network() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['field']}>
        <p className={styles['field__label']}>Your Tether Address</p>

        <textarea type='text' className={[styles['field__textarea'], styles['address']].join(' ')}>
          TKJeT3SJfFSAaDsWSiHCbudbLErBG1Yg1H
        </textarea>

        <button className={styles['field__button-copy']}>
          <CopyIcon />
        </button>
      </div>

      <div className={styles['field']}>
        <p className={styles['field__label']}>seed phrase</p>

        <textarea type='text' className={styles['field__textarea']}>
          Pigeon; attract; sentence; pigeon; announce; pigeon; size; attract; sentence; pigeon;
          announce; Pigeon;
        </textarea>

        <button className={styles['field__button-copy']}>
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}
