import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function MainPage() {
    const [user, setUser] = useState({});
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("")

    function handleSubmit() {
        setSearch(input)
    }

    function handleChange(ev) {
        setInput(ev.target.value)
    }

    useEffect(() => {
        api.get(`${search}`).then(({ data }) => {
            setUser(data)
        })
    }, [search]);

    return (
        <div>


            Nome:
            <input type="text" value={input} onChange={handleChange} />

            <button width="120" height="90" onClick={handleSubmit} />

            <img src={user.avatar_url} />
            {user.name}
            {user.login}
            {user.location}
        </div>
    )
}
