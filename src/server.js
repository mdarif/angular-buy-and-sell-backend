import Hapi from '@hapi/hapi';
import routes from './routes';

const start = async () => {
  /**
   * Creating a server
   */
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
  });

  /**
   * Registering routes
   */
  routes.forEach((route) => server.route(route));

  /*   server.route({
    method: 'POST',
    path: '/hello',
    handler: (req, h) => {
      // const payload = req.payload;
      const { payload } = req;
      const { name } = payload;
      return `Hello ${name}!`;
    },
  }); */

  /**
   * Starting the server
   */
  await server.start();
  console.log(`Server is listening on: ${server.info.uri}`);
};

/**
 * Handling unhandled rejections
 */
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();
