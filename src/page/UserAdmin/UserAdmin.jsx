import React, { useContext, useEffect, useState } from 'react';
import styles from "./UserAdmin.module.css"
import OrderDetailAdmin from './DetailAdmin/OrderDetailAdmin';
import { AppProviderContext } from '../../shared/Providers/AppProviders';
import useUserAdminApi from './Api/UseUserAdminApi';

export default function UserAdmin() {

    const { token, name, setAuthAction } = useContext(AppProviderContext)
    const { get, list } = useUserAdminApi();
    const { data } = get(token, name);
    const [userOrder, setUserOrder] = useState(null);
    const refresh = () => {
        list(token).then(response => setUserOrder(response))
    }

    useEffect(() => {
        if (data && data.length) {
            setAuthAction(name, token)
            list(token).then(response => setUserOrder(response))
        }
    }, [data])
    return (
        <>
            {userOrder && (
                <div className={styles.content}>
                    <div className={styles.detailHeader}>
                        <h3>Pedidos</h3>
                        <div className={styles.detailHearderInfo}>
                            <h3>Status</h3>
                            <h3>Detalhes</h3>
                        </div>
                    </div>
                    {userOrder.length && userOrder.map((data, index) => (
                        <OrderDetailAdmin props={data} key={index} refresh={refresh}/>
                    ))}
                </div>
            )}
        </>

    )

}