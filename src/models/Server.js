const express = require('express');
const cors    = require('cors');

class Server {

  constructor() {
    this.app    = express();
    this.PORT   = process.env.PORT;
    this.paths  = {
      home: '/api/home'
    }

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use( cors() );
    this.app.use( express.json() );
  }

  routes() {
    this.app.use( this.paths.home, require('./../routes/home.route') );
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on port: ${this.PORT}`);
      console.log(`http://localhost:${this.PORT}`);
    });
  }

}


module.exports = Server;