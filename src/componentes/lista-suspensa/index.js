import './Lista-suspensa.css'

const  ListaSuspensa = (props) => {
    return (
        <div className='Lista-suspensa'>
                <label>{props.label}</label>
                <select onChange={event => props.aoAlterado(event.target.value)} value={props.valor}>
                    <option value=''></option>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select> 
        </div>
    )
}

export default ListaSuspensa