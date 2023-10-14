import React from 'react';
import styles from "./UiModal.module.css"

export default function UiModal({ isOpen, title, setModalOpen, children }) {

    if (isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.titleModal}>{title}</h3>
                        <button className={styles.closeButton} onClick={setModalOpen}>X</button>
                    </div>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }

    return null

}