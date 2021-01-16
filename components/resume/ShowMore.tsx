import React, { FunctionComponent } from "react";

interface ShowMoreProps {
  onClick: () => void;
  open: boolean;
}

const ShowMore: FunctionComponent<ShowMoreProps> = ({ onClick, open }) => (
  <div className="show-more" onClick={onClick}>
    {open && <i className="icon-up-open show-more-open" />}
    <p>Show {open ? "Less" : "More"}</p>
    {!open && <i className="icon-down-open show-more-closed" />}
  </div>
);

export default ShowMore;
