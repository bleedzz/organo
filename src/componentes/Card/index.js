import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import './card.css'


const Card = (props) => {
    console.log()

    function favoritar () {
        props.fav(props.id)
    }

    return (
        <div className='card'>
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => props.aoDeletar(props.id)} />
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4 >{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className='favoritar'>
                        {props.favorito ? <AiFillHeart onClick={favoritar}/> : <AiOutlineHeart onClick={favoritar}/>}
                </div>
            </div>
        </div>
    )
}

export default Card

