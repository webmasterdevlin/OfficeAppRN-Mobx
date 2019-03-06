import { BaseUrl } from "../utils/constants";
import axios from "axios";

export async function getDepartments() {
  return await axios.get(BaseUrl.departments);
}

export async function getDepartment(id) {
  return await axios.get(`${BaseUrl.departments}/${id}`);
}

export async function postDepartment(department) {
  return await axios.post(BaseUrl.departments, department);
}

export async function putDepartment(department) {
  return await axios.put(`${BaseUrl.departments}/${department.id}`, department);
}

export async function deleteDepartment(department) {
  return await axios.delete(`${BaseUrl.departments}/${department.id}`);
}
