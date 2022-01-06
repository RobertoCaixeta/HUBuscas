import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Background, Container, Input, Button, Img, ImgContainer, Text, UserContainer, User } from './styles';
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
    const [historicoIsOpen, setHistoricoIsOpen] = useState(false);
    const [searchedUsers, setSearchedUsers] = useState([]);

    function handleSubmit() {
        setSearch(input)
    }

    function handleChange(ev) {
        setInput(ev.target.value)
    }


    function openModal() {
        setHistoricoIsOpen(false);
        setIsOpen(true);
        
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openHistorico() {
        setHistoricoIsOpen(true);
    }

    function closeHistorico() {
        setHistoricoIsOpen(false);
    }

    useEffect(() => {
        api.get(`${search}`).then(({ data }) => {
            setUser(data)
        })
    }, [search]);

    useEffect(() => {
        setSearchedUsers([...searchedUsers, user])

    }, [user]);

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
                    <Img onClick={openModal} src={user.avatar_url} size={"400px"}/>
                </ImgContainer>
                <Text> Nome: {user.name}</Text>
                <Text> Login: {user.login}</Text>
                <Text> Localização: {user.location}</Text>
                <Button onClick={openHistorico} > Histórico de Pesquisa</Button>
                <Modal
                    isOpen={historicoIsOpen}
                    onRequestClose={closeHistorico}
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <UserContainer>
                        {searchedUsers.map(searchedUser => (
                            <User key={searchedUser?.id}>
                                <Img onClick={openModal} src={searchedUser.avatar_url} size={"100px"}/>
                                <Text >Nome: {searchedUser.name}</Text>
                                <Text >Login: {searchedUser.login}</Text>
                                <Text >Localização: {searchedUser.location}</Text>
                            </User>

                        ))}
                    </UserContainer>


                    <Button onClick={closeHistorico}>Fechar HIstórico</Button>

                </Modal>

            </Container>

        </Background>
    )
}
