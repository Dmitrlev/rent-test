import styles from './MainButton.module.css';


// replace transform(scale) with width
export const MainButton = ({
  title = 'button',
  callback = null,
  background = '#e89732',
  color = 'white',
  style = {},
  styleTitle = {},
  animated = false,
  hoverSize = true,
}) => {
  return (
    <button
      onClick={callback}
      className={`
        ${styles.container} 
        ${!animated && styles['container-hover']} 
        ${hoverSize && styles['hover-size']}
      `}
      style={{...style, background, color}}
    >
      {animated && <div className={styles['animated-block']}></div>}
      <p
        style={styleTitle}
        className={`
          ${styles.title}
          ${hoverSize && styles['hover-size-title']}
        `}
      >{title}</p>
    </button>
  )
}