/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Фёдор',
        city: 'Верхние низа',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Тося',
        city: 'Тютельки',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
