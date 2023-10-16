import React, { useContext, useState } from 'react';
import styles from "./Auth.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuthFormScheme from './Hooks/UseAuthFormScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import useAuthApi from './Api/UseAuthApi';
import { AppProviderContext } from '../../shared/Providers/AppProviders';

export default function Auth() {
    const {post} = useAuthApi();
    const formScheme = useAuthFormScheme();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formScheme)
    })

    const { setAuthAction } = useContext(AppProviderContext);
    const navigate = useNavigate ()
    const [ loading, setLoading ] = useState(false);

    const onSubmit = async (data) => {
        try {
            const token = await post(data)
            console.log('login', token)
            if(token){
                toast.success("Login realizado com sucesso!", { position: toast.POSITION.TOP_CENTER });
                setLoading(false)
                localStorage.setItem('token', token);
                setAuthAction(data.login, token)
                navigate('/user')
            }
            toast.error("Login e senha não encontrado, tente novamente.", { position: toast.POSITION.TOP_CENTER });
        } catch(error) {
            toast.error("Login e senha não encontrado, tente novamente.", { position: toast.POSITION.TOP_CENTER });
            setLoading(false)
        }
    }

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={styles.content}>
                    <div className={styles.formHeader}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABPBJREFUaEPtmmnIlUUUx3+aGoKQWGaLlWZZFlJZhEVooSBuoBEp0QeJILVocWmVTLLUFnctBVHsQ1QkGaV+yMyijRJSQ9uLUjPLIAgkyJS/zX25zJ3nPjPzzHO96D3w8qLvnHP+/1nOnDnnacdJJu1OMr60CJ/oK95a4ZJW+BzgFmAk0BvQvyX7gB+ADcCrwP6S/LeZLXuFrwIeA8YC7XPI/Ae8DjwJ7CyLeJmEHwWeigB+BHgIeDZCN1elLMILgPtzvdcf8DwwraCNGvUyCD8AzE8EVJO2KJGtY2ZSEx4EbM0A+LOZiC+B7WbMFUB/YApwXobeDcCHqUinJHwK8BVwkQPcG8AE4K8M4KcBa4Axjr9/A1wGHE5BOiXhezO2X8hZ1FHQkbBlIrCi2QhrdS+xQO0Argb+9QTbCfgC6GeN1zHQ1i8sqVa4O3DAQiOSAqmJCBGd68+BDpZSD4ePELtJg9Zo4E3L+3vATcGI/ldQkLre0h0ObIq016aWaoV1xl6wwKwG7ogE+BJwu6V7J7Aq0l5ywkofZ1tg5gEPRwJUlmUnHY8AcyPtJSc8CVhugVmfcc34YNbx0DGpliSROtWWvtkk/tUAlWhc4MPOMWYPcK71/7qjNYmFJBVhPff2OpCMADYGIhyWEZzk49dAWzXDUxGWYd2Vl1sefjF38yFPoJ0BZVY9rfFKRa/0tFF3WErCdwNLHd6U/Pu+nKQvO7YkOb8ympKwsqRvgfMdgPNy6a7AWkegkintElVJmi6XFrghwDsZe0qBSLmytqfSx47mCKgqMh1QJuUSJS9KYpJIyhWuANJTTw+GFHIfsDiFoYqNMgjL9izg8YJAZeOJgjZq1MsiLEe6kpQidgsEfdCklYXzZpffMgnLn4LR08BdHlVLBaUXTZUzq1AQOHe1w8smXPGorEnZmOrSFzrq0m8B60ydujCpegYaRbhUEiHGW4RDZqvO2GtNeqiAdTqglNFHlIIqaP1pEo7PfJRCxqRcYT3nKv0jkUwhIv828Bqgc15YihJWv+g2YIajgFcYnGVgt+k7vQKoDxUlRQgrZ9bTTzXjRooabaMAvbeDJZbwxSa/rbQ9gx0XVFCb9UbzWAkyFUNYZdR3PTKoT4CfTGHgb09UXUyloxcwMEdHgU2kg1qroYTPArZVJQ42Jp0zvX/V5/3Dk2TWsDOAW4F7HIX5io6qLHpt/e7rK5SwCuTqJNjym0kfC9ecMoAr+qtIqIK/LZ967IY2nRDCKrs+6HD4vdlaeu+WKdrmWwD9tkX5ukrFueJLWD0jV8tEkfKakC2Vi6j+gDNNG8bVWu1jvhepa8GXsIKU3Tb5x5BV8a6RMgD4CDjVcroZGJoHxIewGtIfOAxNdrRX8vyl+rsqIQsdxtSP+rieEx/CzwFTLSPfAZemKqxFzIKa77uAvpausKo+lik+hH90BIpkZdMIshUVXVdLLH1h1Xs7mrBWUXdrteizIt2RuviPp5xtkhp70YT56yxgeSs8HnjZUn4fGHw8mVb5VvC6zsIyznzV54SYR9jVFVTZVEGjGWQZoOBZLaqfrYxdYdfXdN6XfANmZI6jB62v+J6JJay68ExLuZR6ceTkBOPL29LBBiOBx6oF48sjrOeXfqpFfZ5kvZ5YpkYvGF8e4YJ4mk+9Rbj51iQtotYKp53P5rPWWuHmW5O0iI4CGU7GPW5XCSMAAAAASUVORK5CYII=" />
                        <h3>Login do cliente</h3>
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="login">E-mail</label>
                        <input name="login" className={styles.inputControl} {...register('login')} />
                        {errors.login && <span className="errors">{errors.login.message}</span>}
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="password">Senha</label>
                        <input name="password" className={styles.inputControl} type="password" {...register('password')} />
                        {errors.password && <span className="errors">{errors.password.message}</span>}
                    </div>
                    <div className={styles.controlButton}>
                        <button type='submit' className={styles.button}>Entrar</button>
                    </div>
                    <div className={styles.formFooter}>
                        Não tem cadastro,<strong><Link to="/registration">Clique aqui</Link></strong>
                    </div>
                </div>

            </form>
        </div>
    )
}