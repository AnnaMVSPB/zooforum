const express = require('express');

const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {
  Animal, User,
} = require('../../db/models');

const AnimalCard = require('../../Components/AnimalCard');

router.post('/', async (req, res) => {
  const { name, url, description } = req.body;
  try {
    if (name && url && description) {
      const animal = await Animal.create({
        name, url, description, userId: req.session.user,
      });
      const animalInclude = await Animal.findOne({
        where: { id: animal.id },
        include: { model: User },
      });
      res.status(201).json({ html: res.renderComponent(AnimalCard, { animal: animalInclude }, { htmlOnly: true }) });
    } else {
      res.status(401).json({ message: 'заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:idAnimal', async (req, res) => {
  try {
    const animalDel = await Animal.destroy({
      where: { id: req.params.idAnimal, userId: req.session.user },
    });
    if (animalDel) {
      res.status(200).json({ message: 'ok' });
    } else {
      res.status(400).json({ message: 'сервер временно не работает', status: 400 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll();
    res.json(animals);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
