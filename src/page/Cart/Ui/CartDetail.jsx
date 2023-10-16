import * as styles from './CartDetail.module.css'
import 'boxicons'

export default function CartDetail({cake, removeCake}) {
    return (
        <div className={styles.content}>
            <div>
                <p><strong>{cake.name}</strong></p>
                <p><strong>Descrição:</strong> {cake.description}</p>
            </div>
            <div className={styles.detailHearderInfo}>
                <strong>R$: {cake.amount}</strong>
                <button className={styles.button} onClick={() => removeCake(cake)} ><box-icon name='trash' type='solid' ></box-icon></button>
            </div>
        </div>
    )
}