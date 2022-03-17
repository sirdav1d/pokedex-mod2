/** @format */

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const pokedex = [
	{
		id: 1,
		nome: 'Charmander',
		description:
			'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
		type: 'Fire',
		abilities: 'Blaze',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
	},
	{
		id: 2,
		nome: 'Vaporeon',
		description:
			'When Vaporeon’s fins begin to vibrate, it is a sign that rain will come within a few hours.',
		type: 'Water',
		abilities: 'Water Absorb',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
	},
];

app.get('/', (req, res) => {
	res.render('index', { pokedex });
});

app.listen(3000, () =>
	console.log('Servidor rodando em http://localhost:3000'),
);
