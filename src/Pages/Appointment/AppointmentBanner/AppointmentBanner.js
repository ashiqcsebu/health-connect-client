import React from "react";
import chair from "../../../assets/images/banner.webp";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const today = new Date();
  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(today.getDate() + 10); // Two weeks from today

  const isDateDisabled = maxSelectableDate;

  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-xl"
          />
          <div className="mr-6 sm:w-full">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
               hidden ={{ before: today }}
            disabled= {{ after: isDateDisabled }}
              //hidden ={{ after: isDateDisabled }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;








// import React from "react";
// import chair from "../../../assets/images/banner.webp";
// import { DayPicker } from "react-day-picker";

// const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
//   const today = new Date();
//   const maxSelectableDate = new Date();
//   maxSelectableDate.setDate(today.getDate() + 14); // Two weeks from today

//   const isDateDisabled = { after: maxSelectableDate }; // Use the correct object format

//   const isDateSelectable = (date) => {
//     return date <= maxSelectableDate && date >= today;
//   };

//   return (
//     <header className="my-6">
//       <div className="hero">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <img
//             src={chair}
//             alt="dentist chair"
//             className="max-w-sm rounded-lg shadow-xl"
//           />
//           <div className="mr-6 sm:w-full">
//             <DayPicker
//               mode="single"
//               selected={selectedDate}
//               onSelect={setSelectedDate}
//               disabled={isDateSelectable}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default AppointmentBanner;

