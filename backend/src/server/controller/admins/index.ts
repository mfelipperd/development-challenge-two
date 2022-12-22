import * as create from './Create';
import * as getById from './GetById';
import * as updateAdmin from './UpdateAdmin';


export const AdminsController = {
    ...create,
    ...getById,
    ...updateAdmin,
    
};