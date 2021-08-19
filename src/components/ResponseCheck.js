import React from "react";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import "../styles/styles.css";

const ResponseCheck = ({ id }) => {
  const localObjForId = localStorage.getItem("rev_track_id-" + id);

  let rev_exists = false;
  if (localObjForId !== null) {
    rev_exists = true;
  }
  if (rev_exists) {
    return (
      <>
        <ForumRoundedIcon className="chat-icon" />
      </>
    );
  } else {
    return null;
  }
};

export default ResponseCheck;
