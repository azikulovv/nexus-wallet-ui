'use client';

import Image from 'next/image';
import UserImage from '@/assets/images/user.png';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';
import ShareIcon from '@/assets/icons/fields/share.svg';
import CopyIcon from '@/assets/icons/fields/copy.svg';
import ConfirmedIcon from '@/assets/icons/confirmed.svg';
import NFTImage from '@/assets/images/nfts/nft.png';
import styles from './page.module.scss';
import { useState } from 'react';

export default function DetailNFT() {
  const [nav, setNav] = useState('activity');

  return (
    <div className={styles['detail']}>
      <div className={styles['detail__image']}>
        <Image src={NFTImage} alt='' />
      </div>

      <div className={styles['information']}>
        <div className={styles['information-coin']}>
          <Image src={ToncoinImage} alt='' />
        </div>

        <div className={styles['information-header']}>
          <p className={styles['information-header__title']}>TON Punk #1158</p>

          <div className={styles['information-header__price']}>123 TON</div>
        </div>

        <div className={styles['information-main']}>
          <div className={styles['information-main__user']}>
            <span>Punks</span>

            <ConfirmedIcon />
          </div>
          <p className={styles['information-main__description']}>
            Legendary Punks on the Legendary Blochain
          </p>
        </div>
      </div>

      <button type='button' className={[styles['main-button'], styles['primary']].join(' ')}>
        Отправить
      </button>
    </div>
  );
}
