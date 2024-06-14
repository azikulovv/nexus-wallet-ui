'use client';

import Image from 'next/image';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';
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
          <Image src={ToncoinImage} alt='' />
        </div>

        <div className={styles['wallet__info']}>
          <p className={styles['wallet__name']}>Toncoin</p>
          <p className={styles['wallet__balance']}>432.32 TON</p>
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

      <div className={styles['buttons']}>
        <button type='button' className={styles['button']}>
          <span>TON Network</span>

          <ChevronRightIcon />
        </button>

        <input type='text' className={styles['input']} placeholder='Memo' />

        <button type='button' className={styles['button']}>
          <span>
            Send to <span className={styles['blue']}>EQDuv4T...VAM00</span>
          </span>

          <ChevronRightIcon />
        </button>
      </div>

      <p className={styles['message']}>This address is not associated with the ERC20 Network</p>

      <div className={styles['actions']}>
        <Button onClick={() => router.push(`${params.network}/confirm`)}>Отправить</Button>
      </div>
    </div>
  );
}
