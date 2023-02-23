import { useState } from 'react'
import Botao from '../botao'
import Campo from '../campo'
import ListaSuspensa from '../lista-suspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [anime, setanime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const Save = (event) => {
        event.preventDefault()
        props.aoCardCriado({
            nome,
            cargo,
            imagem,
            anime
        }) 

        setNome('')
        setCargo('')
        setImagem('')
        setanime('')
    }



    return (
        <section className="formulario-container" >
            <form className='formulario' onSubmit={Save}>
                <h2>Preencha os dados para criar o card de personagem</h2>
                <Campo obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <Campo obrigatorio={true} label="Função" placeholder="Digite sua função"  valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <Campo label="Imagem" placeholder="Digite o endereço de sua imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa  label="Anime"  itens = {props.animes} valor={anime} aoAlterado={valor => setanime(valor)}/>
                 <Botao> Criar Card</Botao>
            </form>
            <form className='formulario' onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor:corTime})
                setNomeTime('')
                setCorTime('')
            }}>
                <h2>Preencha os dados para adicionar uma série</h2>
                <Campo obrigatorio label="Nome" placeholder="Digite o nome da série" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)}/>
                <Campo obrigatorio type='color' label="Cor" placeholder="Digite a cor da série"  valor={corTime} aoAlterado={valor => setCorTime(valor)}/>
                 <Botao> Adicionar nova série</Botao>
            </form>


        </section>
    )
}

export default Formulario