import styles from './page.module.scss';
import SearchIcon from '@/assets/icons/fields/search.svg';
import SuccessIcon from '@/assets/icons/fields/success.svg';

export default function Language() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['search-field']}>
        <SearchIcon />
        <input type='text' placeholder='Введите название' />
      </div>

      <div className={styles['currencies']}>
        <div className={styles['currency']}>
          <span className={styles['currency__name']}>RUB</span>
        </div>

        <div className={styles['currency']}>
          <span className={styles['currency__name']}>KZT</span>
          <SuccessIcon className={styles['currency__icon']} />
        </div>

        <div className={styles['currency']}>
          <span className={styles['currency__name']}>USD</span>
        </div>

        <div className={styles['currency']}>
          <span className={styles['currency__name']}>USD</span>
        </div>

        <div className={styles['currency']}>
          <span className={styles['currency__name']}>USD</span>
        </div>

        <div className={styles['currency']}>
          <span className={styles['currency__name']}>USD</span>
        </div>

        <div className={styles['currency']}>
          <span className={styles['currency__name']}>USD</span>
        </div>

        <div className={styles['currency']}>
          <span className={styles['currency__name']}>USD</span>
        </div>

        <div className={styles['currency']}>
          <span className={styles['currency__name']}>USD</span>
        </div>
      </div>
    </div>
  );
}
