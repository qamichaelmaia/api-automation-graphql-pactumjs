const pactum = require('pactum');

describe('Categorias API', () => {
  it('Deve adicionar uma categoria com sucesso', async () => {
    await pactum.spec()
      .post('/categorias/addCategory')
      .withJson({
        name: 'Nova Categoria',
        description: 'Descrição da nova categoria'
      })
      .expectStatus(200)
      .expectJson({
        success: true,
        message: 'Categoria adicionada com sucesso'
      });
  });

  it('Deve editar uma categoria com sucesso', async () => {
    await pactum.spec()
      .put('/categorias/editCategory')
      .withJson({
        id: 'categoriaId',
        name: 'Categoria Editada',
        description: 'Nova descrição da categoria'
      })
      .expectStatus(200)
      .expectJson({
        success: true,
        message: 'Categoria editada com sucesso'
      });
  });

  it('Deve excluir uma categoria com sucesso', async () => {
    await pactum.spec()
      .delete('/categorias/deleteCategory')
      .withQuery({
        id: 'categoriaId'
      })
      .expectStatus(200)
      .expectJson({
        success: true,
        message: 'Categoria excluída com sucesso'
      });
  });
});
