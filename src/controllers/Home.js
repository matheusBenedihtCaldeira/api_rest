class HomeController {
  async index(req, res) {
    res.send('HOME');
  }
}

export default new HomeController();
