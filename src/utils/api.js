const BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";


export async function authenticatedFetch(url, options = {}) {

  const token = localStorage.getItem("token");

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
  };


  let response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });


  // لو التوكن انتهى حاول تجديده
  if (response.status === 401) {

    const refresh = localStorage.getItem("refresh_token");

    if (refresh) {

      const refreshRes = await fetch(
        `${BASE_URL}/api/refresh`,
        {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            refresh_token: refresh
          })
        }
      );


      if(refreshRes.ok){

        const data = await refreshRes.json();

        localStorage.setItem(
          "token",
          data.access_token
        );


        response = await fetch(`${BASE_URL}${url}`, {
          ...options,
          headers:{
            ...options.headers,
            Authorization:`Bearer ${data.access_token}`
          }
        });

      }
    }
  }


  return response;
}