import * as React from "react";
import { OTPInput, type SlotProps } from "input-otp";

interface InputOTPProps {
  slots?: number;
  name?: string;
}

function Slot({ char, placeholderChar, hasFakeCaret, isActive }: SlotProps) {
  return (
    <div
      className={`relative flex h-12 w-10 items-center justify-center rounded-md border border-white/20 bg-black/40 text-lg font-semibold text-white shadow-sm transition-all ${
        isActive ? "outline outline-2 outline-white/50" : ""
      }`}
    >
      <span className="pointer-events-none select-none text-white">
        {char ?? placeholderChar ?? ""}
      </span>
      {hasFakeCaret && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="h-6 w-px bg-white animate-caret-blink" />
        </span>
      )}
    </div>
  );
}

export function InputOTPIsland({ slots = 6, name = "otp" }: InputOTPProps) {
  const [value, setValue] = React.useState("");

  return (
    <OTPInput
      value={value}
      onChange={setValue}
      maxLength={slots}
      name={name}
      containerClassName="group relative flex items-center gap-2 has-[:disabled]:opacity-50"
      render={({ slots: otpSlots }) => (
        <>
          {otpSlots.map((slot, index) => (
            <Slot key={index} {...slot} />
          ))}
        </>
      )}
    />
  );
}
