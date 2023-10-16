import chocolate from "../../../assets/chocolate.svg"
import ninho from "../../../assets/ninho.svg"
import Prestigio from "../../../assets/prestigio.svg"
import { useNavigate } from "react-router-dom"
import styles from "./UiCakeCard.module.css"

export default function UiCakeCard(props){
    return (
       <div className="baseCard">
            {props.name === 'Ninho' && <img className={styles.image} src={ninho} alt="" />}
            {props.name === 'Chocolate' && <img className={styles.image} src={chocolate} alt="" />}
            {props.name === 'Prestigio' && <img className={styles.image} src={Prestigio} alt="" />}
            <h1>{props.name}</h1>
            <h2>R${props.price}</h2>
            {props.children}
       </div>
    )
}

export function UiCakeCardAddButton({addCakeToCart}) {
    return (
        <button className="baseButton" onClick={addCakeToCart}>ADICIONAR</button>
    )
}

export function UiCakeCardNavigateButton() {
    const navigate = useNavigate();

    return (
        <button className="baseButton" onClick={() => navigate("/cakes")}>EU QUERO!</button>
    )
}

