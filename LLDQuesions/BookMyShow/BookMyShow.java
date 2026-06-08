package LLDQuesions.BookMyShow;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import LLDQuesions.BookMyShow.Enums.City;

public class BookMyShow {
    MovieController movieController;
    TheatreController theatreController;

    BookMyShow(){
        movieController = new MovieController();
        theatreController = new TheatreController();
    }

    public static void main(String args[]){
        BookMyShow bookMyShow = new BookMyShow();

        bookMyShow.initialize();

        //user1
        bookMyShow.createBooking(City.Delhi, "Dune")

        //user 2
        bookMyShow.createBooking(City.Delhi, "Dune")
    }

    private void createBooking(City city, String movieName){
        //1.Search movie by my location
        List<Movie> movies = movieController.getMovieByCity(city);

        //2.Select the movie which you want to see
        Movie interestedMovie = null;
        for(Movie movie : movies){
            if(movie.getMovieName() == movieName){
                interestedMovie = movie;
            }
        }

        //3. get all show of this movie in required location
        Map<Theatre, List<Show>> showTheatreWise = theatreController.getAllShow(interestedMovie, city);

        //4. select the particular show user is interested in
        Map.Entry<Theatre,List<Show>> entry =   showTheatreWise.entrySet().iterator().next;
        List<Show> runningShows = entry.getValue();
        Show interestedShow = runningShows.get(0);

        //5.select the seat
        int seatNumber = 25;
        List<Integer> bookedSeats = interestedShow.getBookedSeatIds();
        if(!bookedSeats.contains(seatNumber)){
            bookedSeats.add(25);

            //start Payment
            Booking booking = new Booking();
            List<Seat> myBookedSeats = new ArrayList<>();
            for(Seat screenSeat : interestedShow.getScreen().getSeats()){
                if(screenSeat.getSeatId() == seatNumber){
                    myBookedSeats.add(screenSeat)
                }
            }
            booking.setBookedSeats(myBookedSeats);
            booking.setShow(interestedShow);
        } else {
            System.out.println("Seat already booked");
            return;
        }
    }

    private void initialize(){
        createMovies();

        createTheatre();
    }

    private void createMovies(){
        Movie avengers = new Movie();
        avengers.setMovieId(1);
        avengers.setMovieName("Avengers");
        avengers.setMovieDurationInMinutes(120);

        Movie dune = new Movie();
        dune.setMovieId(2);
        dune.setMovieName("Dine");
        dune.setMovieDurationInMinutes(180);

        movieController.addMovie(dune, City.Delhi);
        movieController.addMovie(dune, City.Mumbai);
        movieController.addMovie(avengers, City.Delhi);
        movieController.addMovie(avengers, City.Mumbai);
        movieController.addMovie(avengers, City.Gurgaon);
    }

    private void createTheatre(){
        Movie avengerMovie = movieController.getMovieByName("Avenger");
        Movie duneMovie = movieController.getMovieByName("Dune");

        Theatre pvrTheatre = new Theatre();
        pvrTheatre.setTheatreId(1);
        pvrTheatre.setScreen(createScreen());
        pvrTheatre.setCity("Delhi");
        List<Show> pvrShows = new ArrayList<>();
        Show pvrMorningShow = createShows(1, pvrTheatre.getScreen().get(0), duneMovie, 8);
        Show pvrEveningShow = createShows(2, pvrTheatre.getScreen().get(0), avengerMovie, 16);
        pvrShows.add(pvrMorningShow);
        pvrShows.add(pvrEveningShow);
        pvrTheatre.setShows(pvrShows);

        Theatre inoxTheatre = new Theatre();
        inoxTheatre.setTheatreId(1);
        inoxTheatre.setScreen(createScreen());
        inoxTheatre.setCity("Delhi");
        List<Show> inoxShows = new ArrayList<>();
        Show inoxMorningShow = createShows(1, inoxTheatre.getScreen().get(0), duneMovie, 13);
        Show inoxEveningShow = createShows(2, inoxTheatre.getScreen().get(0), avengerMovie, 20);
        inoxShows.add(inoxMorningShow);
        inoxShows.add(inoxEveningShow);
        inoxTheatre.setShows(inoxShows);
    }
}
