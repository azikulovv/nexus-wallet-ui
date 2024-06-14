'use client';

import Image from 'next/image';
import SearchIcon from '@/assets/icons/fields/search.svg';
import QRIcon from '@/assets/icons/fields/qr.svg';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';
import TetherImage from '@/assets/images/tokens/tether.png';
import LitecoinImage from '@/assets/images/tokens/litecoin.png';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

export default function Send() {
  const router = useRouter();

  return (
    <div className={['wrapper']}>
      <div className={styles['search-field']}>
        <SearchIcon className={styles['search-field__icon']} />
        <input type='text' placeholder='Введите адрес или имя' />

        <button className={styles['search-field__button-scan']}>
          <QRIcon />
        </button>
      </div>

      <div className={styles['header']}>
        <p className={styles['header__label']}>недавние</p>
        <button type='button' className={styles['header__button']}>
          очистить
        </button>
      </div>

      <div className={styles['tokens']}>
        <div onClick={() => router.push('send/address')} className={styles['token']}>
          <Image src={ToncoinImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>toncoin</p>
          <p className={styles['token__symbol']}>TON • TON Network</p>
        </div>

        <div onClick={() => router.push('send/address')} className={styles['token']}>
          <Image src={TetherImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>tether</p>
          <p className={styles['token__symbol']}>USDT • TRC20 Network</p>
        </div>

        <div onClick={() => router.push('send/address')} className={styles['token']}>
          <Image src={TetherImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>tether</p>
          <p className={styles['token__symbol']}>USDT • TRC20 Network</p>
        </div>
      </div>

      <div className={styles['header']}>
        <p className={styles['header__label']}>доступные</p>
      </div>

      <div className={styles['tokens']}>
        <div className={styles['token']}>
          <Image src={ToncoinImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>toncoin</p>
          <p className={styles['token__symbol']}>TON</p>
        </div>

        <div className={styles['token']}>
          <Image src={TetherImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>tether</p>
          <p className={styles['token__symbol']}>USDT</p>
        </div>

        <div className={styles['token']}>
          <Image src={LitecoinImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>Litecoin</p>
          <p className={styles['token__symbol']}>LTC</p>
        </div>
      </div>
    </div>
  );
}
