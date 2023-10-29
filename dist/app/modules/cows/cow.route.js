'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CowRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = __importDefault(
  require('../../middlewares/validateRequest'),
);
const cow_controller_1 = require('./cow.controller');
const cow_validations_1 = require('./cow.validations');
const router = express_1.default.Router();
router.post(
  '/',
  (0, validateRequest_1.default)(
    cow_validations_1.CowValidation.createCowZodSchema,
  ),
  cow_controller_1.CowController.createCow,
);
router.get('/:id', cow_controller_1.CowController.getSingleCow);
router.patch(
  '/:id',
  (0, validateRequest_1.default)(
    cow_validations_1.CowValidation.updateCowZodSchema,
  ),
  cow_controller_1.CowController.updateCows,
);
router.delete('/:id', cow_controller_1.CowController.deleteCow);
router.get('/', cow_controller_1.CowController.getAllCows);
exports.CowRoutes = router;
