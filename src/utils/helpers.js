export const getUserData = () => JSON.parse(localStorage.getItem("user"));

export const convertDate = (date) => {
  const newDate = new Date(date);

  const monthNames = [
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

  let hours = newDate.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = newDate.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${newDate.getDate()}. ${
    monthNames[newDate.getMonth()]
  } at ${hours}:${minutes}`;
};
