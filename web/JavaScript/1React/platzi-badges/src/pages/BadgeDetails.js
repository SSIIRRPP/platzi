import React from "react";
import { Link } from "react-router-dom";

import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

/* function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
} */

function BadgeDetails(props) {
  /* const [count, setCount] = useIncreaseCount(4); */
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="logo-conferencia" />
            </div>
            <div className="col-6">
              <h1 className="BadgeDetails__hero-attendant-name">
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <div>
                {/* <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className="btn btn-primary mr-4"
                >
                  Increase count: {count}{" "}
                </button> */}
                <Link
                  className="btn btn-primary mb-3"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  onClose={props.onCloseModal}
                  isOpen={props.modalIsOpen}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;