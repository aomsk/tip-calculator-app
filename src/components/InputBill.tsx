type InputBillProps = {
  setBillVlaue: (bill: number) => void;
  billValue: number;
};

function InputBill({ setBillVlaue, billValue }: InputBillProps) {
  return (
    <div className="flex flex-col">
      <span className="text-[13px] text-darkGrayishCyan">Bill</span>
      <div className="relative">
        <img
          src="../static/images/icon-dollar.svg"
          alt="logo"
          width={10}
          className="absolute top-[17px] left-[15px]"
        />
      </div>
      <input
        type="number"
        // dir="rtl"
        step="0.01"
        placeholder="0"
        onChange={(e) => setBillVlaue(Number(e.target.value))}
        value={billValue}
        className="text-end bg-veryLightGrayishCyan h-[35px] rounded-[5px] p-3 mt-2 focus:outline-none focus:ring-2 ring-strongCyan text-[18px]"
      />
    </div>
  );
}

export default InputBill;
