import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/BadgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form group mb-3">
          <label>Filter badges</label>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <h3>No badges were found.</h3>
        <Link classNme="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form group mb-3">
        <label>Filter badges</label>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          className="form-control"
        />
      </div>
      <ul className="list-unstyled BadgesList">
        {filteredBadges.map((badge) => {
          return (
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
              /* target="_blank" */
            >
              <li key={badge.id} className="BadgesListItem">
                <Gravatar
                  className="BadgesListItem__avatar"
                  email={badge.email}
                />
                <div>
                  <div>
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                  </div>
                  <div className="Twitter__name">
                    <span className="Twitter__logo"></span>@{badge.twitter}
                  </div>
                  <div>{badge.jobTitle}</div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
