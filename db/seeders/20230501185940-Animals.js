/** @type {import('sequelize-cli').Migration} */
const data = require('../animalsArr');

module.exports = {
  async up(queryInterface) {
    const arrStudents = data.map((el) => (
      {
        ...el,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    await queryInterface.bulkInsert('Animals', arrStudents, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Animals', null, {});
  },
};
