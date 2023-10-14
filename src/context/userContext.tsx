import React, { ReactNode } from "react";

interface typeUserContextProvider {
  children: ReactNode;
}

interface TypeUser {
  name: string;
  email: string;
}

interface TypesStateUser {
  isAuthentcated: boolean;
  user: TypeUser;
}

interface TypeContext extends TypesStateUser {
    signIn: () => void,
    signOut: () => void
}

export const UserContext = React.createContext({} as TypeContext);

const UserContextProvider: React.FC<typeUserContextProvider> = ({
  children,
}) => {
  function updateUserContext(state: TypesStateUser) {
    setStateUserContext({
      isAuthentcated: state.isAuthentcated,
      user: {
        email: state.user.email,
        name: state.user.name,
      },
    });
  }

  function signIn() {
    updateUserContext({
      isAuthentcated: true,
      user: {
        email: "",
        name: "",
      },
    });
  }

  function signOut() {
    updateUserContext({
      isAuthentcated: false,
      user: {
        email: "",
        name: "",
      },
    });
  }

  const [stateUserContext, setStateUserContext] =
    React.useState<TypesStateUser>({
      isAuthentcated: false,
      user: { email: "", name: "" },
    });
  return (
    <UserContext.Provider value={{ ...stateUserContext, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
