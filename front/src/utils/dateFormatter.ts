import moment from "moment-timezone";

import "moment/locale/mn";

moment.locale("mn");

export const formatTimewithYearAndMonthAndDay = (date: Date | undefined) => {
  return moment(date).tz("Asia/Ulaanbaatar").format("YYYY.MM.DD");
};

export const formatTimeWithHourAndMinute = (date: Date | undefined) => {
  return moment(date).tz("Asia/Ulaanbaatar").format("HH:mm");
};
