package LLD.ProxyPattern;

public class EmployeeDaoImpl implements EmployeeDao{
    
    public void create(String client, EmployeeDo obj) throws Exception {
        System.out.println("Created new row in Employee table");
    }

    public void delete(String client, int employeeId) throws Exception {
        System.out.println("Employee removed");
    }

    public EmployeeDo get(String client, int employeeId) throws Exception {
        System.out.println("fetching data from DB");
        return new EmployeeDo();
    }

}
