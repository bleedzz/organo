
import './campo.css'

const CampoTexto = ({label, placeholder, valor, aoAlterado, obrigatorio= false, type = 'text'}) => {
    const placeholderModify = `${placeholder}...`

    //let valor = ''


    const aoDigitado = (event) => {
      aoAlterado(event.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
            type={type}
            value={valor} 
            onChange={aoDigitado} 
            required={obrigatorio} 
            placeholder={placeholderModify}/>
            
        </div>
    )
}


export default CampoTexto