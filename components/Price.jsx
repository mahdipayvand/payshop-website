const Price = ({ children, hideCurrency, className }) => (
  <p className={`font-bold flex items-center gap-x-2 text-gray-600 text-base ${className}`}>
    {Number(children).toLocaleString("fa-IR")}
    {!hideCurrency && <span className="font-normal text-xs">تومان</span>}
  </p>
);

export default Price;
