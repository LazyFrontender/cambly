import { Button, FormControl, FormLabel, FormHelperText } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastifyComp = () => {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Button variant="contained" color="success" onClick={notify}>Notify!</Button>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <FormControl>
          <FormLabel></FormLabel>
          
          <FormHelperText></FormHelperText>
        </FormControl>
    </div>
  );
};
