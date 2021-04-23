import "../App.css";
import { Paper, Snackbar } from "@material-ui/core";

import { useState } from "react";

function Icons({ title, color, link, type }) {
  const [open, setOpen] = useState(false);
  const computedtype = type !== "social" ? "white" : "black";
  const computedLink = title.replace(/ /g, "-").toLowerCase();
  const computedtitle = title.replace("-", " ");
  const computedColor = color.substring(1);
  const imgSrc = `https://img.shields.io/badge/${computedtitle}-${computedColor}?style=${type}&logo=${computedLink}&logoColor=${computedtype}`;
  const copyFeedback = () => {
    const copy = `<img alt="${title}" src="${imgSrc}" />`;
    navigator.clipboard.writeText(copy).then(() => {
      setOpen(true);
    });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Paper className="icons" onClick={copyFeedback} elevation={2}>
        <p
          style={{
            fontSize: "12px",
            marginBottom: "3px"
          }}
        >
          {title.length < 20 ? title : `${title.substring(0, 18)}...`} - {color}
        </p>
        <img alt={link} src={imgSrc} />
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        onClose={handleClose}
        open={open}
        autoHideDuration={2000}
        message={`${title} - Copied to the Clipboard`}
      />
    </div>
  );
}

export default Icons;
