import { useAuth0 } from "@auth0/auth0-react";
import CrudOperation from "./CrudOperation";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loding!!</div>;
  }

  return (
    <div>
     {isAuthenticated ? (
              <div>
                <h1>You Loged in</h1>
                <div>Email id : {user?.email} </div>
                <h3>Now you can see the User CRUD Operation</h3>
                <CrudOperation/>
              </div>
              ): (<h3>You should login, to see the User CRED Operation</h3>) }
    </div>
  );
};

export default UserProfile;
