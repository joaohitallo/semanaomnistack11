const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const app = express();


/**
 * GET: Buscar uma informação no back-end
 * POST: Criar um informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  *  tipos de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota apos "?" (filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body:
  * 
  */

  /**
   * Banco de dados 
   * 
   * SQLite
   * 
   * Driver: SELECT * FROM users
   * Query Builder: Table ('users).select('*').where(
   * )
   */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
