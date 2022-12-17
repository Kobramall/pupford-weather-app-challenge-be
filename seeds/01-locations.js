/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('locations').truncate()
  await knex('locations').insert([
    { name:'Lehi UT', zipCode: "84043"},
    { name:'Orem UT', zipCode: "84057"},
  ]);
};
