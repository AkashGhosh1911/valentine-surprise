import { Link } from "react-router-dom";

interface FooterProps {
  link: string;
  text: string;
}

const Footer = (props: FooterProps) => {
  return (
    <div className="hero-actions">
      <Link to={props.link} className="btn">
        {props.text}
      </Link>
    </div>
  );
};

export default Footer;
