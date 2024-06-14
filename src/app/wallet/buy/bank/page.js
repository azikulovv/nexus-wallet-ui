'use client';

import BankIcon from '@/assets/icons/action-button/bank.svg';
import ExchangeIcon from '@/assets/icons/fields/exchange.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import styles from './page.module.scss';
import { Button } from '@/components/Button';
import { useParams, useRouter } from 'next/navigation';

export default function Network() {
  const router = useRouter();
  const params = useParams();

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wallet']}>
        <div className={styles['wallet__image']}>
          <BankIcon />
        </div>

        <div className={styles['wallet__info']}>
          <p className={styles['wallet__name']}>Банковская карта</p>
          <p className={styles['wallet__balance']}>Метод оплаты</p>
        </div>
      </div>

      <div className={styles['field']}>
        <button type='button' className={styles['field__button-exchange']}>
          <ExchangeIcon />
        </button>

        <div className={styles['field__center']}>
          <input type='text' className={styles['field__input']} defaultValue={2.9} />
          <span className={styles['field__conversion']}>~ 4.84 USD</span>
        </div>

        <button type='button' className={styles['field__button-max']}>
          Max
        </button>
      </div>

      <div className={styles['tabs']}>
        <button type='button' className={styles['tabs__item']}>
          100 USDT
        </button>
        <button type='button' className={styles['tabs__item']}>
          200 USDT
        </button>
        <button type='button' className={styles['tabs__item']}>
          500 USDT
        </button>
        <button type='button' className={styles['tabs__item']}>
          1000 USDT
        </button>
      </div>

      <div className={styles['actions']}>
        <Button onClick={() => router.push(`${params.network}/confirm`)}>Отправить</Button>
      </div>
    </div>
  );
}
