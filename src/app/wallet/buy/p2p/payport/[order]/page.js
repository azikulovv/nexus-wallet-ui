import styles from './page.module.scss';
import CopyIcon from '@/assets/icons/fields/copy.svg';

export default function Order() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['order-info']}>
        <div className={styles['order-info-row']}>
          <span className={styles['order-info-row__name']}>Номер заказа</span>
          <span className={styles['order-info-row__value']}>id123aBcDD</span>
        </div>

        <div className={styles['order-info-row']}>
          <span className={styles['order-info-row__name']}>Сумма</span>
          <span className={styles['order-info-row__value']}>KZT 5 000.00</span>
        </div>
      </div>

      <div className={styles['field']}>
        <p className={styles['field__label']}>Номер карты</p>

        <div className={styles['field__inner']}>
          <p className={styles['field__title']}>Apple Card</p>
          <p className={styles['field__number']}>1234 1234 1234 1234</p>

          <button className={styles['field__button-copy']}>
            <CopyIcon />
          </button>
        </div>
      </div>

      <div className={styles['field']}>
        <p className={styles['field__label']}>Банк</p>

        <div className={styles['field__input']}>Kaspi Bank</div>
      </div>

      <div className={styles['field']}>
        <p className={styles['field__label']}>Скриншот</p>

        <div className={styles['field__button-image']}>+</div>
      </div>
    </div>
  );
}
