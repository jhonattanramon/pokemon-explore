import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { RequestError } from "request";

class StructureError implements AxiosError {
  name: string;
  message: string;
  toJSON: () => object;
  status?: number | undefined;
  isAxiosError: boolean = true;



  constructor(name: string,menssage: string, object: object, status: number | undefined) {
    this.name = name;
    this.message = menssage;
    this.toJSON = () => object
    this.status = status
  }
}

export default function handleRequestError(error: AxiosError) {
  const statusError = error.response?.status;
  if (statusError) {
    if (statusError >= 500 && statusError < 600)
      return new StructureError("Error de Servidor", "Algo deu Errado tente mais tarde.", {}, statusError);
    if (statusError >= 400 && statusError < 500)
      return new StructureError(
        "Error do Lado do Cliente", "Verifique as Informações passadas e tente novamente.", {}, statusError
      );
    if (statusError >= 300 && statusError < 400)
      return new StructureError("Error de Redirecionamento","Redirecionamento...",{}, statusError);
    else {
      return new StructureError(
        "Error Inesperado", "Aconteceu um error inesperado, tente novamente.",{}, statusError
      );
    }
  } else {
    return new StructureError("Error Inesperado", "Aconteceu um error inesperado, tente novamente.",{}, undefined);
  }
}
