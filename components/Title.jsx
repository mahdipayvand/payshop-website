const Title = ({ children, className }) => (
  <div className="flex flex-col gap-y-2 h-14 justify-center">
    <h2 className={`text-lg ${className}`}>{children}</h2>
    <div className="w-20 h-0.5 bg-violet-500"></div>
  </div>
);

export default Title;
