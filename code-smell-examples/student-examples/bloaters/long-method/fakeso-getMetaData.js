const getMetaData = (date) => {
  const OVER_YEAR = -366;
  const UNDER_YEAR = -364;
  const now = new Date();
  const datePosted = new Date(date.getTime());
  const secDiff = Math.floor((now - datePosted) / 1000);
  const minDiff = Math.floor(secDiff / 60);
  const hrDiff = Math.floor(minDiff / 60);
  const dayDiff = Math.floor(hrDiff / 24);
  let timeStamp;

  function generateMetaData(diff, unit) {
    const year = datePosted.toLocaleString('en-US', { year: 'numeric' });
    const month = datePosted.toLocaleString('en-US', { month: 'short' });
    const day = datePosted.getDate().toString().padStart(2, '0');

    switch (diff) {
      case OVER_YEAR:
        return `${month} ${day}, ${year} at ${datePosted.toLocaleTimeString(
          'en-US',
          {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
          }
        )}`;
      case UNDER_YEAR:
        return `${month} ${day} at ${datePosted.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        })}`;
      case 1:
        return `${diff} ${unit} ago`;
      default:
        return `${diff} ${unit}s ago`;
    }
  }

  if (dayDiff >= 365 || datePosted.getFullYear() < now.getFullYear()) {
    timeStamp = generateMetaData(OVER_YEAR, 'year');
  } else if (dayDiff >= 1) {
    timeStamp = generateMetaData(UNDER_YEAR, 'year');
  } else if (hrDiff >= 1) {
    timeStamp = generateMetaData(hrDiff, 'hour');
  } else if (minDiff >= 1) {
    timeStamp = generateMetaData(minDiff, 'minute');
  } else {
    timeStamp = generateMetaData(secDiff, 'second');
  }

  return timeStamp;
};

export { getMetaData };
