import React, { useContext, useEffect, useState } from 'react';
import styles from "./User.module.css"
import OrderDetail from "./Ui/OrderDetail/OrderDetail"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import orderDetailFormScheme from './Ui/OrderDetail/Hooks/OrderDetailFormScheme';
import useUserApi from './Api/UseUserApi';
import { ToastContainer, toast } from 'react-toastify';
import { AppProviderContext } from '../../shared/Providers/AppProviders';

export default function User() {
    const { token, name, setAuthAction } = useContext(AppProviderContext)

    const [formDisabled, setFormDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [userOrder, setUserOrder] = useState(null);

    const { get, put, list, id } = useUserApi();
    const { data, isLoading } = get(token, name);
    
    

    const formScheme = orderDetailFormScheme();
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formScheme),

    })

    const onSubmit = async (dataForm) => {
        const formatedData = { ...dataForm, addressList: [dataForm.addressList] }
        try {
            await put(token, formatedData)
            toast.success("Cadastro atualizado com sucesso!", { position: toast.POSITION.TOP_CENTER });
            setLoading(false)
        } catch (error) {
            console.log('Texto erro', error.message)
            toast.error("Não foi possível atualizar seu cadastro, tente novamente.", { position: toast.POSITION.TOP_CENTER });
            setLoading(false)
        }
    }
    useEffect(() => {
        if (data && data.length) {
            setAuthAction(name, token, data[0].id)          
            setValue('id', data[0].id)
            setValue('name', data[0].name)
            setValue('email', data[0].email)
            setValue('password', data[0].password)
            setValue('phone', data[0].phone)
            if (data[0].addressList.length) {
                setValue('addressList.street', data[0].addressList[0].street)
                setValue('addressList.number', data[0].addressList[0].number)
                setValue('addressList.neighborhood', data[0].addressList[0].neighborhood)
                setValue('addressList.city', data[0].addressList[0].city)
                setValue('addressList.state', data[0].addressList[0].state)
                setValue('addressList.zip', data[0].addressList[0].zip)
            }
            list(token, data[0].id).then(response => setUserOrder(response))
        }
    }, [data])

    return (
        <div>
            <ToastContainer />
            {data && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.content}>
                        <div className={styles.formHeader}>
                            <h3 className={styles.formHeader}>Dados do usuário</h3>
                        </div>

                        <div className={styles.control}>
                            <label htmlFor="name">Nome:</label>
                            <input name="name" className={styles.inputControl} {...register('name')} disabled={formDisabled} />
                            {errors.name && <span className="errors">{errors.name.message}</span>}
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="email">E-mail:</label>
                            <input name="email" className={styles.inputControl} {...register('email')} disabled={formDisabled} />
                            {errors.email && <span className="errors">{errors.email.message}</span>}
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="password">Senha:</label>
                            <input name="password" className={styles.inputControl} type="password" {...register('password')} disabled={formDisabled} />
                            {errors.password && <span className="errors">{errors.password.message}</span>}
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="street">Endereço:</label>
                            <input id="street" type="text" name="street" className={styles.inputControl} {...register('addressList.street')} disabled={formDisabled} />
                            {errors.addressList && <span className="errors">{errors.addressList.street.message}</span>}
                        </div>
                        <div className={styles.subForm}>
                            <div className={styles.control}>
                                <label htmlFor="number">Número:</label>
                                <input id="number" type="number" name="number" className={styles.inputControl} {...register('addressList.number')} disabled={formDisabled} />
                                {errors.addressList && <span className="errors">{errors.addressList.number.message}</span>}
                            </div>
                            <div className={styles.control}>
                                <label htmlFor="neighborhood">Bairro:</label>
                                <input id="neighborhood" type="text" name="neighborhood" className={styles.inputControl} {...register('addressList.neighborhood')} disabled={formDisabled} />
                                {errors.addressList && <span className="errors">{errors.addressList.neighborhood.message}</span>}
                            </div>
                        </div>
                        <div className={styles.subForm}>
                            <div className={styles.control}>
                                <label htmlFor="city">Cidade:</label>
                                <input id="city" className={styles.inputControl} type="text" name="city" {...register('addressList.city')} disabled={formDisabled} />
                                {errors.addressList && <span className="errors">{errors.addressList.city.message}</span>}
                            </div>
                            <div className={styles.control}>
                                <label htmlFor="state">Estado:</label>
                                <input id="state" type="text" name="state" className={styles.inputControl} {...register('addressList.state')} disabled={formDisabled} />
                                {errors.addressList && <span className="errors">{errors.addressList.state.message}</span>}
                            </div>
                            <div className={styles.control}>
                                <label htmlFor="zip">Cep:</label>
                                <input id="zip" type="text" name="zip" className={styles.inputControl} {...register('addressList.zip')} disabled={formDisabled} />
                                {errors.addressList && <span className="errors">{errors.addressList.zip.message}</span>}
                            </div>
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="phone">Telefone:</label>
                            <input id="phone" name="phone" className={styles.inputControl} {...register('phone')} disabled={formDisabled} />
                            {errors.phone && <span className="errors">{errors.phone.message}</span>}
                        </div>
                    </div>
                </form>
            )}
            {userOrder && (
                <div className={styles.content}>
                    <div className={styles.detailHeader}>
                        <h3>Pedidos realizados</h3>
                        <div className={styles.detailHearderInfo}>
                            <h3>Status</h3>
                            <h3>Detalhes</h3>
                        </div>
                    </div>
                    {userOrder.length && userOrder.map((data, index) => (
                        <OrderDetail data={data} key={index} />
                    ))}
                </div>
            )}


        </div>
    )

}