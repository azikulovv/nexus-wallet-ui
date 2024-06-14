import { Button } from '@/components/Button';
import styles from './page.module.scss';
import SuccessIcon from '@/assets/icons/success-circled.svg';

export default function Confirm() {
  return (
    <div className={styles['success']}>
      <div className={styles['success__icon']}>
        <SuccessIcon />
      </div>

      <div className={styles['detail']}>
        <p className={styles['detail__title']}>TON Punk #1158</p>
      </div>

      <p className={styles['success__subtitle']}>
        to <span> EQDuv4T...VAM00</span>
      </p>

      <div className={styles['actions']}>
        <Button theme='secondary'>Details</Button>
        <Button>Home</Button>
      </div>
    </div>
  );
}
