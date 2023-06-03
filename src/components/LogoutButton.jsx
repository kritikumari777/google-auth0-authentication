import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const hendleLogout = () =>{
    
    logout({ returnTo: window.location.origin })
    alert("You Log Out Sucessfully")

  }

  return (
    <div>
      <button className="but" onClick={hendleLogout}>
        Log out
      </button>
    </div>
  );
};

export default LogoutButton;
