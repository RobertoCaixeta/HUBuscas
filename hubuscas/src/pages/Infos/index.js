import React, { useEffect, useState } from 'react'
import { Text } from './styles'
import api from '../../services/api'

export default function Infos({props}) {
    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     api.get(`${search}`).then(({ data }) => {
    //         setUser(data)
    //     })
    // }, [search]);

    return (
        <div>
            <Text>{props.name}</Text>
            <Text>{props.login}</Text>
            <Text>{props.location}</Text>
            <Text>{props.id}</Text>
            <Text>{props.followers}</Text>
            <Text>{props.public_repos}</Text>

        </div>
    )
}
