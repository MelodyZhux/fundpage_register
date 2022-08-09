import http from "../http-common";

const getAll = () => {
  return http.get("/user");
};

const get = id => {
  return http.get(`/user/${id}`);
};

const create = data => {
  console.log('return');
  return http.post("/user", data);
};

const update = (id, data) => {
  return http.put(`/user/${id}`, data);
};

const remove = id => {
  return http.delete(`/user/${id}`);
};

const removeAll = () => {
  return http.delete(`/user`);
};

const findByName = name => {
  return http.get(`/user?name=${name}`);
};

const UserDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};

export default UserDataService;
