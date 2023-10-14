import { createContext, useMemo, useState } from "react"

const initialState = {
    name: "",
    email: "",
    token: "",
    cakeList: [],
    eventsList: [],

}

const AppProviderContext = createContext(initialState)

const AppProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [id, setId] = useState(0)
    const [cakeList, setCakeList] = useState([])
    const [eventList, setEventList] = useState([])
    
    const addCakeAction = (cake) => {
        setCakeList((prev) => [...prev, cake])
    }

    const removeCakeAction = (cake) => {
        const filter = cakeList.findIndex(data => data.id !== cake.id);
        const newValue = cakeList.slice(0, filter);
        setCakeList(newValue);
    }
    
    const addEventAction = (event) => {
        setEventList((prev) => [...prev, event])
    }

    const removeEventAction = (event) => {
        const filter = eventList.findIndex(data => data.id !== event.id);
        const newValue = eventList.slice(0, filter);
        setEventList(newValue);
    }

    const setAuthAction = (name, token, id) =>{
        setName(name);
        setToken(token);
        setId(id);
    }

    const providerValue = useMemo(() => ({
        name,
        email,
        token,
        id,
        cakeList,
        eventList,
        addCakeAction,
        removeCakeAction,
        addEventAction,
        removeEventAction,
        setAuthAction,
    }), [name, email, token, id, cakeList, eventList])

    return (
        <AppProviderContext.Provider value={providerValue}>
            {children}
        </AppProviderContext.Provider>
    )
}

export { AppProviderContext, AppProvider };
