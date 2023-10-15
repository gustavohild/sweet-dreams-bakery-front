import Foto from "../../../assets/foto.svg"
import Prestigio from "../../../assets/prestigio.svg"
import { useNavigate } from "react-router-dom"
import styles from "./UiCakeCard.module.css"

export default function UiCakeCard(props){
    return (
       <div className="baseCard">
            {props.name === 'Ninho' && <img className={styles.image} src={Prestigio} alt="" />}
            {props.name === 'Goiabada' && <img className={styles.image} src={Foto} alt="" />}
            {props.name === 'Chocolate' && <img className={styles.image} src={Prestigio} alt="" />}
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

