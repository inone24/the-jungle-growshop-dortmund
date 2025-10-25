import * as React from "react";
import { DayPicker, type DayPickerSingleProps } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CalendarIsland(props: DayPickerSingleProps) {
  return <DayPicker showOutsideDays {...props} />;
}
