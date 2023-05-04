class HomeController {
  index(req, res) {
    res.json({
      nome: 'Matheus Benediht Caldeira',
      email: 'matheusbenediht@gmail.com',
      idade: '19',
    });
  }
}

export default new HomeController();
