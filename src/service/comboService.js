import ComboRepository from "../dao/repository/comboRepository.js";
const comboRepository = new ComboRepository();
export default class ComboService {
  async getCombos() {
    const combos = await comboRepository.getCombos();
    return combos;
  }

  async createCombo(combo) {
    const createdCombo = await comboRepository.createCombo(combo);
    return createdCombo;
  }

  async deleteCombo(id) {
    const deletedCombo = await comboRepository.deleteCombo(id);
    return deletedCombo;
  }
}
