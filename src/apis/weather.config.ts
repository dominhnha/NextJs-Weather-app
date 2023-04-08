const baseUrl = `https://api.openweathermap.org`;
const apiKey = `c82b0be66752eac76f3af1dbdf1e9b4f`;

const getUrl = (endpoint: string, params: Record<string, any>): string => {
  const qs = new URLSearchParams({
    ...params,
    appid: apiKey,
  });
  return `${baseUrl}/${endpoint}&${qs}`;
};

export default { getUrl, baseUrl };
