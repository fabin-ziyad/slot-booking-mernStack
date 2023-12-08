export const DateFromatter = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  } else {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();

    return `${dayName} ${day} ${monthName}`;
  }
};

export const globalFormatDate = (inputDate) => {
  const date = new Date(inputDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const formatTimeToAMPM = (inputTime) => {
  if (typeof inputTime !== 'string' || !inputTime.includes(':')) {
    return 'Invalid Time'; // Handle invalid input
  }

  const [hours, minutes] = inputTime.split(":").map(Number);
  const time = new Date();
  time.setHours(hours);
  time.setMinutes(minutes);

  let formattedHours = time.getHours();
  const formattedMinutes = String(time.getMinutes()).padStart(2, "0");
  const ampm = formattedHours >= 12 ? "PM" : "AM";

  formattedHours %= 12;
  formattedHours = formattedHours || 12;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
