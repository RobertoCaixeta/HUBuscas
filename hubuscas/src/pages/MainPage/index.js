import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, Input, Button, Img, Text } from './styles'

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
            <Container>
                <div>
                    <Input type="text" value={input} onChange={handleChange} />

                    <Button onClick={handleSubmit} > Pesquisar usuário</Button>
                </div>
                <Img src={user.avatar_url} />
                <Text> Nome: {user.name}</Text>
                <Text> Login: {user.login}</Text>
                <Text> Localidade: {user.location}</Text>

            </Container>
        </div>
    )
}
