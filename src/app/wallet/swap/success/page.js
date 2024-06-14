import SuccessIcon from '@/assets/icons/success-circled.svg';
import { Button } from '@/components/Button';
import styles from './page.module.scss';

export default function Confirm() {
  return (
    <div className={styles['success']}>
      <div className={styles['success__icon']}>
        <SuccessIcon />
      </div>
      <div className={styles['success__title']}>435.09 USDT</div>
      <div className={styles['success__subtitle']}>Зачислена на ваш кошелек</div>

      <div className={styles['actions']}>
        <Button theme='secondary'>Details</Button>
        <Button>Home</Button>
      </div>
    </div>
  );
}
