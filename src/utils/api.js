const MOCKAPI_URL = "https://625d01094c36c753576d2522.mockapi.io/api/v1/";

async function fetchData(path) {
  const response = await fetch(MOCKAPI_URL + path);
  return await response.json();
}

export async function fetchApplications() {
  return fetchData("/applications");
}

export async function fetchApplication(id) {
  return fetchData(`/applications/${id}`);
}

export async function fetchCollections() {
  return fetchData("/collections");
}

export async function fetchCollection(id) {
  return fetchData(`/collections/${id}`);
}

export async function fetchReviews() {
  return fetchData("/reviews");
}

export async function fetchReview(id) {
  return fetchData(`/reviews/${id}`);
}

export async function fetchUsers() {
  return fetchData("/users");
}

export async function fetchUser(id) {
  return fetchData(`/users/${id}`);
}