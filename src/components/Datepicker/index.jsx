import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.scss";
import { useEffect } from "react";

const DatePick = ({ text, action, selectedDate, disable }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("");

  const setDate = (state) => {
    setStartDate(state);
    const month = state.getMonth() + 1;
    action(`${state.getFullYear()}-${month < 10 ? "0" + month : month}-${state.getDate() < 10 ? "0" + state.getDate() : state.getDate()}`);
    if (state) {
      const year = state.getFullYear();
      if (state.getDate() === new Date().getDate() && state.getMonth() === new Date().getMonth() && text === "End Date") {
        setValue("Present");
        action("Present");
      } else {
        setValue(`${month < 10 ? "0" + month : month}/${year}`);
      }
    }
  };
  
  useEffect(() => {
    selectedDate !== "Present" && selectedDate ? setDate(new Date(selectedDate)) : setValue(selectedDate);
  }, []);

  return (
    <DatePicker
      showMonthYearPicker
      showFullMonthYearPicker
      value={value}
      selected={startDate}
      todayButton="Present"
      onChange={setDate}
      customInput={<button className="customBtn">{value ? value : text}</button>}
      disabled={disable}
    />
  );
};

export default DatePick;
