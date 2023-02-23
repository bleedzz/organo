import Card from '../Card'
import './anime.css'
import hexToRgba from 'hex-to-rgba';

const Anime = (props) => {

    const css = { backgroundColor: hexToRgba(props.cor, 0.6), backgroundImage: 'url(/imagens/fundo.png)' }
    const border = { border: props.corPrimaria }
    

    return (


        props.cards.length > 0 && <section className='anime' style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} type='color' value={props.cor} className="input-cor"/>
            <h3 style={border}>{props.nome}</h3>
           
            <div className='cards'>
                 {props.cards.map(card => {
                 return <Card  key={card.nome} favorito={card.favorito} fav={props.aoFavoritar} corDeFundo={props.cor} id={card.id} nome={card.nome} cargo={card.cargo} imagem={card.imagem} aoDeletar={props.aoDeletar} />})}
            </div>
        </section>
    )
}

export default Anime