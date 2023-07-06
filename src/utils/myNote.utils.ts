import dayjs from "dayjs";

export const parseDateTime = (dateTime: number) => {
  const parseDate = dayjs(dateTime).format("MM/DD HH:mm");

  const month = parseDate.slice(0, 2);
  const day = parseDate.slice(3, 5);
  const hour = parseDate.slice(6, 8);
  const minute = parseDate.slice(9, 11);

  const getMonth = (month: string) => {
    if (month.startsWith("0")) {
      return month.slice(1, 2);
    }
    return month;
  };

  const getDay = (day: string) => {
    if (day.startsWith("0")) {
      return day.slice(1, 2);
    }
    return day;
  };

  const getHour = (hour: string) => {
    if (Number(hour) > 12) {
      return `오후 ${Number(hour) - 12}`;
    }
    return `오전 ${hour}`;
  };

  return `${getMonth(month)}월 ${getDay(day)}일 ${getHour(hour)}:${minute}`;
};
