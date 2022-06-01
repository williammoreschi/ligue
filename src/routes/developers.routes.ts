import { Router } from 'express';

import { CreateDeveloperController } from '../modules/developers/useCases/createDeveloper/CreateDeveloperController';
import { DeleteDeveloperController } from '../modules/developers/useCases/deleteDeveloper/DeleteDeveloperController';
import { FindByFilterDeveloperController } from '../modules/developers/useCases/findByFilterDeveloper/FindByFilterDeveloperController';
import { FindDeveloperController } from '../modules/developers/useCases/findDeveloper/FindDeveloperController';
import { ListDevelopersController } from '../modules/developers/useCases/listDevelopers/ListDevelopersController';
import { UpdateDeveloperController } from '../modules/developers/useCases/updateDeveloper/UpdateDeveloperController';

const developersRoutes = Router();

const createDeveloperController = new CreateDeveloperController();
const listDevelopersController = new ListDevelopersController();
const findDeveloperController = new FindDeveloperController();
const updateDeveloperController = new UpdateDeveloperController();
const deleteDeveloperController = new DeleteDeveloperController();
const findByFilterDeveloperController = new FindByFilterDeveloperController();

developersRoutes.post('/', createDeveloperController.handle);

developersRoutes.get('/', listDevelopersController.handle);

developersRoutes.get('/filter', findByFilterDeveloperController.handle);

developersRoutes.get('/:id', findDeveloperController.handle);

developersRoutes.put('/:id', updateDeveloperController.handle);

developersRoutes.delete('/:id', deleteDeveloperController.handle);

export { developersRoutes };
