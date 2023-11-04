export function formatTime(time) {
  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  return `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
}
