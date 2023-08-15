import TypeService from "../service/typeService.js";
import { CREATED, OK } from "../utils/httpReponses.js";
const typeService = new TypeService();
export default class TypeController {
  async createType(req, res) {
    const type = req.body.type;
    const createdType = await typeService.createType(type);
    res.status(CREATED).send({
      status: CREATED,
      message: `Type ${type} created successfully`,
    });
  }
  async deleteType(req, res) {
    const type = req.body.type;
    const deletedType = await typeService.deleteType(type);
    res.status(OK).send({
      status: OK,
      message: `Type ${type} deleted successfully`,
    });
  }

  async getTypes(req, res) {
    const types = await typeService.getTypes();
    res.status(OK).send({
      status: OK,
      payload: types,
    });
  }
}
