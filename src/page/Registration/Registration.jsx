import React, { useState } from 'react';
import styles from "./Registration.module.css"
import { useForm } from 'react-hook-form';
import useRegistrationFormScheme from './Hooks/UseRegistrationFormScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import useRegistrationApi from './Api/UseRegistrationApi';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const { post } = useRegistrationApi();
    const formScheme = useRegistrationFormScheme();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formScheme)
    })

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate ()

    const onSubmit = async (data) => {
        setLoading(true)
        const formatedData = { ...data, addressList: [data.addressList] }
        try {
            await post.mutateAsync(formatedData)
            toast.success("Cadastro realizado com sucesso!", { position: toast.POSITION.TOP_CENTER });
            setLoading(false)
            navigate("/auth")
        } catch {
            toast.error("Não foi possível realizar seu cadastro, tente novamente.", { position: toast.POSITION.TOP_CENTER });
            setLoading(false)
        }
    }
    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.content}>
                    <h3 className={styles.formHeader}>Cadastro do usuário</h3>

                    <div className={styles.control}>
                        <label htmlFor='name'>Nome:</label>
                        <input id='name' name="name" className={styles.inputControl} {...register('name')} />
                        {errors.name && <span className="errors">{errors.name.message}</span>}
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="email">E-mail:</label>
                        <input id="email" name="email" className={styles.inputControl} {...register('email')} />
                        {errors.email && <span className="errors">{errors.email.message}</span>}
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="password">Senha:</label>
                        <input id="password" name="password" className={styles.inputControl} type="password" {...register('password')} />
                        {errors.password && <span className="errors">{errors.password.message}</span>}
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="street">Endereço:</label>
                        <input id="street" type="text" name="street" className={styles.inputControl} {...register('addressList.street')} />
                        {errors.addressList && <span className="errors">{errors.addressList.street.message}</span>}
                    </div>
                    <div className={styles.subForm}>
                        <div className={styles.control}>
                            <label htmlFor="number">Número:</label>
                            <input id="number" type="number" name="number" className={styles.inputControl} {...register('addressList.number')} />
                            {errors.addressList && <span className="errors">{errors.addressList.number.message}</span>}
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="neighborhood">Bairro:</label>
                            <input id="neighborhood" type="text" name="neighborhood" className={styles.inputControl} {...register('addressList.neighborhood')} />
                            {errors.addressList && <span className="errors">{errors.addressList.neighborhood.message}</span>}
                        </div>
                    </div>
                    <div className={styles.subForm}>
                        <div className={styles.control}>
                            <label htmlFor="city">Cidade:</label>
                            <input id="city" className={styles.inputControl} type="text" name="city" {...register('addressList.city')} />
                            {errors.addressList && <span className="errors">{errors.addressList.city.message}</span>}
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="state">Estado:</label>
                            <input id="state" type="text" name="state" className={styles.inputControl} {...register('addressList.state')} />
                            {errors.addressList && <span className="errors">{errors.addressList.state.message}</span>}
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="zip">Cep:</label>
                            <input id="zip" type="text" name="zip" className={styles.inputControl} {...register('addressList.zip')} />
                            {errors.addressList && <span className="errors">{errors.addressList.zip.message}</span>}
                        </div>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="phone">Telefone:</label>
                        <input id="phone" name="phone" className={styles.inputControl} {...register('phone')} />
                        {errors.phone && <span className="errors">{errors.phone.message}</span>}
                    </div>

                </div>

                <div className={styles.controlButton}>
                    <button className={styles.button}>Salvar{loading && <box-icon name='loader' color='#ffffff' ></box-icon>}</button>
                </div>
            </form>
        </div>
    )

}