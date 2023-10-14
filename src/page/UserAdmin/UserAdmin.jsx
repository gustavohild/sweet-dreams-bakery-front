import React from 'react';
import styles from "./UserAdmin.module.css"
import OrderDetail from "../UserData/Ui/OrderDetail/OrderDetail"

export default function UserAdmin() {
    return (
        <div className={styles.content}>
            <div className={styles.detailHeader}>
                <h3>PEDIDOS</h3>
                <div className={styles.detailHearderInfo}>
                    <h3>Status</h3>
                    <h3>Detalhes</h3>
                </div>
            </div>
            <OrderDetail />
            <OrderDetail />
            <OrderDetail />
            <OrderDetail />
            <OrderDetail />
            <OrderDetail />
            <OrderDetail />
            <OrderDetail />
        </div>

    )

}