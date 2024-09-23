import React from "react";
import 'devextreme/dist/css/dx.light.css';
import { Scheduler } from 'devextreme-react/scheduler';


const MyCalendar = () => {
  return (
    <>
      <Scheduler id="scheduler">
            {/* Configuration goes here */}
        </Scheduler>
    </>
  );
};

export default MyCalendar;
