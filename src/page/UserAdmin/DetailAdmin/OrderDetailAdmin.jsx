import React, { useContext } from 'react';
import { useState } from 'react';
import * as styles from './OrderDetailAdmin.module.css'
import 'boxicons'
import UiModal from '../../../shared/UI/UiModal/UiModal';
import useUserAdminApi from '../Api/UseUserAdminApi';
import { AppProviderContext } from '../../../shared/Providers/AppProviders';
import { ToastContainer, toast } from 'react-toastify';

export default function OrderDetailAdmin({ props, refresh }) {

    const [openModal, setOpenModal] = useState(false)
    const [status, setStatus] = useState(props.status)
    const { token, name, setAuthAction } = useContext(AppProviderContext)
    const { get, patch } = useUserAdminApi();
    const { data } = get(token, name);
    const notify = () => toast.success("Status atualizado com sucesso!", { position: toast.POSITION.TOP_CENTER });
    const changeStatus = () => {
        setAuthAction(name, token);
        patch(token, props.id, status).then(response => refresh());
        setOpenModal(false);
        notify();
    }

    return (
        <div>
            <ToastContainer />
            <div className={styles.content}>
                <div>
                    <p><strong>Número do pedido: </strong>{props.id}</p>
                    <p><strong>DATA PEDIDO: </strong>{props.createdDate}</p>
                </div>
                <div>
                    {props.name}
                </div>
                <div className={styles.detailHearderInfo}>
                    <strong>{props.status}</strong>
                    <button className={styles.iconButton} onClick={() => setOpenModal('true')}><box-icon name='edit-alt'></box-icon></button>
                </div>
                <UiModal isOpen={openModal} title='STATUS' setModalOpen={() => setOpenModal(!openModal)}>
                    <select className={styles.status} value={status} onChange={(e) => setStatus(e.target.value)} >
                        <option value='AGUARDANDO_PAGAMENTO'>Aguardando pagamento</option>
                        <option value='AGUARDANDO_CONFIRMACAO'>Aguardando confirmacao</option>
                        <option value='PREPARANDO'>Preparando</option>
                        <option value='CONCLUIDO'>Concluido</option>
                    </select>
                    <div className={styles.controlButton}>
                        <button className={styles.button} onClick={() => changeStatus()}>Confirmar</button>
                    </div>

                </UiModal>
            </div>
        </div>
    )
}