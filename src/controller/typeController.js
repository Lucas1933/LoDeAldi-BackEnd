import TypeService from "../service/typeService.js";
import { CREATED, OK } from "../utils/httpReponses.js";
const typeService = new TypeService();
export default class TypeController {
  async createType(req, res) {
    console.log(req.body.type);
    const type = req.body.type;
    const createdType = await typeService.createType(type);
    res.status(CREATED).send({
      status: CREATED,
      message: `Type ${type} created successfully`,
    });
  }
  async deleteType(req, res) {
    const typeId = req.params.typeId;
    const deletedType = await typeService.deleteType(typeId);
    res.status(OK).send({
      status: OK,
      message: `Type ${deletedType.type} deleted successfully`,
    });
  }

  async getTypes(req, res) {
    const types = await typeService.getTypes();
    res.status(OK).send({
      status: OK,
      payload: types,
    });
  }

  async updateType(req, res, next) {
    try {
      const id = req.body._id;
      const type = req.body.type;
      const updatedType = await typeService.updateType(id, type);
      res.status(OK).send({
        status: OK,
        message: "Food updated succesfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
