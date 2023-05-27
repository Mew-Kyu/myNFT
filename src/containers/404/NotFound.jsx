import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Not = styled.div`
  text-align: center;
  .title {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .message {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .link {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    opacity: 0.5;
    transition: 0.3s;
  }
  .link:hover {
    opacity: 1;
  }
`;

const NotFound = () => {
  return (
    <Not>
      <h1 className="title">404 - Page Not Found</h1>
      <p className="message">The page you are looking for does not exist.</p>
      <Link to="/" className="link">
        Go back to homepage
      </Link>
    </Not>
  );
};

export default NotFound;
