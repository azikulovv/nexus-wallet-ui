import Image from 'next/image';
import styles from './NFT.module.scss';
import NFTImage from '@/assets/images/nfts/nft.png';
import ToncoinImage from '@/assets/images/tokens/toncoin.png';

export function NFT(props) {
  return (
    <div {...props} className={styles['nft']}>
      <Image src={NFTImage} alt='' className={styles['nft__image']} />
      <p className={styles['nft__price']}>150 ton</p>
      <Image src={ToncoinImage} alt='' className={styles['nft__currency']} />
    </div>
  );
}
