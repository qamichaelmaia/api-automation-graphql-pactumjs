const { request } = require('pactum');

request.setBaseUrl('http://lojaebac.ebaconline.art.br')


describe('Produtos API', () => {
    it('Deve adicionar um produto com sucesso', async () => {
      await pactum.spec()
        .post('/produtos/addProduct')
        .withJson({
          name: 'Funko Pop Sheldon',
          price: 10.99,
          category: 'categoriaId'
        })
        .expectStatus(200)
        .expectJson({
          success: true,
          message: 'Produto adicionado com sucesso'
        });
    });
  
    it('Deve editar um produto com sucesso', async () => {
      await pactum.spec()
        .put('/produtos/editProduct')
        .withJson({
          id: 'produtoId',
          name: 'Produto Editado',
          price: 15.99,
          category: 'novaCategoriaId'
        })
        .expectStatus(200)
        .expectJson({
          success: true,
          message: 'Produto editado com sucesso'
        });
    });
  
    it('Deve excluir um produto com sucesso', async () => {
      await pactum.spec()
        .delete('/produtos/deleteProduct')
        .withQuery({
          id: 'produtoId'
        })
        .expectStatus(200)
        .expectJson({
          success: true,
          message: 'Produto excluído com sucesso'
        });
    });
  });
  