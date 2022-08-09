import http from "../http-common";

const getAll = () => {
  console.log("find all in service");
  return http.get("/peoples");
};

const create = data => {
  console.log('create data:');
  console.log(data);

  return http.post("/people/add", data);
};

const update = (id, data) => {
  console.log("update id ==="+id);
  return http.put(`/people/${id}`, data);
};


const remove = id => {
  return http.delete(`/people/${id}`);
};

const removeAll = () => {
  return http.delete(`/people`);
};

const findByPersonName = name => {
    console.log('find by person name in service');
    console.log(name);
  return http.get(`/people`,{params: {
    personName: name
  }});
};
const findByPersonId = id => {
  console.log("findByPersonId===="+id);
  return http.get(`/people/${id}`);
};

const peopleDataService = {
  getAll,
  findByPersonId,
  findByPersonName,
  create,
  update,
  remove,
  removeAll
};

export default peopleDataService;
