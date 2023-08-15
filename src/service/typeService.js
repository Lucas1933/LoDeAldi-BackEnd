import TypeRepository from "../dao/repository/typeRepository.js";
const typeRepository = new TypeRepository();
export default class TypeService {
  async createType(type) {
    /* validation of type pending */
    const createdType = await typeRepository.createType(type);
    return createdType;
  }

  async deleteType(type) {
    const deletedType = await typeRepository.deleteType(type);
    return deletedType;
  }

  async getTypes() {
    const types = await typeRepository.getTypes();
    return types;
  }
}
