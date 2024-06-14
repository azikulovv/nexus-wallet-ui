import Image from 'next/image';
import UserImage from '@/assets/images/user.png';
import CopyIcon from '@/assets/icons/fields/copy.svg';
import styles from './page.module.scss';
import { Button } from '@/components/Button';

export default function Token() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['profile']}>
        <div className={styles['profile__image']}>
          <Image src={UserImage} alt='' />
        </div>

        <button className={styles['profile__button-edit']}>Edit photo</button>
      </div>

      <div className={styles['field']}>
        <p className={styles['field__label']}>Имя</p>

        <input type='text' className={styles['field__input']} placeholder='Wallet Name' />
      </div>

      <div className={styles['field']}>
        <p className={styles['field__label']}>seed phrase</p>

        <textarea type='text' className={styles['field__textarea']}>
          Pigeon; attract; sentence; pigeon; announce; pigeon; size; attract; sentence; pigeon;
          announce; Pigeon;
        </textarea>

        <button className={styles['field__button-copy']}>
          <CopyIcon />
        </button>
      </div>

      <div className={styles['actions']}>
        <Button className={styles['actions__button-delete']} theme='secondary'>
          Delete
        </Button>
        <Button className={styles['actions__button-confirm']}>Make active</Button>
      </div>
    </div>
  );
}
