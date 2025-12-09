export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;
export const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL ;

export const API_ENDPOINTS = {
  testimonials: `${API_BASE_URL}/testimonials`,
  clients: `${API_BASE_URL}/clients`,
  contact: `${API_BASE_URL}/contact`,
  gallery: `${API_BASE_URL}/gallery`,
  upload: `${API_BASE_URL}/upload`,
  login: `${API_BASE_URL}/users/login`,
};

export const getApiUrl = (endpoint: keyof typeof API_ENDPOINTS, id?: string): string => {
  const baseUrl = API_ENDPOINTS[endpoint];
  return id ? `${baseUrl}/${id}` : baseUrl;
};
