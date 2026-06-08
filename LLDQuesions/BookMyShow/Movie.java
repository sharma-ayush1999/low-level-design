package LLDQuesions.BookMyShow;

public class Movie {
    int movieId;
    String movieName;
    int movieDurationInMinutes;
    //other details like genre, language etc.

    public int getMovieId(){
        return movieId;
    }

    public void setMovieId(){
        this.movieId = movieId;
    }

    public String getMovieName(){
        return movieName;
    }

    public void setMovieName(String movieName){
        this.movieName = movieName;
    }

    public String getMovieDurationInMinutes(){
        return movieName;
    }

    public void setMovieDurationInMinutes(int movieDurationInMinutes){
        this.movieDurationInMinutes = movieDurationInMinutes;
    }


}
