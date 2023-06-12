import { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import { FileCopyOutlined as FileCopyOutlinedIcon } from "@mui/icons-material";
import ClipboardJS from "clipboard";

export const Clipboard = () => {
  const textRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const clipboard = new ClipboardJS(textRef.current);

    clipboard.on("success", (e) => {
      setIsCopied(true);
      e.clearSelection();
    });

    clipboard.on("error", (e) => {
      console.error("Nusxa olishda xatolik:", e.action);
    });
  };

  return (
    <div>
      <TextField inputRef={textRef} defaultValue="Matn" variant="outlined" />
      <Button
        onClick={handleCopy}
        variant="contained"
        startIcon={<FileCopyOutlinedIcon />}
      >
        {isCopied ? "Nusxa olindi" : "Nusxa olish"}
      </Button>
    </div>
  );
};
