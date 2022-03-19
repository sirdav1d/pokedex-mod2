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
		name: 'Vaporeon',
		description:
			'When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.',
		type: 'Water',
		abilities: 'Water Absorb',
		image:
			'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/vaporeon.gif',
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

app.post('/update/:id', (req, res) => {
	const id = +req.params.id;
	const newPokemon = req.body;
	pokedex[id-1] = newPokemon;
	pokemon=undefined;
	res.redirect('/');
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
	console.log('Servidor rodando em http://localhost:3000'),
);
