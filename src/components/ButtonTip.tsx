type ButtonTipProps = {
  setTipVlaue: (tip: number) => void;
  setCusTomTipValue: (tipCustom: number) => void;
  cusTomTipValue: number;
};
const tipPercentages = [5, 10, 15, 25, 50];
function ButtonTip({ setTipVlaue, setCusTomTipValue, cusTomTipValue }: ButtonTipProps) {
  return (
    <div className="mt-3">
      <span className="text-[13px] text-darkGrayishCyan">Select Tip %</span>
      <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-2">
        {tipPercentages.map((tip, index) => {
          return (
            <button
              key={index}
              type="button"
              className="text-center rounded-[5px] py-2 bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-black focus:bg-strongCyan focus:text-black"
              onClick={() => setTipVlaue(tip)}
            >
              <span>{tip}%</span>
            </button>
          );
        })}
        <input
          type="text"
          dir="rtl"
          className="bg-veryLightGrayishCyan h-[40px] rounded-[5px] p-3 focus:outline-none focus:ring-2 ring-strongCyan"
          placeholder="Custom"
          onChange={(e) => setCusTomTipValue(Number(e.target.value))}
          value={cusTomTipValue}
        />
      </div>
    </div>
  );
}
export default ButtonTip;
