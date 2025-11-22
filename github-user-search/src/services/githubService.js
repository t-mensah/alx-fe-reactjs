import axios from "axios";

export async function fetchUserData(username) {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  const headers = token ? { Authorization: `token ${token}` } : {};

  const response = await axios.get(
    `https://api.github.com/users/${username}`,
    { headers }
  );

  return response.data;
}
