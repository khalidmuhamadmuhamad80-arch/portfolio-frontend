const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

export async function authenticatedFetch(url, options = {}) {
  const token = localStorage.getItem("token");

  // تجهيز الـ Headers الأساسية مع التوكن ونوع البيانات
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // الريكويست الأساسي
  let response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  // لو الـ Access Token انتهى (401 Unauthorized)
  if (response.status === 401) {
    const refresh = localStorage.getItem("refresh_token");

    if (refresh) {
      try {
        // محاولة تجديد الـ Access Token بتمير الـ Refresh Token في الـ Headers كـ Bearer
        const refreshRes = await fetch(`${BASE_URL}/api/refresh`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${refresh}` // التعديل الجوهري هنا ليتوافق مع Flask
          }
        });

        if (refreshRes.ok) {
          const data = await refreshRes.json();

          // حفظ زوج التوكنز الجديد (التطبيق الصارم للـ Refresh Token Rotation)
          localStorage.setItem("token", data.access_token);
          if (data.refresh_token) {
            localStorage.setItem("refresh_token", data.refresh_token);
          }

          // إعادة محاولة الريكويست الأصلي بالتوكن الجديد النظيف
          headers["Authorization"] = `Bearer ${data.access_token}`;
          response = await fetch(`${BASE_URL}${url}`, {
            ...options,
            headers,
          });
        } else {
          // لو الـ Refresh Token منتهي أو محروق في الـ Redis
          localStorage.removeItem("token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/admin/login";
        }
      } catch (error) {
        console.error("Refresh token error:", error);
      }
    } else {
      window.location.href = "/admin/login";
    }
  }

  return response;
}