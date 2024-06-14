'use client';

import { Button } from '@/components/Button';
import styles from './page.module.scss';
import Image from 'next/image';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { useRouter } from 'next/navigation';

export default function SeedPhrase() {
  const router = useRouter();

  return (
    <div className={styles['seed-phrase']}>
      <h1 className={styles['seed-phrase__title']}>Confirm seed phrase</h1>
      <p className={styles['seed-phrase__subtitle']}>
        A message should be a short, complete sentence.
      </p>

      <div className={styles['check-mnemonic']}>
        <p className={styles['check-mnemonic__title']}>Select the word at position 7</p>

        <div className={styles['check-mnemonic__mnemonic']}>
          <span>7.</span>
          <span>Right Word</span>
        </div>
      </div>

      <div className={styles['seed-phrase__footer']}>
        <div className={styles['mnemonics']}>
          <div className={styles['mnemonics-item']}>
            <span>Pigeon</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Attract</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Sentence</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Pigeon</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Announce</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Pigeon</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Roast</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Melt</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Size</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Pigeon</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Size</span>
          </div>

          <div className={styles['mnemonics-item']}>
            <span>Pigeon</span>
          </div>
        </div>

        <div className={styles['navigation']}>
          <button onClick={() => router.back()} className={styles['navigation__back-button']}>
            <ArrowLeftIcon />
          </button>

          <Button
            onClick={() => router.push('/seed-phrase/pin')}
            className={styles['navigation__next-button']}
          >
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
}
