package LLDQuesions.BookMyShow;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import LLDQuesions.BookMyShow.Enums.City;

public class MovieController {
    Map<City, List<Movie>> cityVsMovies;
    List<Movie> allMovies;

    MovieController(){
        cityVsMovies = new HashMap<>();
        allMovies = new ArrayList<>();
    }

    void addMovie(Movie movie, City city){
        allMovies.add(movie);

        List<Movie> movies = cityVsMovies.getOrDefault(city, new ArrayList<>());
        movies.add(movies);
        cityVsMovies.put(city, movies);
    }

    Movie getMovieByName(String movieName){
        for(Movie movie: allMovies){
            if(movie.getMovieName() == movieName){
                return movie;
            }
        }
        return null;
    }

    Movie getMovieByCity(City city){
        Movie movies = cityVsMovies.get(city);
        return movies;
    }
}
