function toPersianDate(isoString) {
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    throw new Error("تاریخ نامعتبر است");
  }

  const locale = "fa-IR-u-ca-persian";

  const day = new Intl.DateTimeFormat(locale, { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
  const year = new Intl.DateTimeFormat(locale, { year: "numeric" }).format(date);
  const weekday = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date);
  const time = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  // ترتیب: روز → ماه → سال
  return `${day} ${month} ${year}، ${weekday} ساعت ${time}`;
}

export { toPersianDate };
