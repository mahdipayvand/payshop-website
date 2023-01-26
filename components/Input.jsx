const Input = ({ className, ...otherProps }) => (
  <input className={`bg-gray-100 h-14 px-6 rounded-full ${className}`} {...otherProps} />
);

export default Input;
