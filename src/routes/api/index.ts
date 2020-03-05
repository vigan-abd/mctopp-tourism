import * as express from 'express';
const router = express.Router();
import RouteBuilder = require("simple-express-route-builder");

import MainAPIController from '@controllers/api/MainApiController';
import TestService from '@services/TestService';
import TestRepository from '@repositories/Vendor/Mongo/TestRepository';

const register = () => {
  // CONTROLLERS
  const mainAPIController: MainAPIController = new MainAPIController(
    new TestService(new TestRepository)
  );

  const builder = new RouteBuilder('/api', router);

  builder.use((group, action) => action('GET', mainAPIController.index));

  return router;
};

export default register;