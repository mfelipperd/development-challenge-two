import { IAdmin } from '../../controller/admins/Create';
import { AdminsModel } from '../../model';

export const create = async (data: IAdmin) => {
    const admin = await AdminsModel.create(data); 
    return admin;
};