import comboModel from "../model/comboModel.js";
export default class ComboRepository {
  async getCombos() {
    const combos = await comboModel.find().lean();
    return combos;
  }

  async createCombo(combo) {
    const createdCombo = await comboModel.create(combo);
    return createdCombo;
  }

  async deleteCombo(id) {
    const deletedCombo = await comboModel.findByIdAndDelete(id);
    return deletedCombo;
  }
}
