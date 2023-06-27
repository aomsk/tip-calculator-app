type ButtonTipProps = {
  setBillVlaue: (bill: number) => void;
  setTipVlaue: (tip: number) => void;
  setCusTomTipValue: (tipCustom: number) => void;
  setNumberPeople: (numberPeople: number) => void;
  setTipAmount: (tipAmount: number) => void;
  setTotal: (total: number) => void;
  tipAmount: number;
  total: number;
  billValue: number;
};

function ShowResult({
  setBillVlaue,
  setTipVlaue,
  setCusTomTipValue,
  setNumberPeople,
  setTipAmount,
  setTotal,
  tipAmount,
  total,
  billValue,
}: ButtonTipProps) {
  return (
    <div className="bg-veryDarkCyan rounded-[14px] flex flex-col justify-between px-6 py-5 xl:px-7 xl:py-10">
      <div>
        <div className="flex justify-between items-center mb-4 xl:mb-5">
          <div>
            <h2 className="text-[15px] text-lightGrayishCyan">Tip Amount</h2>
            <p className="text-[12px] text-lightGrayishCyan">/ person</p>
          </div>
          <div className="relative">
            <div className="icon dollar-strongCyan absolute top-[6px] left-[-22px]"></div>
            <h2 className="text-3xl text-strongCyan">{tipAmount.toFixed(2)}</h2>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-[16px] text-lightGrayishCyan">Total</h2>
            <p className="text-[12px] text-lightGrayishCyan">/ person</p>
          </div>
          <div className="relative">
            <div className="icon dollar-strongCyan absolute top-[6px] left-[-22px]"></div>
            <h2 className="text-3xl text-strongCyan">{total.toFixed(2)}</h2>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-center rounded-[5px] w-full py-2 bg-strongCyan disabled:opacity-25"
          disabled={billValue === 0 ? true : false}
          onClick={() => {
            setBillVlaue(0);
            setTipVlaue(0);
            setCusTomTipValue(0);
            setNumberPeople(2);
            setTipAmount(0);
            setTotal(0);
          }}
        >
          <span className="uppercase">Reset</span>
        </button>
      </div>
    </div>
  );
}

export default ShowResult;
