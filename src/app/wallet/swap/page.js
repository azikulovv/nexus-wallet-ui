'use client';

import Image from 'next/image';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';
import TetherImage from '@/assets/images/tokens/tether.png';
import ExchangeIcon from '@/assets/icons/fields/exchange.svg';
import styles from './page.module.scss';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function Swap() {
  const router = useRouter();

  return (
    <div className={styles['wrapper']}>
      <div className={styles['swap-wrapper']}>
        <div className={styles['swap']}>
          <div className={styles['swap-header']}>
            <div className={styles['swap-header__left']}>
              <div className={styles['swap-header__image']}>
                <Image src={ToncoinImage} alt='' />
              </div>

              <div className={styles['swap-header__info']}>
                <span>Toncoin</span>
                <span>432.32 TON</span>
              </div>
            </div>

            <div className={styles['swap-header__button-max']}>Max</div>
          </div>

          <div className={styles['swap-main']}>
            <input
              type='number'
              inputMode='numeric'
              defaultValue={2.9}
              className={styles['swap-main__field']}
            />

            <p className={styles['swap-main__conversion']}>~ 4.84 USD</p>

            <p className={styles['swap-main__subtitle']}>Отдаете</p>
          </div>
        </div>

        <button type='button' className={styles['swap-wrapper__button-exchange']}>
          <ExchangeIcon />
        </button>

        <div
          className={styles['swap']}
          style={{
            borderBottom: 'none',
            borderRadius: '0 0 1rem 1rem',
          }}
        >
          <div className={styles['swap-header']}>
            <div className={styles['swap-header__left']}>
              <div className={styles['swap-header__image']}>
                <Image src={TetherImage} alt='' />
              </div>

              <div className={styles['swap-header__info']}>
                <span>USDT</span>
              </div>
            </div>
          </div>

          <div className={styles['swap-main']}>
            <input
              type='number'
              inputMode='numeric'
              defaultValue={140}
              className={styles['swap-main__field']}
            />

            <p className={styles['swap-main__conversion']}>~ 140.84 USD</p>

            <p className={styles['swap-main__subtitle']}>Получаете</p>
          </div>
        </div>
      </div>

      <p className={styles['message']}>A message should be a short, complete sentence.</p>

      <Button onClick={() => router.push('/wallet/swap/confirm')} className={styles['button']}>
        Swap
      </Button>
    </div>
  );
}
