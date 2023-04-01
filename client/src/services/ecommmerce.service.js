import { http } from "~/utils/"

class FetchSevices {
  getAllData(category) {
    if (category) {
      return http.get(`/api/products?populate=*[$and]filters[category][$eqi]=${category}`);
    } else {
      return http.get(`/api/products?populate=*`);
    }
  }
  getLogoData(id) {
    return http.get("/api/website-logo?populate=*");
  }
  // create(data) {

  // }
  // update(id, data) {

  // }
  // delete(id) {

  // }
  // deleteAll() {

  // }
  // findByTitle(title) {

  // }
}

export default new FetchSevices;
