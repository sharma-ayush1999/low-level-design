package LLDQuesions.HashMap;

public class Main {
    public static void main(String args[]){
        MyHashMap<Integer, String> map = new MyHashMap<Integer, String>(7);

        map.put(1, "Hello");
        map.put(2, "Map");
        map.put(3, "Ayush");

        System.out.println(map.get(1));
        System.out.println(map.get(2));
        System.out.println(map.get(3));
    }
}
