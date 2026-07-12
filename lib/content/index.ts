export * from "./types";
export { services, getService } from "./services";
export { brands, getBrand } from "./brands";
export { areas, getArea } from "./areas";
export {
  faqs,
  getFaqsByCategory,
  getFaqsByService,
  getFaqsByBrand,
  getFaqsByArea,
} from "./faqs";
export type { FaqCategory, CategorizedFaq } from "./faqs";
export { trustPoints } from "./trust";
export { reviews } from "./reviews";
export { team } from "./team";
export { gallery } from "./gallery";
export { problems, getProblem, getProblemsByService } from "./problems";
export {
  errorCodes,
  getErrorCode,
  getErrorCodesByBrand,
  getErrorCodesByService,
} from "./errorCodes";
export {
  combos,
  getCombo,
  getCombosByBrand,
  getCombosByArea,
  getCombosByService,
} from "./combos";
