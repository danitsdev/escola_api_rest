import app from './app';

const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`Clique aqui para acessar: http://localhost:${port}`);
});
