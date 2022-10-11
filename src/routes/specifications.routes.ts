import { Router } from 'express';

import { createSpecificaionController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
    return createSpecificaionController.handle(request, response);
});

export { specificationsRoutes };
