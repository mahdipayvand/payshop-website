import { forwardRef } from "react";

const Input = forwardRef(({ className, ...otherProps }, ref) => (
  <input ref={ref} className={`bg-gray-100 h-14 px-6 rounded-full ${className}`} {...otherProps} />
));

export default Input;
