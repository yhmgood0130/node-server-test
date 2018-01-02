
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('log').del()
    .then(function () {
      // Inserts seed entries
      return knex('log').insert([
        {id: 1, Name: 'Tiger', AuthKey:"c82f1d476ad043778b70cc151418d240"},
        {id: 2, Name: 'Bear', AuthKey:"d3698a50aa37477584dd40b0c9835cc0"},
        {id: 3, Name: 'Lion', AuthKey:"cb5ce0be306c4807964e3d99452b3219"},
        {id: 4, Name: 'Puma', AuthKey:"ebf34421f7814c9d9ef7e496d71841b3"},
        {id: 5, Name: 'Squirrel', AuthKey:"712942e27e2a4839b5c36530afe91437"}
      ]);
    });
};
