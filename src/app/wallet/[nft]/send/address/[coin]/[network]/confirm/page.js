'use client';

import Image from 'next/image';
import InfoIcon from '@/assets/icons/fields/info.svg';
import NFTImage from '@/assets/images/nfts/nft.png';
import styles from './page.module.scss';
import { Button } from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function Confirm() {
  const router = useRouter();

  return (
    <div className={styles['wrapper']}>
      <div className={styles['detail']}>
        <div className={styles['detail__img']}>
          <Image priority src={NFTImage} alt='' />
        </div>

        <p className={styles['detail__title']}>TON Punk #1158</p>
      </div>

      <div className={styles['information']}>
        <div className={styles['information-row']}>
          <span className={styles['information-row__title']}>From</span>
          <span className={styles['information-row__value']}>0x3928...9dF8</span>
        </div>

        <div className={styles['information-row']}>
          <span className={styles['information-row__title']}>To</span>
          <span className={styles['information-row__value']}>EQDuv4T...VAM00</span>
        </div>

        <div className={styles['information-row']}>
          <span className={styles['information-row__title']}>Network</span>
          <span className={styles['information-row__value']}>ERC20</span>
        </div>

        <div className={styles['information-row']}>
          <span className={styles['information-row__title']}>Withdrawal</span>
          <span className={styles['information-row__value']}>
            ~ 4.84 USD <InfoIcon />
          </span>
        </div>
      </div>

      <div className={styles['actions']}>
        <Button theme='secondary'>Изменить</Button>
        <Button onClick={() => router.push(`success`)}>Отправить</Button>
      </div>
    </div>
  );
}
