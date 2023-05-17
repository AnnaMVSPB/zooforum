const express = require('express');

const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {
  Animal, User, Comment, Like,
} = require('../../db/models');
const AnimalsList = require('../../Components/AnimalsList');
const AnimalInfo = require('../../Components/AnimalInfo');

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({
      include: [{
        model: User,
      },
      { model: Like },
      ],
    });
    res.status(200).renderComponent(AnimalsList, { title: 'AnimalList', animals });
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/:idAnimal', async (req, res) => {
  const { idAnimal } = req.params;
  try {
    const animal = await Animal.findOne({
      where: { id: idAnimal },
      include: [{
        model: User,
      },
      { model: Comment },
      ],
    });

    res.status(200).renderComponent(AnimalInfo, { title: 'AnimalInfo', animal });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
