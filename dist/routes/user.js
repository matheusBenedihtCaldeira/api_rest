"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _User = require('../controllers/User'); var _User2 = _interopRequireDefault(_User);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();
// Falha de segurança
router.get('/', _User2.default.index);
router.get('/:id', _User2.default.show);
router.post('/', _User2.default.create);
router.put('/:id', _User2.default.update);
router.delete('/:id', _loginRequired2.default, _User2.default.delete);
exports. default = router;
