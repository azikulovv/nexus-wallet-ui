import styles from './Button.module.scss';

export function Button({ children, className, theme = 'primary', type = 'button', ...rest }) {
  return (
    <button
      type={type}
      className={[styles['button'], className, styles[theme]].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
