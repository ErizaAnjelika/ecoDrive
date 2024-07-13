import { BankTransfer, DebitCard } from "../../services/data";
export const Bank = () => {
  return (
    <>
      {BankTransfer.map((item) => (
        <div className="border-b text-gray-600 flex items-center gap-2 hover:bg-slate-100 p-2 cursor-pointer">
          <img src={item.image} alt={item.name} className="h-5" />
          <h1 className="text-base font-semibold">{item.name}</h1>
        </div>
      ))}
    </>
  );
};

export const Debit = () => {
  return (
    <>
      {DebitCard.map((item) => (
        <div className="border-b text-gray-600 flex items-center gap-2 hover:bg-slate-100 p-2 cursor-pointer">
          <img src={item.image} alt={item.name} className="h-5" />
          <h1 className="text-base font-semibold">{item.name}</h1>
        </div>
      ))}
    </>
  );
};
