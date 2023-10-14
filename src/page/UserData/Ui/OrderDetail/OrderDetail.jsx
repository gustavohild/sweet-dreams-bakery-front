import React from 'react';
import { useState } from 'react';
import * as styles from './OrderDetail.module.css'
import 'boxicons'
import UiModal from '../../../../shared/UI/UiModal/UiModal';

export default function OrderDetail(orderDetailData) {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={styles.content}>
            <div>
                <p><strong>Nº DO PEDIDO:</strong> 13044800</p>
                <p><strong>DATA PEDIDO:</strong> 26/09/2023</p>
            </div>
            <div>
                Bolo de fuba
            </div>
            <div className={styles.detailHearderInfo}>
                <strong>Aguardando pagamento</strong>
                <button className={styles.iconButton} onClick={() => setOpenModal('true')}><box-icon name='search-alt-2'></box-icon></button>
            </div>
            <UiModal isOpen={openModal} title='PIX' setModalOpen={() => setOpenModal(!openModal)}>
                <div className={styles.detailPix}>
                    <div>
                        <strong>Chave Pix:</strong> 45045450467840465604
                    </div>
                    <button className={styles.iconButton}><box-icon name='copy-alt'></box-icon></button>
                </div>
            </UiModal>
        </div>
    )
}