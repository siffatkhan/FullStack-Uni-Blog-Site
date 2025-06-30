import { Link } from "react-router-dom";

const SubjectCard = ({ title, description, link }) => {
  return (
    <article className="information card">
      <h2 className="title">{title}</h2>
      <p className="info">{description}</p>
      <Link to={link} style={{ textDecoration: "none" }}>
        <button className="button">
          <span>See Papers</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="none"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path
              d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </Link>
    </article>
  );
};

export default SubjectCard;
