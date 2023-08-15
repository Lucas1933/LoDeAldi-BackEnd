import typeModel from "../model/typeModel.js";
export default class TypeRepository {
  async createType(type) {
    const createdType = await typeModel.create({ type });
    return createdType;
  }

  async deleteType(type) {
    const deletedType = await typeModel.deleteOne({ type });
    return deletedType;
  }

  async getTypes() {
    const types = await typeModel.find().lean();
    return types;
  }
}
