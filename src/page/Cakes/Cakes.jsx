import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import UiCakeCard, { UiCakeCardAddButton } from '../../shared/UI/UiCakeCard/UiCakeCard';
import UiModal from '../../shared/UI/UiModal/UiModal';
import { AppProviderContext } from '../../shared/Providers/AppProviders';

import 'react-toastify/dist/ReactToastify.css';
import styles from "./Cakes.module.css"

import { useForm } from 'react-hook-form';
import usePersonalizeCakeFormScheme from './Hooks/UsePersonalizeCakeFormScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCakeApi, useCustomCakeApi } from './Api/UseCakeApi';

export default function Cakes() {

    const { list } = useCakeApi();
    const { customCakeList } = useCustomCakeApi();
    console.log(customCakeList);
    const { data, isLoading } = list();

    const formScheme = usePersonalizeCakeFormScheme();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formScheme)
    })
    
    const { addCakeAction } = useContext(AppProviderContext);
    const [openModal, setOpenModal] = useState(false);
    const notify = () => toast.success("Adicionado ao carrinho!", { position: toast.POSITION.TOP_CENTER });

    const recheio = [
        { value: 0, name: "Chocolate" },
        { value: 1, name: "Creme" },
        { value: 2, name: "Laranja" },
    ]

    const cobertura = [
        { value: 0, name: "Caramelo" },
        { value: 1, name: "Chocolate" },
        { value: 2, name: "Coco" },
    ]

    const tamanho = [
        { price: 30, name: "P" },
        { price: 45, name: "M" },
        { price: 60, name: "G" },
    ]

    const sabor = [
        { value: 0, name: "Coco" },
        { value: 1, name: "Abacaxi" },
        { value: 2, name: "Chocolate" },
    ]

    const handleAddToCart = (cake) => {
        addCakeAction(cake);
        notify();
    }

    const onSubmit = (data) => {
        const cake = { id: `${data.recheio}${data.cobertura}${data.tamanho}${data.sabor}`, 
            name: "Bolo Personalizado", description: `Bolo personalizado de ${recheio[data.recheio].name} com cobertura de ${cobertura[data.cobertura].name} sabor ${sabor[data.sabor].name}`, amount: data.tamanho, quantity: 1 };
        setOpenModal(false);
        addCakeAction(cake);
        notify();
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <div className="cakeCardContainer">
                {
                    data && data.map((data, index) => {
                        return (
                            <UiCakeCard name={data.name} price={data.price} key={index}>
                                <UiCakeCardAddButton addCakeToCart={() => handleAddToCart(data)} />
                            </UiCakeCard>
                        )
                    })
                }
            </div>
            <div className={styles.caixaDeBaixoComTextoBotao}>
                <h1 className={styles.title}>Monte seu bolo do jeito que você gosta!</h1>
                <button className="baseButton" onClick={() => setOpenModal('true')}>PERSONALIZE</button>
            </div>
            <UiModal isOpen={openModal} title='Bolos Personalizados' setModalOpen={() => setOpenModal(!openModal)}>
                <div className={styles.containerselect}>
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <label htmlFor="recheio">Cobertura:</label>
                        <select className={styles.select} id="recheio" {...register('recheio')}>
                            {recheio.map((data, index) => (
                                <option value={data.value} key={index}>{data.name}</option>
                            ))}
                        </select>

                        <label htmlFor="cobertura">Cobertura:</label>
                        <select className={styles.select} id="cobertura" {...register('cobertura')}>
                            {cobertura.map((data, index) => (
                                <option value={data.value} key={index}>{data.name}</option>
                            ))}
                        </select>

                        <label htmlFor="tamanho">Tamanho:</label>
                        <select className={styles.select} id="tamanho" {...register('tamanho')}>
                            {tamanho.map((data, index) => (
                                <option value={data.value} key={index}>{data.name}</option>
                            ))}
                        </select>

                        <label htmlFor="sabor">Sabor:</label>
                        <select className={styles.select} id="sabor" {...register('sabor')}>
                            {sabor.map((data, index) => (
                                <option value={data.value} key={index}>{data.name}</option>
                            ))}
                        </select>
                        <div className={styles.button}>
                            <button type='submit' className="baseButton">ADICIONAR</button>
                        </div>
                    </form>


                </div>

            </UiModal>
        </div>
    )
}