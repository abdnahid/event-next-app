export const getAllEvents = async () => {
  const response = await fetch(
    `https://events-next-app-864eb-default-rtdb.asia-southeast1.firebasedatabase.app/events.json`
  );
  const resData = await response.json();
  return resData;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isActive);
  return featuredEvents;
};

export const getSingleEvent = async (id) => {
  const allEvents = await getAllEvents();
  const singleEvent = allEvents.find((event) => event._id === id);
  return singleEvent;
};

export const getFilteredEvents = async (month, year) => {
  const allEvents = await getAllEvents();
  const filteredEvents = allEvents.filter(
    (event) => event.eventDate.includes(month) && event.eventDate.includes(year)
  );
  return filteredEvents;
};
