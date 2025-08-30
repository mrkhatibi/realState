import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"

function AddDatePicker({ date, setDate }) {

  return (
    <div>
      <DatePicker
        headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]} 

       animations={[
        opacity(),
        transition({
          from: 40,
          transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
        }),
      ]} 
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={date}
        onChange={(e)=>setDate(new Date(e))}
      />
    </div>
  );
}

export default AddDatePicker;
