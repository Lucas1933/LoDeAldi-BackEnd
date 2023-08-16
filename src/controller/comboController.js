import ComboService from "../service/comboService.js";
import { CREATED, OK } from "../utils/httpReponses.js";
const comboService = new ComboService();
export default class ComboController {
  async getCombos(req, res) {
    const combos = await comboService.getCombos();
    res.status(OK).send({ status: OK, payload: combos });
  }

  async createCombo(req, res) {
    const combo = req.body;
    const createdCombo = await comboService.createCombo(combo);
    res
      .status(CREATED)
      .send({ status: CREATED, message: "Combo created successfully" });
  }

  async deleteCombo(req, res) {
    const id = req.params.comboId;
    const deletedCombo = await comboService.deleteCombo(id);
    res.status(OK).send({ status: OK, message: "Combo deleted successfully" });
  }
}
