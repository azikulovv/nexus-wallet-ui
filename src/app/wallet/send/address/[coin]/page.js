'use client';

import Image from 'next/image';
import TetherImage from '@/assets/images/tokens/tether.png';
import styles from './page.module.scss';
import { useParams, useRouter } from 'next/navigation';

export default function Network() {
  const router = useRouter();
  const params = useParams();

  return (
    <div className={styles['network']}>
      <div className={styles['tokens']}>
        <div onClick={() => router.push(`${params.coin}/erc20`)} className={styles['token']}>
          <Image src={TetherImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>ERC20</p>
          <p className={styles['token__symbol']}>Tether</p>
        </div>

        <div onClick={() => router.push(`${params.coin}/trc20`)} className={styles['token']}>
          <Image src={TetherImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>TRC20</p>
          <p className={styles['token__symbol']}>Tether</p>
        </div>

        <div onClick={() => router.push(`${params.coin}/bep20`)} className={styles['token']}>
          <Image src={TetherImage} alt='' className={styles['token__image']} />

          <p className={styles['token__name']}>BEP20</p>
          <p className={styles['token__symbol']}>Tether</p>
        </div>
      </div>
    </div>
  );
}
