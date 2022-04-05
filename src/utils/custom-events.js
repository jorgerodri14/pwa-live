export default function customEvents(event, detail) {
  return new CustomEvent(event, {
    bubbles: true,
    composed: true,
    detail,
  });
}
