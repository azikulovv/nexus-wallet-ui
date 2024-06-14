'use client';

import NFTImage from '@/assets/images/nfts/nft.png';
import Image from 'next/image';
import styles from './page.module.scss';
import { Button } from '@/components/Button';
import { useParams, useRouter } from 'next/navigation';

export default function Network() {
  const router = useRouter();
  const params = useParams();

  return (
    <div className={styles['wrapper']}>
      <div className={styles['detail']}>
        <div className={styles['detail__image']}>
          <Image src={NFTImage} alt='' />
        </div>
      </div>

      <div className={styles['buttons']}>
        <button type='button' className={styles['button']}>
          <span>TON Punk #1158</span>
        </button>

        <div className={styles['search-field']}>
          <input type='text' placeholder='Введите адрес получателя' />
        </div>
      </div>

      <div className={styles['actions']}>
        <Button onClick={() => router.push(`${params.network}/confirm`)}>Отправить</Button>
      </div>
    </div>
  );
}
