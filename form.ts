// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

interface IForm {
  login: string;
  password: string;
}

type ValidationData = {
  [k in keyof IForm]: { isValid: boolean; errorMsg?: string };
};

const validationData: ValidationData = {
  login: { isValid: false, errorMsg: "At least 3 characters" },
  password: { isValid: true },
};
