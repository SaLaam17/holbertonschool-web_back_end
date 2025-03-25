export default function createEmployeesObject(departmentName, employees) {
  const organization = {
    [departmentName]: employees,
  };

  return organization;
}
