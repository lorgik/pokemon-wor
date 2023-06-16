import Link from 'next/link';

export interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const Button = ({ children, className, href, ...rest }: BaseButtonProps) => {
  if (href) {
    return (
      <Link className={className} href={href ? href : ''}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
