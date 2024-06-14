'use client';

import styles from './page.module.scss';
import WalletIcon from '@/assets/icons/action-button/wallet.svg';
import BankIcon from '@/assets/icons/action-button/bank.svg';
import P2PIcon from '@/assets/icons/action-button/p2p.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import { useRouter } from 'next/navigation';

export default function Buy() {
  const router = useRouter();

  return (
    <div className={styles['wrapper']}>
      <h1 className={styles['title']}>Выберите метод пополнения</h1>
      <p className={styles['description']}>A message should be a short, complete sentence.</p>

      <div className={styles['actions']}>
        <button
          type='button'
          onClick={() => router.push('buy/coin')}
          className={[styles['actions__button'], styles['action-button']].join(' ')}
        >
          <div className={styles['action-button__icon']}>
            <WalletIcon />
          </div>

          <p className={styles['action-button__title']}>Внешний кошелёк</p>
          <p className={styles['action-button__subtitle']}>Получить с внешнего кошелька</p>

          <div className={styles['action-button__right-icon']}>
            <ChevronRightIcon />
          </div>
        </button>

        <button
          type='button'
          onClick={() => router.push('buy/bank')}
          className={[styles['actions__button'], styles['action-button']].join(' ')}
        >
          <div className={styles['action-button__icon']}>
            <BankIcon />
          </div>

          <p className={styles['action-button__title']}>Банковская карта</p>
          <p className={styles['action-button__subtitle']}>Купить криптовалюту по карте</p>

          <div className={styles['action-button__right-icon']}>
            <ChevronRightIcon />
          </div>
        </button>

        <button
          type='button'
          onClick={() => router.push('buy/p2p')}
          className={[styles['actions__button'], styles['action-button']].join(' ')}
        >
          <div className={styles['action-button__icon']}>
            <P2PIcon />
          </div>

          <p className={styles['action-button__title']}>P2P Маркет</p>
          <p className={styles['action-button__subtitle']}>Купить криптовалюту на P2P</p>

          <div className={styles['action-button__right-icon']}>
            <ChevronRightIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
