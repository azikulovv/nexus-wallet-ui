'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import SwapIcon from '@/assets/icons/swap.svg';
import StocksIcon from '@/assets/icons/stocks.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import ChevronBottomIcon from '@/assets/icons/chevron-bottom.svg';
import UserImage from '@/assets/images/user.png';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Token } from '@/components/Token';
import { useState } from 'react';
import { Transaction } from '@/components/Transaction';
import { NFT } from '@/components/NFT';
import { useRouter } from 'next/navigation';

export default function Wallet() {
  const router = useRouter();
  const [nav, setNav] = useState('tokens');

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wallet']}>
        <div className={styles['wallet-header']}>
          <button type='button' className={styles['wallet-header__wallet']}>
            <Image src={UserImage} alt='' />

            <span>Wallet 1</span>

            <ChevronBottomIcon />
          </button>

          <Link href='/settings' className={styles['wallet-header__settings']}>
            <SettingsIcon />
          </Link>
        </div>

        <div className={styles['wallet-main']}>
          <div className={styles['wallet-main__balance']}>
            <span>$2,934</span>
            <span>.32</span>
          </div>

          <div className={styles['wallet-main__stocks']}>
            <StocksIcon />
            <span>62.00% ($20.66)</span>
          </div>
        </div>

        <div className={styles['wallet-actions']}>
          <Button
            onClick={() => router.push('/wallet/send')}
            className={styles['wallet-actions__button-send']}
          >
            Отправить
          </Button>
          <Button
            onClick={() => router.push('/wallet/buy')}
            className={styles['wallet-actions__button-replenish']}
            theme='secondary'
          >
            Пополнить
          </Button>
          <Button
            onClick={() => router.push('/wallet/swap')}
            className={styles['wallet-actions__button-swap']}
            theme='secondary'
          >
            <SwapIcon />
          </Button>
        </div>
      </div>

      <div className={styles['history']}>
        <div className={styles['history-nav']}>
          <button
            type='button'
            onClick={() => setNav('tokens')}
            className={[styles['history-nav__link'], nav === 'tokens' && styles['active']].join(
              ' '
            )}
          >
            Токены
          </button>

          <button
            type='button'
            onClick={() => setNav('nfts')}
            className={[styles['history-nav__link'], nav === 'nfts' && styles['active']].join(' ')}
          >
            NFTs
          </button>

          <button
            type='button'
            onClick={() => setNav('transactions')}
            className={[
              styles['history-nav__link'],
              nav === 'transactions' && styles['active'],
            ].join(' ')}
          >
            Транзакции
          </button>
        </div>

        <div className={styles['history-list']}>
          {nav === 'tokens' ? (
            <div>
              <Token currency={'toncoin'} />
              <Token currency={'tether'} />
              <Token currency={'litecoin'} />
              <Token currency={'ethereum'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
              <Token currency={'dai'} />
            </div>
          ) : nav === 'nfts' ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '0.5rem',
                paddingInline: '0.625rem',
              }}
            >
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
              <NFT onClick={() => router.push('/wallet/random-nft')} />
            </div>
          ) : (
            <div className=''>
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'отправлено'} amount={'51.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'отправлено'} amount={'51.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'ошибка'} amount={'20.20'} />
              <Transaction status={'получено'} amount={'521.20'} />
              <Transaction status={'отправлено'} amount={'51.20'} />
              <Transaction status={'ошибка'} amount={'20.20'} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
