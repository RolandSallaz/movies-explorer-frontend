import { regaularMail, regularName } from "./Regex";

class Validation {
    validateMail(e) {
        return regaularMail.test(e.target.value) ?
            e.target.setCustomValidity('') :
            e.target.setCustomValidity('введите корректный email');
    }
    validateName(e) {
        return regularName.test(e.target.value) ?
            e.target.setCustomValidity('') :
            e.target.setCustomValidity('Имя может содержать только кирилицу,латиницу проблел и дефис');
    }
}
const validation = new Validation();
export default validation;
