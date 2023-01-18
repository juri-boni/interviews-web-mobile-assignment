import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <div className="button-container">
      <button className="button" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
