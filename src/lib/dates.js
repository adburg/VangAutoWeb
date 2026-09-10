const NORWEGIAN_MONTHS = [
  "Januar",
  "Februar",
  "Mars",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Desember"
];

/**
 * Turn a machine sortable ISO date ("2023-06-06") into the human readable
 * Norwegian form used across the site ("6. Juni 2023").
 *
 * Articles only ever store the ISO form - the readable form is a UI concern.
 */
export function formatNorwegianDate(isoDate) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(isoDate ?? "").trim());
  if (!match) return "";

  const [, year, month, day] = match;
  const monthName = NORWEGIAN_MONTHS[Number(month) - 1];
  if (!monthName) return "";

  return `${Number(day)}. ${monthName} ${year}`;
}
