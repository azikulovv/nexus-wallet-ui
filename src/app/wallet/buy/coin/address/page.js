import { Button } from '@/components/Button';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';
import QRImage from '@/assets/images/qr.png';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import styles from './page.module.scss';
import Image from 'next/image';

export default function Address() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['main']}>
        <div className={styles['main__qr']}>
          <Image src={QRImage} alt='' />
        </div>

        <div className={styles['main__title']}>
          <Image src={ToncoinImage} alt='' />
          <p>TON</p>
        </div>

        <p className={styles['main__subtitle']}>Send only TON to this address.</p>
      </div>

      <div className={styles['information']}>
        <div className={styles['information__item']}>
          <span>TON Network</span>
          <ChevronRightIcon />
        </div>

        <div className={styles['information__item']}>
          <span>TKJeT3SJfFSAaDsWSiHCbudbLErBG1Yg1H</span>
          <span>Your TON Address</span>
        </div>
      </div>

      <div className={styles['actions']}>
        <Button theme='secondary'>Поделиться</Button>
        <Button>Копировать</Button>
      </div>
    </div>
  );
}
