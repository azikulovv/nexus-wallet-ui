'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';

export default function Orders() {
  const router = useRouter();

  return (
    <div className={styles['orders']}>
      <div onClick={() => router.push('order')} className={styles['order']}>
        <div className={styles['order-main']}>
          <h3 className={styles['order-main__title']}>1182 RUB (13 USD)</h3>

          <div className={styles['order-main__info']}>
            <div className={styles['order-main__info-row']}>
              <span>Цена за 1 UDST</span>
              <span>93.32 RUB</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Метод оплаты</span>
              <span>SBERBANK (Карта)</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Вы получите</span>
              <span>12.65 USDT</span>
            </div>
          </div>
        </div>

        <ChevronRightIcon className={styles['order__icon']} />
      </div>

      <div onClick={() => router.push('order')} className={styles['order']}>
        <div className={styles['order-main']}>
          <h3 className={styles['order-main__title']}>1182 RUB (13 USD)</h3>

          <div className={styles['order-main__info']}>
            <div className={styles['order-main__info-row']}>
              <span>Цена за 1 UDST</span>
              <span>93.32 RUB</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Метод оплаты</span>
              <span>SBERBANK (Карта)</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Вы получите</span>
              <span>12.65 USDT</span>
            </div>
          </div>
        </div>

        <ChevronRightIcon className={styles['order__icon']} />
      </div>

      <div onClick={() => router.push('order')} className={styles['order']}>
        <div className={styles['order-main']}>
          <h3 className={styles['order-main__title']}>1182 RUB (13 USD)</h3>

          <div className={styles['order-main__info']}>
            <div className={styles['order-main__info-row']}>
              <span>Цена за 1 UDST</span>
              <span>93.32 RUB</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Метод оплаты</span>
              <span>SBERBANK (Карта)</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Вы получите</span>
              <span>12.65 USDT</span>
            </div>
          </div>
        </div>

        <ChevronRightIcon className={styles['order__icon']} />
      </div>

      <div onClick={() => router.push('order')} className={styles['order']}>
        <div className={styles['order-main']}>
          <h3 className={styles['order-main__title']}>1182 RUB (13 USD)</h3>

          <div className={styles['order-main__info']}>
            <div className={styles['order-main__info-row']}>
              <span>Цена за 1 UDST</span>
              <span>93.32 RUB</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Метод оплаты</span>
              <span>SBERBANK (Карта)</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Вы получите</span>
              <span>12.65 USDT</span>
            </div>
          </div>
        </div>

        <ChevronRightIcon className={styles['order__icon']} />
      </div>

      <div onClick={() => router.push('order')} className={styles['order']}>
        <div className={styles['order-main']}>
          <h3 className={styles['order-main__title']}>1182 RUB (13 USD)</h3>

          <div className={styles['order-main__info']}>
            <div className={styles['order-main__info-row']}>
              <span>Цена за 1 UDST</span>
              <span>93.32 RUB</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Метод оплаты</span>
              <span>SBERBANK (Карта)</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Вы получите</span>
              <span>12.65 USDT</span>
            </div>
          </div>
        </div>

        <ChevronRightIcon className={styles['order__icon']} />
      </div>

      <div onClick={() => router.push('order')} className={styles['order']}>
        <div className={styles['order-main']}>
          <h3 className={styles['order-main__title']}>1182 RUB (13 USD)</h3>

          <div className={styles['order-main__info']}>
            <div className={styles['order-main__info-row']}>
              <span>Цена за 1 UDST</span>
              <span>93.32 RUB</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Метод оплаты</span>
              <span>SBERBANK (Карта)</span>
            </div>

            <div className={styles['order-main__info-row']}>
              <span>Вы получите</span>
              <span>12.65 USDT</span>
            </div>
          </div>
        </div>

        <ChevronRightIcon className={styles['order__icon']} />
      </div>
    </div>
  );
}
