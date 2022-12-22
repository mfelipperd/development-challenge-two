import * as create from './Create';

import * as getById from './GetById';
import * as updateAdmin from './UpdateAdmin';


export const AdminsService = {
    ...create,
    
    ...getById,
    ...updateAdmin,
};