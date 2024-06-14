import SuccessIcon from '@/assets/icons/success-circled.svg';
import LoadingIcon from '@/assets/icons/loading.svg';
import ErrorIcon from '@/assets/icons/error.svg';
import { Button } from '@/components/Button';
import styles from './page.module.scss';

export default function Confirm() {
  return (
    <div className={styles['success']}>
      <div className={styles['success__icon']}>
        {/* <LoadingIcon /> */}
        {/* <ErrorIcon /> */}
        <SuccessIcon />
      </div>
      <h1 className={styles['success__title']}>435.09 USDT</h1>
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
