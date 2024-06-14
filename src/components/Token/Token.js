import Image from 'next/image';
import styles from './Token.module.scss';
import DaiImage from '@/assets/images/tokens/dai.png';
import TetherImage from '@/assets/images/tokens/tether.png';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';
import LitecoinImage from '@/assets/images/tokens/litecoin.png';
import EthereumImage from '@/assets/images/tokens/ethereum.png';

function getCurrencyImage({ currency }) {
  if (currency === 'toncoin') return ToncoinImage;
  if (currency === 'tether') return TetherImage;
  if (currency === 'litecoin') return LitecoinImage;
  if (currency === 'dai') return DaiImage;
  // if (currency === 'ethereum') return EthereumImage;
  return EthereumImage;
}

function getCurrencySymbol({ currency }) {
  if (currency === 'toncoin') return 'ton';
  if (currency === 'tether') return 'usdt';
  if (currency === 'litecoin') return 'ltc';
  if (currency === 'dai') return 'dai';
  // if (currency === 'ethereum') return 'eth';
  return 'eth';
}

export function Token({ currency }) {
  const image = getCurrencyImage({ currency });
  const symbol = getCurrencySymbol({ currency });

  return (
    <div className={styles['token']}>
      <div className={styles['token__image']}>
        <Image src={image} alt='' />
      </div>

      <p className={styles['token__crypto']}>1,253 {symbol}</p>
      <p className={styles['token__name']}>{currency}</p>

      <p className={styles['token__fiat']}>$2,889.32</p>
    </div>
  );
}
