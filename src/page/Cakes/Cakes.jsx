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
import { useCakeApi, useCustomCakeApi }  from './Api/UseCakeApi';

export default function Cakes() {
    const { customCakeList } = useCustomCakeApi();
    const { data: customCakeApi } = customCakeList();
    const [ customCake, setCustomCake] = React.useState(customCakeApi);
    const { list } = useCakeApi();
    const { data, isLoading } = list();
    console.log(customCake);

    const formScheme = usePersonalizeCakeFormScheme();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formScheme)
    })
    
    const { addCakeAction } = useContext(AppProviderContext);
    const [openModal, setOpenModal] = useState(false);
    const notify = () => toast.success("Adicionado ao carrinho!", { position: toast.POSITION.TOP_CENTER });

    const recheio = customCake.filter((cake) => cake.name === "filling");

    const cobertura = customCake.filter((cake) => cake.name === "topping");

    const tamanho = customCake.filter((cake) => cake.name === "size");

    const sabor = customCake.filter((cake) => cake.name === "flavor");

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

                        <label htmlFor="recheio">Recheio:</label>
                        <select className={styles.select} id="recheio" {...register('recheio')}>
                            {customCake && recheio.map((data, index) => (
                                <option value={data.price} key={index}>{data.specification}</option>
                            ))}
                        </select>

                        <label htmlFor="cobertura">Cobertura:</label>
                        <select className={styles.select} id="cobertura" {...register('cobertura')}>
                            {customCake && cobertura.map((data, index) => (
                                <option value={data.price} key={index}>{data.specification}</option>
                            ))}
                        </select>

                        <label htmlFor="tamanho">Tamanho:</label>
                        <select className={styles.select} id="tamanho" {...register('tamanho')}>
                            {customCake && tamanho.map((data, index) => (
                                <option value={data.price} key={index}>{data.specification}</option>
                            ))}
                        </select>

                        <label htmlFor="sabor">Sabor:</label>
                        <select className={styles.select} id="sabor" {...register('sabor')}>
                            {customCake && sabor.map((data, index) => (
                                <option value={data.price} key={index}>{data.specification}</option>
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