const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "Application/json",
  },
};

export const get = async (path) => {
  const res = await fetch(url(path));
  checkError(res.status);
  const result = await res.json();

  return result;
};

export const post = async (path, body) => {
  const options = { ...header, method: "POST", body: JSON.stringify(body) };
  const res = await fetch(url(path), options);
  checkError(res.status);
  const result = await res.json();

  return result;
};

export const deleteReq = async (path, body) => {
  const options = { method: "DELETE" };
  const res = await fetch(url(path), options);
  checkError(res.status);

  return;
};

const checkError = (status) => {
  if (status >= 400) {
    throw new Error("エラーが発生しました。時間を置いて再度お試しください。");
  }
};
