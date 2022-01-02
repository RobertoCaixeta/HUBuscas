import React, { useEffect, useState } from 'react'
import { Text, ImgContainer, Img, Repo, RepoContainer, Container, InfoContainer } from './styles'
import api from '../../services/api'


function ConverterData(dataInput){
    var data = new Date(dataInput);
    var dataFormatada = data.toLocaleDateString('pt-BR');
    return dataFormatada
}
export default function Infos({ props }) {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        api.get(`${props.login}/repos`).then(({ data }) => {
            setRepos(data)
        })
    }, []);

    return (
        <Container>
            <InfoContainer>
                <ImgContainer>
                    <Img src={props.avatar_url} />
                </ImgContainer>
                <Text>Nome: {props.name}</Text>
                <Text>Login: {props.login}</Text>
                <Text>Localização: {props.location}</Text>
                <Text>Id: {props.id}</Text>
                <Text>Seguidores: {props.followers}</Text>
                <Text>Repositórios Públicos: {props.public_repos}</Text>
            </InfoContainer>

            <RepoContainer>
                {repos.map(repo => (
                    <Repo key={repo?.id} onClick={() => window.location.href = repo?.html_url}>
                        <Text>Nome: {repo?.name}</Text>
                        <Text>Linguagem: {repo?.language}</Text>
                        <Text>Descrição: {repo?.description}</Text>
                        <Text>Criação: {ConverterData(repo?.created_at)}</Text>
                        <Text>Último push: {ConverterData(repo?.pushed_at)}</Text>
                    </Repo>
                ))}
            </RepoContainer>
        </Container>
    )
}
