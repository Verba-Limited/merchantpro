import { format, isFuture, isToday, parseISO } from "date-fns";

const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const suffix = getDaySuffix(Number(day));
  const formattedDate = date.toLocaleString("en-US", options);

  return `${day}${suffix} of ${formattedDate.split(" ")[0]}, ${
    formattedDate.split(" ")[2]
  }`;
};

export const calculateTimeDifference = (createdAt) => {
  const createdDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createdDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return `${seconds} second(s) ago`;
  } else if (minutes < 60) {
    return `${minutes} minute(s) ago`;
  } else if (hours < 24) {
    return `${hours} hour(s) ago`;
  } else if (days < 7) {
    return `${days} day(s) ago`;
  } else if (weeks < 4) {
    return `${weeks} week(s) ago`;
  } else if (months < 12) {
    return `${months} month(s) ago`;
  } else {
    return `${years} year(s) ago`;
  }
};

export const formatDateProfile = (dateString) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `USER SINCE ${months[monthIndex]}, ${year}`;
};

export const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${formattedMinutes} ${period}`;
};

const isDateToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isDateTomorrow = (date) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  );
};

const formatTimeEvent = (date) => {
  return format(date, "h:mma");
};

export const formatEventDate = (startDate, endDate, allDay) => {
  if (!startDate) {
    return "";
  }

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : undefined;

  const formattedStart = format(start, "MMMM do, yyyy 'at' h:mma");
  const formattedEnd = end ? format(end, "MMMM do, yyyy 'at' h:mma") : "";

  if (isDateToday(start)) {
    if (end) {
      if (isDateTomorrow(end)) {
        return `Today at ${formatTimeEvent(
          start
        )} - Tomorrow at ${formatTimeEvent(end)}`;
      } else {
        return `Today at ${formatTimeEvent(start)} - ${formattedEnd}`;
      }
    } else {
      return `Today at ${formatTimeEvent(start)}`;
    }
  } else if (isDateTomorrow(start)) {
    return end
      ? `Tomorrow at ${formatTimeEvent(start)} - ${formattedEnd}`
      : `Tomorrow at ${formatTimeEvent(start)}`;
  } else if (allDay) {
    return format(start, "MMMM do, yyyy");
  } else {
    return end ? `${formattedStart} - ${formattedEnd}` : formattedStart;
  }
};

export const filterAndSortEvents = (events) => {
  const now = new Date();

  return events
    .filter((event) => {
      const start = event.event.start;
      if (!start) return false; // Filter out events with undefined or null start dates

      const eventDate = parseISO(start);
      return isToday(eventDate) || isFuture(eventDate);
    })
    .sort((a, b) => {
      const startA = a.event.start;
      const startB = b.event.start;

      if (!startA || !startB) return 0; // Handle cases where start date might be undefined

      const dateA = parseISO(startA);
      const dateB = parseISO(startB);
      return dateA.getTime() - dateB.getTime();
    });
};

export const dateFormat = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
