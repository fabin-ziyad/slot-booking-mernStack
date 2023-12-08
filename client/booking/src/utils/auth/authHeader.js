const makeAuthenticatedRequest = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    const response = await fetch(url, options);
    // Process the response
    return response.json(); // or return response;
  } catch (error) {
    console.error("Request failed", error);
    // Handle request error
    throw new Error("Request failed");
  }
};
module.exports = makeAuthenticatedRequest;