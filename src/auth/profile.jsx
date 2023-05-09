import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
export const Profile = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{" "}
      </div>
    );
  } else {
    return <Button variant="contained" onClick={loginWithRedirect}>Log in</Button>;
  }
};