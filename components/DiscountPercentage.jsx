const DiscountPercentage = ({ price, discount }) => (
  <div className="bg-red-500 rounded-full text-white px-1.5 shrink-0 flex flex-row-reverse gap-x-1 font-bold leading-tight items-center">
    {Number(Math.round(((price - (price - discount)) / price) * 100)).toLocaleString("fa-IR")}
    <span className="mt-0.5">%</span>
  </div>
);

export default DiscountPercentage;
