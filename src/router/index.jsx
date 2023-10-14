import { Routes, Route, Navigate } from "react-router-dom"

import Header from "../app/components/Header/Header"
import Home from "../page/Home/Home"
import Cakes from "../page/Cakes/Cakes"
import Contato from "../page/Contato/Contato"
import Events from "../page/Events/Events"
import Auth from "../page/Auth/Auth"
import Registration from "../page/Registration/Registration"
import styles from "./Router.module.css"
import User from "../page/UserData/User"
import UserAdmin from "../page/UserAdmin/UserAdmin"
import Cart from "../page/Cart/Cart"
import { AppProvider, AppProviderContext } from "../shared/Providers/AppProviders"
import { useContext } from "react"

export const RouteApp = () => {
    const { token } = useContext(AppProviderContext)
    return (
        <AppProvider>
            <main>
                <Header />
                <section className={styles.container}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cakes" element={<Cakes />} />
                        <Route path="/contacts" element={<Contato />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/useradmin" element={<UserAdmin />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </section>
            </main>
        </AppProvider>
    )
}