import Foto from "../../../assets/foto.svg"
import { useNavigate } from "react-router-dom"

export default function UiCakeCard(props){
    return (
       <div className="baseCard">
            <img src={Foto} alt="" /> 
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

