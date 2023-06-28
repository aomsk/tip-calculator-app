import { useState, useEffect } from "react";
import "./App.css";
import InputBill from "./components/InputBill";
import ButtonTip from "./components/ButtonTip";
import InputNumPeople from "./components/InputNumPeople";
import ShowResult from "./components/ShowResult";

function App() {
  const [billValue, setBillVlaue] = useState<number>(0);
  const [tipValue, setTipVlaue] = useState<number>(0);
  const [cusTomTipValue, setCusTomTipValue] = useState<number>(0);
  const [numberPeople, setNumberPeople] = useState<number>(2);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let totalTip: number;

    if (cusTomTipValue !== 0 && tipValue === 0) {
      totalTip = billValue * (cusTomTipValue / 100);
    } else {
      totalTip = billValue * (tipValue / 100);
    }

    const tipAmountPerson = totalTip / numberPeople;
    const totoalAmountPerson = (billValue + totalTip) / numberPeople;
    if (numberPeople !== 0) {
      setTipAmount(tipAmountPerson);
      setTotal(totoalAmountPerson);
    }
  }, [billValue, cusTomTipValue, tipValue, numberPeople]);

  return (
    <div className="bg-lightGrayishCyan flex flex-col justify-end md:justify-center xl:justify-center items-center w-screen h-screen">
      <div className="bg-red-500 w-[350px] flex justify-center relative">
        <img
          src="../static/images/logo.svg"
          alt="logo"
          className="absolute top-[-90px] xl:top-[-120px]"
        />
      </div>
      <div className="w-[350px] h-[600px] mb-4 md:w-[650px] md:h-[700px] xl:w-[700px] xl:h-[380px] bg-white rounded-[20px] p-[25px] grid grid-cols-1 xl:grid-cols-2 gap-4 drop-shadow-xl">
        <div className="flex flex-col justify-between px-3 py-5">
          <InputBill setBillVlaue={setBillVlaue} billValue={billValue} />
          <ButtonTip
            setTipVlaue={setTipVlaue}
            setCusTomTipValue={setCusTomTipValue}
            cusTomTipValue={cusTomTipValue}
          />
          <InputNumPeople setNumberPeople={setNumberPeople} numberPeople={numberPeople} />
        </div>
        <ShowResult
          setBillVlaue={setBillVlaue}
          setTipVlaue={setTipVlaue}
          setCusTomTipValue={setCusTomTipValue}
          setNumberPeople={setNumberPeople}
          setTipAmount={setTipAmount}
          setTotal={setTotal}
          tipAmount={tipAmount}
          total={total}
          billValue={billValue}
        />
      </div>
      {/* <span className="mt-2">Challenge by Frontend Mentor. Coded by AOMSK😊.</span> */}
    </div>
  );
}

export default App;
