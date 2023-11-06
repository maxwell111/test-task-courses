export const getTimeDifference = (sDate, eDate) => {
  const startDate = new Date(sDate);
  const endDate = new Date(eDate);

  const timeDifference = endDate - startDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDifference / 1000) % 60);

  return `Elapsed time: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};
