import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campo-texto/campo-texto'
import ListaSuspensa from '../lista-suspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [anime, setanime] = useState('')

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
        <section className='formulario'>
            <form onSubmit={Save}>
                <h2>Preencha os dados para criar o card de personagem</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Função" placeholder="Digite sua função"  valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço de sua imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa  label="Anime"  itens = {props.animes} valor={anime} aoAlterado={valor => setanime(valor)}/>
                 <Botao> Criar Card</Botao>
            </form>


        </section>
    )
}

export default Formulario