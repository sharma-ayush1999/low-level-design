package LLDQuesions.BookMyShow;

public class Seat {
    int seatId;
    int row;
    SeatCategory seatCategory;


    public int getSeatId() { return this.seatId; };
    public void setSeatId(int seatId) { this.seatId = seatId; };

    public int getRow() { return this.row; };
    public void setRow(int row) { this.row = row; };

    public SeatCategory getSeatCategory() { return this.seatCategory; };
    public void setSeatCategory(SeatCategory seatCategory) { this.seatCategory = seatCategory; };
}
