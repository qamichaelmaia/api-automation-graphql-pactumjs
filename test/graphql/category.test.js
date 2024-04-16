const { spec } = require('pactum');

request.setBaseUrl('http://lojaebac.ebaconline.art.br')



describe('Categorias API', () => {
    it.only('add a new category', async () => {
        await spec()
          .post('http://lojaebac.ebaconline.art.br')
          .withGraphQLQuery(`
          mutation Mutation($name: String) {
            addCategory(name: $name) {
              name
            }
          }`, { name: 'Nova Categoria' }) // fornecendo um valor para $name
          .expectStatus(200);
    });

  it('edit a category', async () => {
    await spec()
      .put('/editCategory')
      .withGraphQLQuery({ id: 1, name: 'edited category' })
      .expectStatus(200);
  });

  it('delete a category', async () => {
    await spec()
      .delete('/deleteCategory')
      .withGraphQLQuery({ id: 1 })
      .expectStatus(200);
  });
});
