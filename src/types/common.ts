import { AxiosError } from "axios"
type ResponseError = AxiosError<{ 
    statusCode: string;
    message: string;
    error: string;
}>;


type Response<T = ResponseError> = {
  email(arg0: string, email: any): unknown;
  statusCode: number;
  message: string;
  result: T;
};


export type{
    Response,
    ResponseError,
}