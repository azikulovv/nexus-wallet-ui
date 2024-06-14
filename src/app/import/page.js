'use client';

import { Button } from '@/components/Button';
import styles from './page.module.scss';
import Image from 'next/image';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { useRouter } from 'next/navigation';
import EyeIcon from '@/assets/icons/eye.svg';

export default function SeedPhrase() {
  const router = useRouter();

  return (
    <div className={styles['seed-phrase']}>
      <h1 className={styles['seed-phrase__title']}>Enter your seed phrase</h1>
      <p className={styles['seed-phrase__subtitle']}>
        A message should be a short, complete sentence.
      </p>

      <div className={styles['field']}>
        <div className={styles['field__label']}>
          <span>Enter phrase</span>

          <button>
            <Image src={EyeIcon} alt='' />
          </button>
        </div>

        <textarea className={styles['field__input']}></textarea>

        <p className={styles['field__subtitle']}>A message should be a short, complete sentence.</p>
      </div>

      <div className={styles['navigation']}>
        <button onClick={() => router.back()} className={styles['navigation__back-button']}>
          <ArrowLeftIcon />
        </button>

        <Button
          onClick={() => router.push('/import/success')}
          className={styles['navigation__next-button']}
        >
          Далее
        </Button>
      </div>
    </div>
  );
}
