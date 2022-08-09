import http from "../http-common";

const getAll = () => {
  console.log("find all in service");
  return http.get("/projects");
};

const create = data => {
  console.log('create data:');
  console.log(data);

  return http.post("/project/add", data);
};

const update = (id, data) => {
  console.log("update id ==="+id);
  return http.put(`/project/${id}`, data);
};


const remove = id => {
  return http.delete(`/project/${id}`);
};

const removeAll = () => {
  return http.delete(`/project`);
};

const findByProjectName = name => {
  return http.get(`/project`,{params: {
    name: name
  }});
};
const findByProjectId = id => {
  console.log("findByProjectId===="+id);
  return http.get(`/project/${id}`);
};

const projectDataService = {
  getAll,
  findByProjectId,
  findByProjectName,
  create,
  update,
  remove,
  removeAll
};

export default projectDataService;
