import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import styles from './styles.module.scss';
import { ChevronLeft } from 'lucide-react';

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
  ({ className, ...props }, ref) => {
    if (!ref) {
      throw new Error('SliderButton: ref is required');
    }

    return (
      <button
        className={clsx('btn-reset', styles.btn, className)}
        ref={ref}
        {...props}
      >
        <ChevronLeft />
      </button>
    );
  }
);

SliderButton.displayName = 'SliderButton';

