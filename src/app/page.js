'use client';

import Image from 'next/image';
import { Button } from '@/components/Button';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import LogoIcon from '@/assets/icons/logo.png';
import styles from './page.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRouter } from 'next/navigation';

export default function Start() {
  const router = useRouter();

  return (
    <div className={styles['start']}>
      <Swiper pagination={true} modules={[Pagination]} className={styles['start-swiper']}>
        <SwiperSlide>
          <div className={styles['start-swiper-slide']}>
            <div className={styles['start-swiper-slide__logo']}>
              <Image src={LogoIcon} alt='' />
            </div>

            <h1 className={styles['start-swiper-slide__title']}>
              Децентрализованный мультичейн-кошелек <br />
              Nexus Wallet
            </h1>

            <p className={styles['start-swiper-slide__description']}>
              Безопасность, скорость и удобство – вот наши приоритеты
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles['start-swiper-slide']}>
            <div className={styles['start-swiper-slide__logo']}>
              <Image src={LogoIcon} alt='' />
            </div>

            <h1 className={styles['start-swiper-slide__title']}>
              Децентрализованный мультичейн-кошелек <br />
              Nexus Wallet
            </h1>

            <p className={styles['start-swiper-slide__description']}>
              Безопасность, скорость и удобство – вот наши приоритеты
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={styles['start-actions']}>
        <Button
          onClick={() => router.push('/seed-phrase')}
          className={styles['start-actions__button']}
        >
          Создать новый кошелек
        </Button>
        <Button
          onClick={() => router.push('/import')}
          className={styles['start-actions__button']}
          theme='secondary'
        >
          У меня уже есть кошелек
        </Button>
      </div>
    </div>
  );
}
