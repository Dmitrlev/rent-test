import styles from './Long.module.css';

export const Long = ({
                       vertical = false,
                       size = 0.5,
                       color = 'hsla(0, 0%, 47%, 0.55)',
                       radius = true,
                       margin = 0,
                     }) => {
  return (
    <div
      className={styles.container}
      style={{
        height: !vertical ? size : '100%',
        minWidth: !vertical ? '100%' : size,
        width: !vertical ? '100%' : size,
        background: color,
        borderRadius: radius ? '50%' : 0,
        margin: vertical ? `0 ${margin}px` : `${margin}px 0`,
      }}
    ></div>
  );
};