import * as React from "react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"

function Calendar({
  className,
  classNames,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays
      className={cn("mx-auto w-fit p-3", className)}
      classNames={{
        months: "mx-auto flex flex-col sm:flex-row gap-3",
        month: "space-y-3",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-heading text-slate-900",
        nav: "space-x-1 flex items-center",
        nav_button:
          "h-8 w-8 bg-main text-main-foreground border-2 border-border rounded-base [box-shadow:2px_2px_0_0_#000] hover:opacity-90",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "mx-auto w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "w-9 text-center font-base text-[0.8rem] text-slate-900",
        weekday: "w-9 text-center font-base text-[0.8rem] text-slate-900",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 p-0 text-center text-sm align-middle",
        day: "h-9 w-9 p-0 font-base border-2 border-transparent rounded-base text-slate-900",
        day_button:
          "inline-flex h-9 w-9 items-center justify-center p-0 font-base border-2 border-transparent rounded-base text-slate-900",
        day_selected:
          "bg-main text-main-foreground border-2 border-border [box-shadow:2px_2px_0_0_#000]",
        day_today: "border-2 border-sky-900 bg-[#e7f1ff]",
        day_outside: "text-slate-400",
        day_disabled: "text-slate-300",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  )
}

export { Calendar }
