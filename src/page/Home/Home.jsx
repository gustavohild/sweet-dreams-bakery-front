import React from 'react';
import styles from "./Home.module.css"
import UiCakeCard, { UiCakeCardNavigateButton } from '../../shared/UI/UiCakeCard/UiCakeCard';
import useHomeApi from './Api/UseHomeApi';

export default function Home() {
    const { list } = useHomeApi();
    const { data, isLoading } = list();

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>“BEM-VINDO A SWEET DREAMS"</h1>
                <span>Desde 2020 produzindo qualidade e servindo com excelência o melhor sabor e Delivery de Bolo da cidade!</span>
            </div>
            <div>
                <h1>Conheça todos os nossos sabores</h1>
            </div>
            <div className="cakeCardContainer">
                {
                    data && data.map((data, index) => {
                        return (
                            <UiCakeCard name={data.name} price={data.price} key={index}>
                                <UiCakeCardNavigateButton />
                            </UiCakeCard>
                        )
                    })
                }
            </div>
        </div>
    )
}