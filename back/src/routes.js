import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import AvailableController from './app/controllers/AvailableController';

import verifyJwt from './app/middlewares/auth';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import AvatarController from './app/controllers/AvatarController';
import OrderController from './app/controllers/OrderController';
import EndOrderController from './app/controllers/EndOrderController';
import DeliverymanEndOrderController from './app/controllers/DeliverymanEndOrderController';
import DeliverymanStartOrderController from './app/controllers/DeliverymanStartOrderController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import FilterController from './app/controllers/FilterController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.put('/users', verifyJwt, UserController.update);

routes.post('/sessions', SessionController.store);
routes.get('/sessions/:deliverymanId', SessionController.show);

routes.get('/providers', verifyJwt, ProviderController.index);

routes.post('/recipients', verifyJwt, RecipientController.store);
routes.put('/recipients/:id', verifyJwt, RecipientController.update);

routes.get('/orders', verifyJwt, OrderController.index);
routes.post('/orders', verifyJwt, OrderController.store);
routes.put('/orders/:orderId', OrderController.update);
routes.delete('/orders/:orderId', verifyJwt, OrderController.destroy);

routes.get('/filter', verifyJwt, FilterController.index);

routes.get('/orders/:deliverymanId/deliveries', OrderController.show);
routes.get('/orders/:deliverymanId/delivered', EndOrderController.show);

routes.put(
  '/endorders/:orderId',
  upload.single('file'),
  DeliverymanEndOrderController.store
);

routes.put('/startorders/:orderId', DeliverymanStartOrderController.update);

routes.get('/deliveries/problem', DeliveryProblemController.index);
routes.get('/deliveries/:deliveryId/problem', DeliveryProblemController.show);
routes.post('/deliveries/problem', DeliveryProblemController.store);
routes.put('/deliveries/:problemId/problem', DeliveryProblemController.update);

routes.get('/deliveryman/', verifyJwt, DeliverymanController.index);
routes.post('/deliveryman/', verifyJwt, DeliverymanController.store);
routes.put('/deliveryman/:id', verifyJwt, DeliverymanController.update);
routes.delete('/deliveryman/:id', verifyJwt, DeliverymanController.destroy);
routes.post(
  '/files/:deliveryId',
  verifyJwt,
  upload.single('file'),
  AvatarController.store
);

routes.get(
  '/providers/:providerId/available',
  verifyJwt,
  AvailableController.index
);

routes.post('/appointments', verifyJwt, AppointmentController.store);
routes.get('/appointments', verifyJwt, AppointmentController.index);
routes.delete('/appointments/:id', verifyJwt, AppointmentController.delete);

routes.get('/schedule', verifyJwt, ScheduleController.index);

routes.get('/notifications', verifyJwt, NotificationController.index);
routes.put('/notifications/:id', verifyJwt, NotificationController.update);

routes.post('/files', verifyJwt, upload.single('file'), FileController.store);

export default routes;
