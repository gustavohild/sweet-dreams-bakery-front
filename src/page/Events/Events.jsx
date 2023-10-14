import React, { useContext } from 'react';
import styles from "./Events.module.css"
import EventsCard from './Ui/EventsCard/EventsCard';
import useEventsApi from './Api/UseEventsApi';

export default function Events() {

    const { list } = useEventsApi();
    const { data, isLoading } = list()

    return (
        <div className={styles.container}>
            <div className={styles.content}>
            {
                    data && data.map((data, index) => {
                        return (
                            <EventsCard event={data} key={index}/>
                        )
                    })
                }
            </div>

        </div>
    )
}