/**
 * Use a service name mid-sentence: "Service og reparasjon" -> "service og
 * reparasjon", while acronyms such as "EU-kontroll" and "AC-service" stay.
 */
export function inSentence(name) {
  const value = String(name ?? "");
  return /^[A-ZÆØÅ][a-zæøå]/.test(value) ? value[0].toLowerCase() + value.slice(1) : value;
}
