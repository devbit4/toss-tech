export default function formatDate(date, gubun) {
  const yyyyMMdd = String(date);
  const sYear = yyyyMMdd.substring(0, 4);
  const sMonth = yyyyMMdd.substring(4, 6);
  const sDate = yyyyMMdd.substring(6, 8);

  return sYear + gubun + sMonth + gubun + sDate;
}
