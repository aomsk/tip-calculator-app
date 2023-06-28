type InputNumPeopleProps = {
  setNumberPeople: (numberPeople: number) => void;
  numberPeople: number;
};

function InputNumPeople({ setNumberPeople, numberPeople }: InputNumPeopleProps) {
  return (
    <div className="flex flex-col mt-6">
      <label className="relative">
        <span className="text-[13px] text-darkGrayishCyan">Number of People</span>
        <div className="relative">
          <img
            src="../static/images/icon-person.svg"
            alt="logo"
            width={10}
            className="absolute top-[18px] left-[15px]"
          />
        </div>
        <input
          type="number"
          placeholder="2"
          min={2}
          onChange={(e) => setNumberPeople(Number(e.target.value))}
          value={numberPeople === 2 ? "" : numberPeople}
          className={
            numberPeople === 0
              ? "text-right bg-veryLightGrayishCyan w-full h-[35px] rounded-[5px] p-3 mt-2 text-pink-600 border-2 border-solid border-pink-600 focus:outline-none focus:ring-1 ring-pink-600 text-[18px]"
              : "text-right bg-veryLightGrayishCyan w-full h-[35px] rounded-[5px] p-3 mt-2 border-0 focus:outline-none focus:ring-2 ring-strongCyan text-[18px]"
          }
        />
        <span
          className={
            numberPeople === 0
              ? "text-pink-600 text-[11px] absolute top-[6px] left-[200px]"
              : "hidden"
          }
        >
          Can't be zero
        </span>
      </label>
    </div>
  );
}
export default InputNumPeople;
