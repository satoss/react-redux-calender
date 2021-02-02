const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "Application/json",
  },
};

export const get = async (path) => {
  const res = await fetch(url(path));
  const result = await res.json();

  return result;
};

export const post = async (path, body) => {
  const options = { ...header, method: "POST", body: JSON.stringify(body) };
  const res = await fetch(url(path), options);
  const result = await res.json();

  return result;
};

export const deleteReq = async (path, body) => {
  const options = { method: "DELETE" };
  await fetch(url(path), options);

  return;
};
