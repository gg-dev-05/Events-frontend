import React, { useEffect, useRef, useState } from 'react'
import Card from '../Card/Card'
const axios = require('axios');

export default function Past() {
    //Use useRef Hook

    var past = useRef({})
    var [events, setEvents] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/past')
            .then(({ data }) => {
                // handle success
                past.current = data['events']
                var temp = []
                past.current.forEach(event => {
                    temp.push(
                        <Card details={event} />
                    )
                })

                console.log(temp)
                setEvents(temp)


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                console.log("DONE")
            });

    }, [])


    return (
        <div>
            {events}
        </div>
    )
}
