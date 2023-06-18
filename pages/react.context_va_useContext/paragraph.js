import React, { useContext } from 'react'
import styles from '../../styles/global.module.css'
import { themeContext } from './themeContext'

const Paragraph = () => {
    // console.log(theme);
    const theme = useContext(themeContext)
    console.log(theme);
    return (
        <>
            <div className={theme.theme === 'dark' ? styles.dark : ''} >hello would

            </div>
            <button onClick={theme?.handleClick}>toggel theme</button>
        </>
    )
}

export default Paragraph 