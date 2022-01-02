import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Background, Container, Input, Button, Img, ImgContainer, Text } from './styles';
import Modal from 'react-modal';
import Infos from '../Infos';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#d5e1df',

    },
};


export default function MainPage() {
    const [user, setUser] = useState({});
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleSubmit() {
        setSearch(input)
    }

    function handleChange(ev) {
        setInput(ev.target.value)
    }



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        api.get(`${search}`).then(({ data }) => {
            setUser(data)
        })
    }, [search]);

    return (
        <Background>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <Infos props={user} />
                <Button onClick={closeModal}>Fechar Perfil</Button>

            </Modal>
            <Container>
                <div>
                    <Input type="text" value={input} onChange={handleChange} />

                    <Button onClick={handleSubmit} > Pesquisar usuário</Button>
                </div>
                <ImgContainer>
                    <Img onClick={openModal} src={user.avatar_url} />
                </ImgContainer>
                <Text> Nome: {user.name}</Text>
                <Text> Login: {user.login}</Text>
                <Text> Localização: {user.location}</Text>

            </Container>
        </Background>
    )
}
