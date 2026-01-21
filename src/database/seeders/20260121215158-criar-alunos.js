'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('alunos', [
      {
        nome_completo: 'Luiz Otávio',
        email: 'luiz@gmail.com',
        idade: 25,
        peso: 80.5,
        altura: 1.80,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome_completo: 'Maria Oliveira',
        email: 'maria@gmail.com',
        idade: 22,
        peso: 60.2,
        altura: 1.65,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome_completo: 'João Silva',
        email: 'joao@gmail.com',
        idade: 19,
        peso: 75.0,
        altura: 1.75,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome_completo: 'Ana Costa',
        email: 'ana@gmail.com',
        idade: 28,
        peso: 55.4,
        altura: 1.60,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});

    await queryInterface.bulkInsert('fotos', [
      {
        originalname: 'perfil1.jpg',
        filename: '1769030000000_10001.jpg',
        aluno_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        originalname: 'perfil2.jpg',
        filename: '1769030000000_10002.jpg',
        aluno_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        originalname: 'perfil3.jpg',
        filename: '1769030000000_10003.jpg',
        aluno_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        originalname: 'perfil4.jpg',
        filename: '1769030000000_10004.jpg',
        aluno_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('fotos', null, {});
    await queryInterface.bulkDelete('alunos', null, {});
  },
};
