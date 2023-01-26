const Button = ({ children, className, ...otherProps }) => (
  <button
    className={`bg-violet-500 text-white h-12 rounded-full hover:bg-violet-600 flex items-center gap-x-2 justify-center px-14 ${className}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
