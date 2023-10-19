import React, { ReactNode } from "react";
import { routerRegister, routerSignIn } from "../api/userRouters";
import { router } from "expo-router";

interface typeUserContextProvider {
  children: ReactNode;
}
interface TypeUser {
  name: string;
  email: string;
}



interface TypeUserContext extends TypeUser {
  isAuthentcated: boolean;
}

interface TypeContext extends TypeUserContext {
  signIn: ({ email, password }: TypeDataSignIn) => Promise<unknown> ;
  signOut: () => void;
  signUp: ({ email, name, password }: TypeDataSignUp) => Promise<unknown>;
  entryGuest: () => void
}

export const UserContext = React.createContext({} as TypeContext);

const UserContextProvider: React.FC<typeUserContextProvider> = ({
  children,
}) => {
  function updateUserContext({email,isAuthentcated,name}: TypeUserContext) {
    setStateUserContext({
      isAuthentcated,
      email,
      name
    });
  }

  async function signUp({ email, name, password }: TypeDataSignUp) {
      return await routerRegister({
      email,
      name,
      password,
    })
  }

  async function signIn({ email, password }: TypeDataSignIn) {
      await routerSignIn({email,password}).then( (res) =>{
        const value = res as valuesPromiseResolve<dataUser>
        console.log(value);
        
           updateUserContext({
            email: value.data.email ,
            name: value.data.name,
            isAuthentcated: true, 
          })
      }).catch( err =>{
        console.log("err",err)
        })
  }

  function signOut() {
    updateUserContext({
      isAuthentcated: false,
      email: "",
      name: "",
    });
  }

  function entryGuest(){
    updateUserContext({
      isAuthentcated: true,
      email: "",
      name: ""
    })
  }

  const [stateUserContext, setStateUserContext] =
    React.useState<TypeUserContext>({
      isAuthentcated: false,
      email: "",
      name: "",
    });
  return (
    <UserContext.Provider
      value={{ ...stateUserContext, signIn, signOut, signUp, entryGuest }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
