interface dataUser{
    name: string,
    email: string,
}

interface TypeDataSignUp {
    name: string;
    email: string;
    password: string;
  }
  
  interface TypeDataSignIn {
    password: string;
    email: string;
  }


interface valuesPromiseResolve<T>{
    status: number
    message: string,
    data: T
}

interface valuesPromiseReject{
    status: number 
    message: string
}

type PromiseReject = Promise<never>

type PromiseResolve = Promise<unknown> 

type responseRequest = responseSucceesRequest | responseFailResquest