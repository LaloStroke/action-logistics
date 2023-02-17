import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

type TPropsButton = {
  onClick?: (event: React.SyntheticEvent) => void;
  outlined?: boolean;
  children?: React.ReactNode;
  href?: string;
  refresh?: boolean;
  type?: TButtons;
};

const Button: React.FC<TPropsButton> = ({
  href,
  onClick,
  children,
  refresh,
  type
}): JSX.Element => {
  if (href) {
    return (
      <>
        {refresh && (
          <a className={`button button--${type}`} href={href}>
            <button onClick={onClick}>{children}</button>
          </a>
        )}
        {!refresh && (
          <Link className={`button button--${type}`} to={href}>
            <button onClick={onClick}>{children}</button>
          </Link>
        )}
      </>
    );
  }
  return (
    <button className={`button button--${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
