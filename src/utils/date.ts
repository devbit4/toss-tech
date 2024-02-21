export default function formatDate(date: string | number, separate: string) {
  const yyyyMMdd = String(date);
  const Year = yyyyMMdd.substring(0, 4);
  const Month = yyyyMMdd.substring(4, 6);
  const Date = yyyyMMdd.substring(6, 8);

  return Year + separate + Month + separate + Date;
}
