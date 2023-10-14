import React, { useContext } from 'react';
import styles from "./EventsCard.module.css"
import Foto from "../../../../assets/foto.svg"
import { AppProviderContext } from '../../../../shared/Providers/AppProviders';
import { ToastContainer, toast } from 'react-toastify';

export default function EventsCard(props) {

    const { addEventAction } = useContext(AppProviderContext);
    const notify = () => toast.success("Adicionado ao carrinho!", { position: toast.POSITION.TOP_CENTER });

    const handleAddToCart = (cake) => {
        addEventAction(cake);
        notify();
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <div>
                <img className={styles.foto} src={Foto} alt="" />
            </div>
            <div className={styles.contentInfo}>
                <div className={styles.text}>
                    <h3>{props.event.name}</h3>
                    <h4>{`R$ ${props.event.price}`}</h4>
                </div>
                <div className={styles.descricaoBolo}>
                    <p>{`Descrição: ${props.event.description}`}</p>
                </div>
                <div className={styles.adicionar}>
                    <button className={styles.button} onClick={() => handleAddToCart(props.event)}>ADICIONAR</button>
                </div>
            </div>
        </div>
    )
}