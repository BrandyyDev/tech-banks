const apiCall = async (endpoint, options) => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export default apiCall;