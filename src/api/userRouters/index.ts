import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import API from "../ConectAPIservice";

interface TypePropsSignUp {
  name: string;
  email: string;
  password: string;
}

interface TypePropsSignIn {
  email: string;
  password: string;
}

function rejectPromise(err: valuesPromiseReject){
  return Promise.reject(err)
}

function resolvePromise(values: valuesPromiseResolve<unknown>){
  return Promise.resolve(values)
}

function handleFailRequest(err: AxiosError) {
  if(typeof(err.response?.data) == "string" && typeof(err.status) == "number"){
    return rejectPromise({
      message: err.response?.data,
      status: err.status
    })
  }else{
    return rejectPromise({
      message:"algo deu errad",
      status: 500
    })
  }
  }




function handleSucceedRequest({
  data,
  status,
}: AxiosResponse): PromiseResolve{
 return resolvePromise({
  message: data.message,
  status,
  data
 })}

export async function routerSignIn({ email, password }: TypePropsSignIn) {
  return await API.post("/sign-in", {
    email,
    password,
  })
    .then((res) => handleSucceedRequest(res))
    .catch((err: AxiosError) => handleFailRequest(err));
}

export async function routerRegister({
  email,
  name,
  password,
}: TypePropsSignUp){
  return await API.post("/register", {
      name,
      email,
      password,
    }).then(res => handleSucceedRequest(res)).catch(err => handleFailRequest(err))
  
}
