
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('haggles').del()
    .then(function () {
      // Inserts seed entries
      return knex('haggles').insert([
        {seller_id: 1, buyer_id: 2, haggle_price: 1, item_id: 1, status_id: 1},
        {seller_id: 3, buyer_id: 1, haggle_price: 24, item_id: 2, status_id: 1},
        {seller_id: 2, buyer_id: 3, haggle_price: 2, item_id: 4, status_id: 1},
      ]);
    });
};
