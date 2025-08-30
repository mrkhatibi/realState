function formatToPersianRial(number) {
  if (isNaN(number)) return "";

  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const numberWithCommas = number.toLocaleString("en-US");
  const persianNumber = numberWithCommas.replace(
    /\d/g,
    (d) => persianDigits[d]
  );

  return persianNumber + " ریال";
}
export { formatToPersianRial };
