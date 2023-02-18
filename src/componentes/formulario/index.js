import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campo-texto/campo-texto'
import ListaSuspensa from '../lista-suspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [role, setRole] = useState('')

    const Save = (event) => {
        event.preventDefault()
        props.aoCardCriado({
            nome,
            cargo,
            imagem,
            role
        }) 

        setNome('')
        setCargo('')
        setImagem('')
        setRole('')
    }



    return (
        <section className='formulario'>
            <form onSubmit={Save}>
                <h2>Preencha os dados para criar seu card</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo"  valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço de sua imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa  label="Role"  itens = {props.roles} valor={role} aoAlterado={valor => setRole(valor)}/>
                 <Botao> Criar Card</Botao>
            </form>


        </section>
    )
}

export default Formulario