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

      <div className={styles['languages']}>
        <div className={styles['language']}>
          <span className={styles['language__name']}>English</span>
          <span className={styles['language__original-name']}>English</span>
        </div>

        <div className={styles['language']}>
          <span className={styles['language__name']}>Russian</span>
          <span className={styles['language__original-name']}>Русский</span>

          <SuccessIcon className={styles['language__icon']} />
        </div>

        <div className={styles['language']}>
          <span className={styles['language__name']}>Indonesian</span>
          <span className={styles['language__original-name']}>Bahasa Indonesia</span>
        </div>

        <div className={styles['language']}>
          <span className={styles['language__name']}>Spanish</span>
          <span className={styles['language__original-name']}>Español</span>
        </div>

        <div className={styles['language']}>
          <span className={styles['language__name']}>Korean</span>
          <span className={styles['language__original-name']}>한국인</span>
        </div>

        <div className={styles['language']}>
          <span className={styles['language__name']}>Italian</span>
          <span className={styles['language__original-name']}>Italiano</span>
        </div>

        <div className={styles['language']}>
          <span className={styles['language__name']}>Chinese (simplified)</span>
          <span className={styles['language__original-name']}>中文 (简体)</span>
        </div>

        <div className={styles['language']}>
          <span className={styles['language__name']}>Chinese (simplified)</span>
          <span className={styles['language__original-name']}>中文 (简体)</span>
        </div>
      </div>
    </div>
  );
}
