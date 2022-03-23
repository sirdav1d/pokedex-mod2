/** @format */

const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());

const pokedex = [
	{
		id: 1,
		numero: 4,
		altura: '0.6 m',
		peso: '8.5 kg',
		category: 'Lagarto',
		name: 'Charmander',
		description:
			'Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.',
		type: 'Fogo',
		abilities: 'Combustão',
		image:
			'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/charmander.gif',
	},
	{
		id: 2,
		numero: 1,
		altura: '0.7 m',
		peso: '6.9 kg',
		category: 'Semente',
		name: 'Bulbasaur',
		description:
			'Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.',
		type: 'Grama',
		abilities: 'Chicote de Vinha',
		image:
			'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/bulbasaur.gif',
	},
	{
		id: 3,
		numero: 7,
		altura: '0.5 m',
		peso: '9.0 kg',
		category:'Tartaruga',
		name: 'Squirtle',
		description:
			'Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.',
		type: 'Água',
		abilities: 'Jato de água',
		image:
			'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/squirtle.gif',
	},
	{
		id: 4,
		numero: 25,
		altura: '0.4 m',
		peso: '6.0 kg',
		category: 'Rato',
		name: 'Pikachu',
		description:
			'Pikachu que pode gerar eletricidade poderosa tem bolsas nas bochechas que são extra macias e super elásticas.',
		type: 'Elétrico',
		abilities: 'Choque do trovão',
		image:
			'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/pikachu-f.gif',
	},
];

let pokemon = undefined;

app.get('/', (req, res) => {
	res.render('index', { pokedex, pokemon });
});

app.post('/add', (req, res) => {
	pokemon = req.body;
	pokemon.id = pokedex.length + 1;
	pokedex.push(pokemon);
	res.redirect('/');
});

app.get('/detalhes/:id', (req, res) => {
	const id = req.params.id;
	pokemon = pokedex[id-1];
	res.render('detalhes', { pokemon });
});

app.get('/cadastro', (req, res) =>{
	res.render('cadastro')
});


const port = process.env.PORT || 3000;

app.listen(port, () =>
	console.log(`Servidor rodando em ${port}`),
);
