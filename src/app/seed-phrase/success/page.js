'use client';

import { Button } from '@/components/Button';
import styles from './page.module.scss';
import Image from 'next/image';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import { useRouter } from 'next/navigation';
import UserIcon from '@/assets/images/user.png';

export default function SeedPhrase() {
  const router = useRouter();

  return (
    <div className={styles['seed-phrase']}>
      <div className={styles['seed-phrase__user']}>
        <Image src={UserIcon} alt='' />
      </div>

      <h1 className={styles['seed-phrase__title']}>Congratulations!</h1>
      <p className={styles['seed-phrase__subtitle']}>
        A message should be a short, complete sentence.
      </p>

      <div className={styles['navigation']}>
        <Button
          onClick={() => router.back()}
          theme='secondary'
          className={styles['navigation__back-button']}
        >
          <ArrowLeftIcon />
        </Button>

        <Button
          onClick={() => router.push('/wallet')}
          className={styles['navigation__next-button']}
        >
          Home
        </Button>
      </div>
    </div>
  );
}
