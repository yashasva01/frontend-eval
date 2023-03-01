export const BACKEND_URL = 'http://localhost:8080';

export const GET_ALL_EVENTS = {
  url: '/api/events',
  method: 'GET',
};

export const GET_EVENT_BY_ID = id => {
  return {
    url: `/api/events/${id}`,
    method: 'GET',
  };
};

export const PATCH_EVENT_BOOKMARK_REGISTRATION = id => {
  return {
    url: `/api/events/${id}`,
    method: 'PATCH',
  };
};
