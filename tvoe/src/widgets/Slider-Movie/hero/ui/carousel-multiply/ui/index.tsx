/* eslint-disable react/no-array-index-key */
import 'swiper/css';
import clsx from 'clsx';
import { useCallback, type ReactNode } from 'react';
import type { SwiperProps } from 'swiper/react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useDomRefWithSetter } from '../lib';
import { SliderButton } from './slider-button';
import styles from './styles.module.scss';
import { SwiperOptions } from 'swiper/types';

export interface CarouselMultiplyProps<T> extends SwiperProps {
  items: T[] | undefined;
  prevBtnClass?: string;
  nextBtnClass?: string;
  renderItem: (item: T, idx: number) => ReactNode;
  className?: string;
  slideClassName?: string;
  containerOffsets?: boolean;
  options?: SwiperOptions;
}

export const CarouselMultiply = <T, _>({
  items,
  renderItem,
  className,
  slideClassName,
  navigation = true,
  options,
  prevBtnClass,
  nextBtnClass,
  ...props
}: CarouselMultiplyProps<T>) => {
  const [nextEl, nextElRef] = useDomRefWithSetter<HTMLButtonElement>();
  const [prevEl, prevElRef] = useDomRefWithSetter<HTMLButtonElement>();

  const renderItems = useCallback(
    (_items: typeof items) =>
      _items?.map((item, idx) => (
        <SwiperSlide
          className={slideClassName}
          key={idx}
          style={{ marginRight: '16px' }}
        >
          {renderItem(item, idx)}
        </SwiperSlide>
      )),
    [slideClassName, renderItem]
  );

  const swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      769: {
        spaceBetween: 15,
      },
      1401: {
        spaceBetween: 18,
      },
    },
    ...options,
  };


  return (
    <Swiper
      className={clsx(styles.slider, className)}
      navigation={{
        prevEl,
        nextEl,
      }}
      {...swiperOptions}
      {...props}
    >
      {navigation ? (
        <>
          <SliderButton
            className={clsx(styles.prev, prevBtnClass)}
            ref={prevElRef}
          />
          <SliderButton
            className={clsx(styles.next, nextBtnClass)}
            ref={nextElRef}
          />
        </>
      ) : null}
      {renderItems(items)}
    </Swiper>
  );
};
