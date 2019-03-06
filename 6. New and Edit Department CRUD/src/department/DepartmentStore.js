import { decorate, observable, action } from "mobx";
import {
  getDepartments,
  getDepartment,
  deleteDepartment,
  postDepartment,
  putDepartment
} from "./DepartmentService";

class DepartmentStore {
  departments = [];
  department = {
    id: "",
    name: "",
    description: "",
    head: "",
    code: ""
  };

  loadDepartments = async () => {
    const { data } = await getDepartments();
    this.departments = data;
  };

  loadDepartment = async id => {
    const { data } = await getDepartment(id);
    this.department = data;
  };

  addDepartment = async department => {
    await postDepartment(department).then(() =>
      this.departments.unshift(department)
    );
  };

  removeDepartment = async id => {
    let index = this.departments.findIndex(h => h.id === id);
    let departmentToRemove = this.departments.find(d => d.id === id);
    this.departments.splice(index, 1);
    try {
      await deleteDepartment(id);
    } catch (e) {
      this.departments.splice(index, 0, departmentToRemove);
      alert(`Something happened: ${e.message}`);
    }
  };

  updateDepartment = async department => {
    await putDepartment(department);
    const index = this.departments.findIndex(d => d.id === department.id);
    this.departments[index] = department;
  };
}

decorate(DepartmentStore, {
  departments: observable,
  department: observable,
  loadDepartments: action,
  addDepartment: action,
  removeDepartment: action
});

const departmentStore = new DepartmentStore();
export default departmentStore;
