package LLD.ProxyPattern;

public class EmployeeDaoProxy implements EmployeeDao {
    EmployeeDao employeeObj;

    EmployeeDaoProxy(){
        employeeObj = new EmployeeDaoImpl();
    }

    public void create(String client, EmployeeDo obj) throws Exception {
        if(client.equals("Admin")){
            employeeObj.create(client, obj);
            return;
        }

        throw new Exception("Access Denied");
    }

    public void delete(String client, int employeeId) throws Exception {
        if(client.equals("Admin")){
            employeeObj.delete(client, employeeId);
            return;
        }

        throw new Exception("Access Denied");
    }

    public EmployeeDo get(String client, int employeeId) throws Exception {
        if(client.equals("Admin") || client.equals("User")){
            return employeeObj.get(client, employeeId);
        }

        throw new Exception("Access denied");
    }
}
