package LLDQuesions.BookMyShow;

import java.util.ArrayList;
import java.util.List;

import LLDQuesions.BookMyShow.Enums.City;

public class Theatre {
    int theatreId;
    String address;
    City city;
    List<Screen> screen = new ArrayList<>();
    List<Show> shows = new ArrayList<>();

    public int getTheatreId() { return this.theatreId; }    
    public void setTheatreId(int theatreId) { this.theatreId = theatreId; }

    public String getAddress() { return this.address; }
    public void setAddress(String address) { this.address = address; }

    public City getCity() { return this.city; }
    public void setCity(City city) { this.city = city; }

    public List<Screen> getScreen() { return this.screen; }
    public void setScreen(List<Screen> screen) { this.screen = screen; }

    public List<Show> getShow() { return this.show; }
    public void setShows(List<Show> shows) { this.show = show; }


}
