import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/theses");
  }

  get(id) {
    return http.get(`/theses/${id}`);
  }

  create(data) {
    return http.post("/theses", data);
  }

  update(id, data) {
    return http.put(`/theses/${id}`, data);
  }

  delete(id) {
    return http.delete(`/theses/${id}`);
  }

  deleteAll() {
    return http.delete(`/theses`);
  }

  findByTitle(title) {
    return http.get(`/theses?title=${title}`);
  }
}

export default new DataService();