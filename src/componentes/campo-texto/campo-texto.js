
import './campo-texto.css'

const CampoTexto = (props) => {
    const placeholderModify = `${props.placeholder}...`

    //let valor = ''


    const aoDigitado = (event) => {
       props.aoAlterado(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModify}></input>
            
        </div>
    )
}


export default CampoTexto