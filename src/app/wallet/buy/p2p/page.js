'use client';

import styles from './page.module.scss';
import PayportIcon from '@/assets/icons/action-button/payport.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import { useRouter } from 'next/navigation';

export default function P2P() {
  const router = useRouter();

  return (
    <div className={styles['wrapper']}>
      <h1 className={styles['title']}>P2P</h1>
      <p className={styles['description']}>A message should be a short, complete sentence.</p>

      <div className={styles['actions']}>
        <button
          type='button'
          onClick={() => router.push('p2p/payport')}
          className={[styles['actions__button'], styles['action-button']].join(' ')}
        >
          <div className={styles['action-button__icon']}>
            <PayportIcon />
          </div>

          <p className={styles['action-button__title']}>Payport</p>
          <p className={styles['action-button__subtitle']}>&nbsp;</p>

          <div className={styles['action-button__right-icon']}>
            <ChevronRightIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
