function reservedDaysOfTheWeek(day: string) {
    enum DayOfTheWeek {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(DayOfTheWeek[day as keyof typeof DayOfTheWeek] || 'error')
}

reservedDaysOfTheWeek("Monday")
reservedDaysOfTheWeek("Friday")
reservedDaysOfTheWeek("Invalid")
