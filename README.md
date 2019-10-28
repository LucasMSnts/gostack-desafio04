# gostack-desafio04

Uma aplicação do zero utilizando **Webpack**, **Babel**, **Webpack Dev Server** e **ReactJS**.

Na aplicação desenvolver uma interface semelhante com a do Facebook utilizando React.

As informações contidas na interface são **estáticas** e não precisam refletir nenhuma API REST ou back-end.

### Componentes

- Header: Responsável por exibir a logo e o link para acessar o perfil;

- PostList: Responsável por armazenar os dados da listagem de post, esses dados devem ficar dentro do state do componente e não em uma variável comum;

- Post: Responsável por exibir os dados do post, esses dados devem vir através de uma propriedade recebida do componente PostList;

- Comment: Responsável por exibir um comentário. Os dados do comentário virão por uma propriedade do componente. Dentro do componente Post você terá um novo ```.map``` para listar os comentários do post;
