import styles from './styles.module.css';

export const Avatar = ({hasBorder = true, src, alt=""}) => {
    const styleSelect = hasBorder ? styles.avatarWithBorder : styles.avatar;
    
    return(
        <img 
            className={styleSelect}
            src={src}
            alt={alt}
        />
    );
}
