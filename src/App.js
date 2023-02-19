
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/formulario';
import Rodape from './componentes/Rodape';
import anime from './componentes/anime';
import Anime from './componentes/anime';


function App() {

  const animes = [
    {
      nome: 'Bleach',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Naruto',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'FMAB',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Demon Slayer',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Attack on Titan',
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
      <Formulario animes={animes.map(anime => anime.nome)} aoCardCriado={card => aoCardAdcionado(card)} />

      {animes.map(anime => <Anime 
       key={anime.nome}
       nome={anime.nome}
       corPrimaria={anime.corPrimaria}
       corSecundaria={anime.corSecundaria}
       cards={cards.filter(card => card.anime == anime.nome)}/>)}
      <Rodape/>
    </div>
  );
}

export default App;
