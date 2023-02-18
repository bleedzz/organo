import Card from '../Card'
import './role.css'

const Role = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const border = { borderColor: props.corPrimaria }

    return (


        props.cards.length > 0 && <section className='role' style={css}>
            <h3 style={border}>{props.nome}</h3>
            <div className='cards'>
                 {props.cards.map(card => <Card key={card.nome} corDeFundo={props.corPrimaria} nome={card.nome} cargo={card.cargo} imagem={card.imagem} />)}
            </div>
        </section>
    )
}

export default Role