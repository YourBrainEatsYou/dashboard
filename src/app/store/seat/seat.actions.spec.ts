import * as fromSeat from './seat.actions';

describe('loadSeats', () => {
  it('should return an action', () => {
    expect(fromSeat.loadSeats().type).toBe('[Seat] Load Seats');
  });
});
