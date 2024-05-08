// fetchApi/fetchApi.js
export const FetchApiMethod = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (err) {
      console.log("error by fetch ", err);
      throw new Error(err);
    }
  };

  