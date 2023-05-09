import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button sx={{m: 2}} variant="contained" onClick={() => loginWithRedirect()}>Log In</Button>;
};
