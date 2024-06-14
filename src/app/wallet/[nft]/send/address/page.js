'use client';

import Image from 'next/image';
import SearchIcon from '@/assets/icons/fields/search.svg';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';
import TetherImage from '@/assets/images/tokens/tether.png';
import LitecoinImage from '@/assets/images/tokens/litecoin.png';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

export default function Address() {
  const router = useRouter();

  return (
    <div className={styles['seed-phrase']}>
      <div className={styles['wrapper']}>
        <div className={styles['search-field']}>
          <SearchIcon />
          <input type='text' placeholder='Введите адрес или имя' />
        </div>

        <div className={styles['header']}>
          <p className={styles['header__label']}>недавние</p>
          <button type='button' className={styles['header__button']}>
            очистить
          </button>
        </div>

        <div className={styles['tokens']}>
          <div onClick={() => router.push('address/toncoin')} className={styles['token']}>
            <Image src={ToncoinImage} alt='' className={styles['token__image']} />

            <p className={styles['token__name']}>toncoin</p>
            <p className={styles['token__symbol']}>20 TON</p>
          </div>

          <div onClick={() => router.push('address/tether')} className={styles['token']}>
            <Image src={TetherImage} alt='' className={styles['token__image']} />

            <p className={styles['token__name']}>tether</p>
            <p className={styles['token__symbol']}>228 USDT</p>
          </div>
        </div>

        <div className={styles['header']}>
          <p className={styles['header__label']}>доступные</p>
        </div>

        <div className={styles['tokens']}>
          <div className={styles['token']}>
            <Image src={LitecoinImage} alt='' className={styles['token__image']} />

            <p className={styles['token__name']}>Litecoin</p>
            <p className={styles['token__symbol']}>12 LTC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
