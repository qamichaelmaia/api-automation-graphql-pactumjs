const { spec, request } = require('pactum');
const { eachLike, like } = require('pactum-matchers');

request.setBaseUrl('http://lojaebac.ebaconline.art.br')

let token;

beforeEach(async () => {
  token = await spec()
  .post('/public/authUser')
  .withJson({
          "email": "admin@admin.com",
          "password": "admin123"
  })
  .returns('data.token')
});

it('API - Listagem de usuários', async () => {
  await spec()
    .get('/api/getUsers')
    .withHeaders({ "Authorization": token})
    .expectStatus(200)
    .expectJsonMatch({
          users: eachLike({
              "_id": like("6601b8404cd5a2e84942488f"),
              email: like("michaelqa@hotmail.com"),
              profile: {
                  firstName: like("Michael")
              }
          })
        }
    )
});
