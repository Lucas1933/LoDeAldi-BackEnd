import typeModel from "../model/typeModel.js";
export default class TypeRepository {
  async createType(type) {
    const createdType = await typeModel.create({ type });
    return createdType;
  }

  async deleteType(id) {
    const deletedType = await typeModel.findByIdAndDelete(id);
    return deletedType;
  }

  async updateType(id, type) {
    const updatedType = await typeModel.findByIdAndUpdate(
      id,
      { type },
      {
        new: true,
      }
    );

    return updatedType;
  }

  async getTypes() {
    const types = await typeModel.find().lean();
    return types;
  }

  async typeExists(type) {
    const types = await typeModel.exists({ type });
    return types;
  }
  async getTypeById(id) {
    const type = await typeModel.findById(id);
    return type;
  }
}
