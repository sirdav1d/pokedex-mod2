/** @format */

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded());

const pokedex = [
	{
		id: 1,
		name: 'Charmander',
		description:
			'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
		type: 'Fire',
		abilities: 'Blaze',
		image:
			'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/charmander.gif',
	},
	{
		id: 2,
		name: 'Bulbasaur',
		description:
			'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
		type: 'Grass',
		abilities: 'Overgrow',
		image:
			'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/bulbasaur.gif',
	},
	{
		id: 3,
		name: 'Squirtle',
		description:
			'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
		type: 'Water',
		abilities: 'Torrent',
		image:
			'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/squirtle.gif',
	},
	{
		id: 4,
		name: 'Pikachu',
		description:
			'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
		type: 'Electric',
		abilities: 'Static',
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
	const id = +req.params.id;
	pokemon = pokedex.find((pokemon) => pokemon.id === id);
	res.redirect('/');
});


const port = process.env.PORT || 3000;

app.listen(port, () =>
	console.log('Servidor rodando em http://localhost:3000'),
);
