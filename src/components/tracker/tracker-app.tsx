import { useEffect, useMemo, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

type Habit = {
  id: string
  name: string
  days: Record<string, boolean>
}

type TrackerState = {
  habits: Habit[]
}

const STORAGE_KEY = "habit-tracker-v1"

const pad2 = (n: number) => String(n).padStart(2, "0")
const toLocalDateKey = (date: Date) =>
  `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`

const todayKey = () => toLocalDateKey(new Date())

const prevDate = (iso: string) => {
  const d = new Date(`${iso}T00:00:00`)
  d.setDate(d.getDate() - 1)
  return toLocalDateKey(d)
}

const isoToDate = (iso: string) => new Date(`${iso}T00:00:00`)

const uid = () => `h_${Math.random().toString(36).slice(2, 10)}`

const load = (): TrackerState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { habits: [] }
    const parsed = JSON.parse(raw) as TrackerState
    if (!parsed || !Array.isArray(parsed.habits)) return { habits: [] }
    return parsed
  } catch {
    return { habits: [] }
  }
}

export function TrackerApp() {
  const [name, setName] = useState("")
  const [state, setState] = useState<TrackerState>({ habits: [] })
  const today = todayKey()

  useEffect(() => {
    setState(load())
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const currentStreak = (habit: Habit) => {
    let streak = 0
    let cursor = today
    while (habit.days?.[cursor]) {
      streak += 1
      cursor = prevDate(cursor)
    }
    return streak
  }

  const completedAllDates = useMemo(() => {
    if (!state.habits.length) return []

    const dateCounts = new Map<string, number>()
    for (const habit of state.habits) {
      for (const [date, done] of Object.entries(habit.days ?? {})) {
        if (!done) continue
        dateCounts.set(date, (dateCounts.get(date) ?? 0) + 1)
      }
    }

    return [...dateCounts.entries()]
      .filter(([, count]) => count === state.habits.length)
      .map(([date]) => date)
      .sort((a, b) => b.localeCompare(a))
  }, [state.habits])

  const allHabitsStreak = useMemo(() => {
    if (!state.habits.length) return 0
    const completedSet = new Set(completedAllDates)
    let streak = 0
    let cursor = today
    while (completedSet.has(cursor)) {
      streak += 1
      cursor = prevDate(cursor)
    }
    return streak
  }, [completedAllDates, state.habits.length, today])

  const addHabit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return

    setState((prev) => ({
      habits: [...prev.habits, { id: uid(), name: trimmed, days: {} }],
    }))
    setName("")
  }

  const toggleToday = (id: string, checked: boolean) => {
    setState((prev) => ({
      habits: prev.habits.map((habit) => {
        if (habit.id !== id) return habit
        const nextDays = { ...(habit.days ?? {}) }
        if (checked) nextDays[today] = true
        else delete nextDays[today]
        return { ...habit, days: nextDays }
      }),
    }))
  }

  const removeHabit = (id: string) => {
    setState((prev) => ({
      habits: prev.habits.filter((habit) => habit.id !== id),
    }))
  }

  return (
    <main className="dark min-h-screen bg-[#DCEBFE] px-4 py-10 text-foreground">
      <section className="mx-auto w-full max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <h1 className="text-3xl font-heading text-slate-900">Habit tracker</h1>
            <p className="text-sm text-slate-700">Check today and build your streak.</p>
          </div>
          <Badge variant="default">Today + Streak</Badge>
        </div>

        <Card className="mb-4 border-sky-900 bg-[#c5ddff] [box-shadow:4px_4px_0_0_#000]">
          <CardContent className="pt-4">
            <form className="flex flex-wrap items-center gap-2" onSubmit={addHabit}>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                placeholder="New habit (e.g. Morning walk)"
                className="flex-1 border-sky-900 bg-[#e7f1ff] text-black placeholder:text-slate-500"
              />
              <Button type="submit">Add</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-sky-900 bg-[#c5ddff] [box-shadow:4px_4px_0_0_#000]">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-slate-900">Your habits</CardTitle>
          </CardHeader>
          <CardContent>
            {!state.habits.length ? (
              <p className="py-2 text-sm text-slate-700">No habits yet. Add one above.</p>
            ) : (
              <div>
                {state.habits.map((habit) => {
                  const streak = currentStreak(habit)
                  const checked = Boolean(habit.days?.[today])

                  return (
                    <article
                      key={habit.id}
                      className="grid grid-cols-[1fr_auto] items-start gap-x-3 gap-y-2 border-t-4 border-sky-800 py-3 first:border-t-0 first:pt-0"
                    >
                      <div>
                        <div className="font-heading text-base text-slate-900">{habit.name}</div>
                        <p className="text-xs text-slate-700">
                          Current streak:{" "}
                          <span className="font-base text-slate-900">
                            {streak} {streak === 1 ? "day" : "days"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-end gap-1">
                        <Button variant="neutral" size="sm" onClick={() => removeHabit(habit.id)}>
                          Remove
                        </Button>
                      </div>
                      <div className="col-span-full flex items-center gap-2">
                        <span className="text-xs text-slate-700">Today</span>
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(value) => toggleToday(habit.id, value === true)}
                          className={`[box-shadow:4px_4px_0_0_#000] ${checked ? "" : "opacity-80"}`}
                        />
                      </div>
                    </article>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-4 border-sky-900 bg-[#c5ddff] [box-shadow:4px_4px_0_0_#000]">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-slate-900">All habits completed days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={undefined}
                className="rounded-base border-2 border-sky-900 bg-[#e7f1ff]"
                modifiers={{ completed: completedAllDates.map(isoToDate) }}
                modifiersClassNames={{
                  completed:
                    "bg-main text-main-foreground border-2 border-border [box-shadow:2px_2px_0_0_#000]",
                }}
              />
            </div>
            <p className="mt-3 text-sm text-slate-700">
              All-habits current streak:{" "}
              <span className="font-base text-slate-900">
                {allHabitsStreak} {allHabitsStreak === 1 ? "day" : "days"}
              </span>
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
