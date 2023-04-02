import React from 'react'
import MyForm from './MyForm'
import styles from "../../styles/MyModal.module.css"
import MyBtn from './MyBtn'

const MyModal = ({ visible, setVisible, ...props }) => {
    const style = [styles.modal]

    if (visible) {
        style.push(styles.active)
    }

    return (
        <div className={style.join(" ")} onClick={() => setVisible(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <h2 className={styles.modal__title}>Make your own post!</h2>
                <MyBtn styleprop={styles.modal__btn} onClick={() => setVisible(false)}>Close</MyBtn>
                <MyForm {...props} />
            </div>
        </div>
    )
}

export default MyModal