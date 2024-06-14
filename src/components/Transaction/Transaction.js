import Image from 'next/image';
import styles from './Transaction.module.scss';
import UserImage from '@/assets/images/user.png';

function getColorByStatus({ status }) {
  if (status === 'получено') return '#39CC83';
  if (status === 'отправлено') return '#8E8E93';
  return '#FF5454';
}

export function Transaction({ status, amount }) {
  return (
    <div className={styles['transaction']}>
      <div className={styles['transaction__image']}>
        <Image src={UserImage} alt='' />
      </div>

      <p className={styles['transaction__name']}>Ilya grishin</p>
      <p className={styles['transaction__datetime']}>12 Янв в 12:05</p>

      <p
        style={{ '--color': getColorByStatus({ status }) }}
        className={styles['transaction__amount']}
      >
        {status === 'получено' && '+'}
        {amount} ton
      </p>

      <p
        style={{ '--color': getColorByStatus({ status }) }}
        className={styles['transaction__status']}
      >
        {status}
      </p>
    </div>
  );
}
