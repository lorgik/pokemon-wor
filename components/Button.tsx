import Link from 'next/link';

import styles from '@/styles/Button.module.scss';

export interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  href,
  onClick,
  ...rest
}: BaseButtonProps) => {
  if (href) {
    return (
      <Link
        className={`${className} ${styles.button}`}
        onClick={onClick}
        href={href ? href : ''}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
