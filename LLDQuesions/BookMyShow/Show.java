package LLDQuesions.BookMyShow;

import java.util.ArrayList;
import java.util.List;

public class Show {
    int showId;
    Movie movie;
    Screen screen;
    int showStartTime;
    List<Integer> bookedSeatIds = new ArrayList<>();

    public int getShowId() { return this.showId; }   
    public void setShowId(int showId) { this.showId = showId; }

    public Movie getMovie() { return this.movie; }
    public void setMovie(Movie movie) { this.movie = movie; }

    public Screen getScreen() { return this.screen; }
    public void setScreen(Screen screen) { this.screen = screen; }

    public int getShowStartTime() { return this.showStartTime; }
    public void setShowStartTime(int showStartTime) { this.showStartTime = showStartTime; }

    public List<Integer> getBookedSeatIds() { return this.bookedSeatIds; }
    public void setBookedSeatIds(List<Integer> bookedSeatIds) { this.bookedSeatIds = bookedSeatIds; }


}
