
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/formulario';
import Rodape from './componentes/Rodape';
import Anime from './componentes/anime';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [animes,setAnimes] = useState([
    {
      id: uuidv4(),
      nome: 'Bleach',
      cor: '#d9f7e9'
    },
    {
      id: uuidv4(),
      nome: 'Naruto',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'FMAB',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Demon Slayer',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'Attack on Titan',
      cor: '#FAE9F5'
    }


  ])

const inicial = [
  {
    id: uuidv4(),
    nome:'Ichigo Kurosaki',
    cargo:'Shinigami Substituto',
    imagem:'https://i.pinimg.com/564x/16/63/7a/16637a790e6fa26409996f13ef4a6a46.jpg',
    anime: animes[0].nome
    
  },
  {
    id: uuidv4(),
    nome:'Rukia Kuchiki',
    cargo:'Capitã da 13° divisão',
    imagem:'https://pbs.twimg.com/media/FZNxU_bUEAAty_W.jpg:large',
    anime: animes[0].nome
  },
  {
    id: uuidv4(),
    nome:'Zaraki Kenpachi',
    cargo:'Capitão da 11°divisão',
    imagem:'https://i.pinimg.com/originals/f9/a7/dd/f9a7dd89d113dd2cb4ce1326bb6096f2.png',
    anime: animes[0].nome
  },
  {
    id: uuidv4(),
    nome:'Naruto Uzumaki',
    cargo:'7° Hokage',
    imagem:'https://i.pinimg.com/736x/86/2c/e2/862ce2907b6220ff9614cff0673a6791.jpg',
    anime: animes[1].nome
  },
  {
    id: uuidv4(),
    nome:'Sasuke Uchiha',
    cargo:'Ninja renegado',
    imagem:'https://i.pinimg.com/originals/85/67/64/8567641a2e7b80c64d4789dc01af0ae0.jpg',
    anime: animes[1].nome
  },
  {
    id: uuidv4(),
    nome:'Sakura Haruno',
    cargo:'Ninja médica da folha',
    imagem:'https://64.media.tumblr.com/a57cc0ee9cd7023b180b27b4698906d6/1b7c52e3cc149509-d0/s400x600/99f4f49b753f5370d3dcf2868809612fd806d5c1.jpg',
    anime: animes[1].nome
  },
  {
    id: uuidv4(),
    nome:'Edward Elric',
    cargo:'Alquimista de aço',
    imagem:'https://i.pinimg.com/474x/2a/59/69/2a5969dbe1df398a6dcb6c1db3502316.jpg',
    anime: animes[2].nome
  },
  {
    id: uuidv4(),
    nome:'Roy Mustang',
    cargo:'Alquimista das chamas e General de Brigada',
    imagem:'https://64.media.tumblr.com/4ffc3c02297204bc63e950babe084c18/15c6298520d7dfaf-f3/s400x600/fa13ff101792a36a8219b7636dbc16802f69ba91.jpg',
    anime:animes[2].nome
  },
  {
    id: uuidv4(),
    nome:'Inveja',
    cargo:'Homunculo',
    imagem:'https://64.media.tumblr.com/7f49e56deb92e8bc600bba6c1b4f3a76/6acdb8f0574b3da2-60/s1280x1920/03f81454aa0d38dc49f1ad7cf6ef07ce9e8fd4c2.jpg',
    anime:animes[2].nome
  }


]



  const [cards, setCards] = useState(inicial)

  const aoCardAdcionado = (card) => {
    console.log(card)
    setCards([...cards, card])
  }

  function deletarCard() {
    console.log('deletando')
  }
function mudarCor(cor, nome) {
  setAnimes(animes.map(anime => {
    if(anime.nome === nome) {
      anime.cor = cor;
    }
    return anime;
  }))
}

  return (
    <div className="App">
      <Banner />
      <Formulario animes={animes.map(anime => anime.nome)} aoCardCriado={card => aoCardAdcionado(card)} />

      {animes.map(anime => <Anime 
      mudarCor={mudarCor}
       key={anime.nome}
       nome={anime.nome}
       corPrimaria={anime.corPrimaria}
       cor={anime.cor}
       cards={cards.filter(card => card.anime === anime.nome)}
       aoDeletar={deletarCard}

       />)}
      
      <Rodape/>
    </div>
  );
}

export default App;
