import Link from 'next/link';
import LanguageIcon from '@/assets/icons/settings/language.svg';
import CurrencyIcon from '@/assets/icons/settings/currency.svg';
import NewsIcon from '@/assets/icons/settings/news.svg';
import TokensIcon from '@/assets/icons/settings/tokens.svg';
import SeedPhraseIcon from '@/assets/icons/settings/seed-phrase.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';
import HelpIcon from '@/assets/icons/settings/help.svg';
import UserImage from '@/assets/images/user.png';
import styles from './page.module.scss';
import Image from 'next/image';

export default function Settings() {
  return (
    <div className={styles['settings']}>
      <div className={styles['nav']}>
        <Link href='#' className={styles['nav__wallet-link']}>
          <Image src={UserImage} alt='' />

          <p>Wallet 1</p>
          <span>$2,934.32</span>

          <ChevronRightIcon />
        </Link>

        <Link href='/settings/language' className={styles['nav__link']}>
          <div className={styles['nav__link-left']}>
            <LanguageIcon />
            <span>Язык кошелька</span>
          </div>

          <div className={styles['nav__link-right']}>
            <span>Русский</span>

            <ChevronRightIcon />
          </div>
        </Link>

        <Link href='/settings/currency' className={styles['nav__link']}>
          <div className={styles['nav__link-left']}>
            <CurrencyIcon />

            <span>Основная валюта</span>
          </div>

          <div className={styles['nav__link-right']}>
            <span>KZT</span>

            <ChevronRightIcon />
          </div>
        </Link>

        <Link href='/settings/tokens' className={styles['nav__link']}>
          <div className={styles['nav__link-left']}>
            <TokensIcon />
            <span>Настройки токенов</span>
          </div>

          <div className={styles['nav__link-right']}>
            <ChevronRightIcon />
          </div>
        </Link>
      </div>

      <br />

      <div className={styles['nav']}>
        <Link href='/settings/seed-phrase' className={styles['nav__link']}>
          <div className={styles['nav__link-left']}>
            <SeedPhraseIcon />
            <span>Seed Phrase</span>
          </div>

          <div className={styles['nav__link-right']}>
            <ChevronRightIcon />
          </div>
        </Link>
      </div>

      <br />

      <div className={styles['nav']}>
        <Link href='#' className={styles['nav__link']}>
          <div className={styles['nav__link-left']}>
            <HelpIcon />
            <span>Обратиться в поддержку</span>
          </div>

          <div className={styles['nav__link-right']}>
            <ChevronRightIcon />
          </div>
        </Link>

        <Link href='#' className={styles['nav__link']}>
          <div className={styles['nav__link-left']}>
            <NewsIcon />
            <span>Новости Кошелька</span>
          </div>

          <div className={styles['nav__link-right']}>
            <ChevronRightIcon />
          </div>
        </Link>
      </div>

      <div className={styles['links']}>
        <Link href={'#'} className={styles['links__item']}>
          Правовая информация
        </Link>
        <Link href={'#'} className={styles['links__item']}>
          Пользовательское соглашение
        </Link>
      </div>
    </div>
  );
}
