'use client';

import { Button } from '@/components/Button';
import styles from './page.module.scss';
import WarningIcon from '@/assets/icons/warning.svg';
import { useRouter } from 'next/navigation';

export default function Payport() {
  const router = useRouter();

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <p className={styles['header__label']}>12 янв</p>
      </div>

      <div className={styles['warning']}>
        <div className={styles['warning__icon']}>
          <WarningIcon />
        </div>

        <p className={styles['warning__title']}>Не нашел список транзакций</p>
      </div>

      <div className={styles['actions']}>
        <Button onClick={() => router.push('payport/payment')}>Создать</Button>
      </div>
    </div>
  );
}
