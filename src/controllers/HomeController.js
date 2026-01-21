class HomeController {
  async index(req, res) {
    res.json({
      name: 'Escola API',
      version: '1.0.0',
      description: 'API REST para gerenciamento de alunos, usuários e fotos.',
      documentation: 'Consulte o README.md para mais detalhes e exemplos de requisição.',
      endpoints: {
        tokens: {
          store: 'POST /tokens/ - Autenticação de usuário',
        },
        users: {
          index: 'GET /users/ - Lista usuários (Requer Login)',
          show: 'GET /users/:id - Detalhes do usuário',
          store: 'POST /users/ - Cadastro de usuário',
          update: 'PUT/PATCH /users/ - Atualiza perfil (Requer Login)',
          destroy: 'DELETE /users/ - Deleta conta (Requer Login)',
        },
        alunos: {
          index: 'GET /alunos/ - Lista todos os alunos',
          show: 'GET /alunos/:id - Detalhes do aluno',
          store: 'POST /alunos/ - Cadastro de aluno (Requer Login)',
          update: 'PUT/PATCH /alunos/:id - Atualiza aluno (Requer Login)',
          destroy: 'DELETE /alunos/:id - Deleta aluno (Requer Login)',
        },
        fotos: {
          store: 'POST /fotos/ - Upload de foto (Requer Login)',
        },
      },
    });
  }
}

export default new HomeController();
