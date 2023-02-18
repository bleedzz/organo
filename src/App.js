
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/formulario';
import Rodape from './componentes/Rodape';
import Role from './componentes/Role';


function App() {

  const roles = [
    {
      nome: 'Top',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Jungler',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Mid',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Adc',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Sup',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }


  ]

  const [cards, setCards] = useState([])

  const aoCardAdcionado = (card) => {
    console.log(card)
    setCards([...cards, card])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario roles={roles.map(role => role.nome)} aoCardCriado={card => aoCardAdcionado(card)} />

      {roles.map(role => <Role
        key={role.nome}
        nome={role.nome}
        corPrimaria={role.corPrimaria}
        corSecundaria={role.corSecundaria}
        cards={cards.filter(card => card.role == role.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
