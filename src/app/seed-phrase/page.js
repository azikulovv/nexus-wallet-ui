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
      <h1 className={styles['seed-phrase__title']}>Твоя seed phrase</h1>
      <p className={styles['seed-phrase__subtitle']}>
        A message should be a short, complete sentence.
      </p>

      <div className={styles['mnemonics']}>
        <div className={styles['mnemonics-item']}>
          <span>1.</span>
          <span>Pigeon</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>2.</span>
          <span>Attract</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>3.</span>
          <span>Sentence</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>4.</span>
          <span>Pigeon</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>5.</span>
          <span>Announce</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>6.</span>
          <span>Pigeon</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>7.</span>
          <span>Roast</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>8.</span>
          <span>Melt</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>9.</span>
          <span>Size</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>10.</span>
          <span>Pigeon</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>12.</span>
          <span>Size</span>
        </div>

        <div className={styles['mnemonics-item']}>
          <span>12.</span>
          <span>Pigeon</span>
        </div>
      </div>

      <div className={styles['seed-phrase__actions']}>
        <Button className={styles['seed-phrase__button']} theme='link'>
          Скопировать
        </Button>
      </div>

      <div className={styles['navigation']}>
        <button onClick={() => router.back()} className={styles['navigation__back-button']}>
          <ArrowLeftIcon />
        </button>

        <Button
          onClick={() => router.push('/seed-phrase/confirm')}
          className={styles['navigation__next-button']}
        >
          Далее
        </Button>
      </div>
    </div>
  );
}
