import http from "../http-common";

const getAll = () => {
  console.log('get issue lists');
  return http.get("/issues");
};

const get = id => {
  return http.get(`/issue/${id}`);
};

const create = data => {
  console.log('return');
  return http.post("/issue/add", data);
};

const update = (id, data) => {
  return http.put(`/issue/${id}`, data);
};

const remove = id => {
  return http.delete(`/issue/${id}`);
};

const removeAll = () => {
  return http.delete(`/issue`);
};

const findIssuesByCreatedBy = name => {
  console.log('services findIssuesByCreatecBy');
  console.log(name);
  return http.get(`/issue`,{params: {
    createdBy: name
  }});
};

const findIssuesByProjectId = id => {
  console.log('services findIssuesByProjectName');
  console.log(id);
  return http.get(`/issue`,{params: {
    projectId: id
  }});
};

const findByIssueId = id => {
  return http.get(`/issue/${id}`);
};

const IssueDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findIssuesByCreatedBy,
  findIssuesByProjectId,
  findByIssueId
};

export default IssueDataService;
