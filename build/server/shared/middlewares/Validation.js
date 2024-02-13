"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const http_status_codes_1 = require("http-status-codes");
const validation = (schemas) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errorResult = {};
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key], { abortEarly: false });
        }
        catch (error) {
            const yupError = error;
            const ValidationErrors = {};
            yupError.inner.forEach(error => {
                if (!error.path)
                    return;
                ValidationErrors[error.path] = error.message;
            });
            errorResult[key] = ValidationErrors;
        }
    });
    if (Object.entries(errorResult).length === 0) {
        return next();
    }
    else {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ error: errorResult });
    }
});
exports.validation = validation;
