import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError, object, string } from 'yup';

type TProperty = 'body' | 'header' | 'params' | 'query';

type TAllSchemas = Record<TProperty, Schema<any>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (schemas) => async (req, res, next) => {

  const errorResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {

    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });    
    } catch (error) {
      const yupError = error as ValidationError;
      const ValidationErrors: Record<string, string> = {};
  
      yupError.inner.forEach(error => {
          if(!error.path) return;
          ValidationErrors[error.path] = error.message
      });
  
      errorResult[key] = ValidationErrors;
    }
  });

  if (Object.entries(errorResult).length === 0) {
    return next();
  
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({error: errorResult});
  }

};
