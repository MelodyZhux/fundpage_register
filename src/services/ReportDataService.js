import http from "../http-common";

const getAll = () => {
  return http.get("/reports");
};


const findByIssueId = id => {
  return http.get(`/issue/${id}`);
};
const update = (id, data) => {
    return http.put(`/report/${id}`, data);
  };

const ReportDataService = {
  getAll,
  update,
  findByIssueId
};

  
export default ReportDataService;
