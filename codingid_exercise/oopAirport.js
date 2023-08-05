class Airport {
  constructor(name) {
    this.name = name;
    this.flights = [];
  }
  getName() {
    return this.name;
  }
  getFlights() {
    return this.flights;
  }
  addFlight(flight) {
    this.flights.push(flight);
  }
  removeFlight(flight) {
    const index = this.flights.indexOf(flight);
    if (index > -1) {
      this.flights.splice(index, 1);
    }
  }

  searchFlights(destination) {
    // Complete the code
    // This function should process a list of flights that match the given destination
    // Use this function to display the list of flights

    // show list of flights with destination
    this.flights.forEach((flight) => {
      if (flight.destination === destination) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];

        const day = days[flight.departureTime.getUTCDay()];
        const month = months[flight.departureTime.getUTCMonth()];
        const hours = String(flight.departureTime.getUTCHours()).padStart(
          2,
          '0',
        );
        const minutes = String(flight.departureTime.getUTCMinutes()).padStart(
          2,
          '0',
        );
        const seconds = String(flight.departureTime.getUTCSeconds()).padStart(
          2,
          '0',
        );
        const year = flight.departureTime.getUTCFullYear();

        const formattedDepartureTime = `${day} ${month} ${flight.departureTime.getUTCDate()} ${hours}:${minutes}:${seconds} UTC ${year}`;
        console.log(
          `[${flight.airlineName} - ${flight.id}] ${flight.origin} - ${flight.destination} - ${formattedDepartureTime} `,
        );
      }
    });
  }
}

class Flight {
  constructor(id, airlineName, origin, destination, departureTime) {
    this.id = id;
    this.airlineName = airlineName;
    this.origin = origin;
    this.destination = destination;
    this.departureTime = departureTime;
  }
  getAirlineName() {
    return this.airlineName;
  }
  getId() {
    return this.id;
  }
  getOrigin() {
    return this.origin;
  }
  getDestination() {
    return this.destination;
  }
  getDepartureTime() {
    return this.departureTime;
  }
}

const airport = new Airport('Soekarno-Hatta International Airport');
const flight1 = new Flight(
  'BTK101',
  'Batik',
  'Jakarta',
  'Bangkok',
  new Date('20 March 2023 18:00'),
);
const flight4 = new Flight(
  'GA600',
  'Garuda',
  'Jakarta',
  'Bangkok',
  new Date('18 March 2023 03:40'),
);
const flight2 = new Flight(
  'MH380',
  'Malaysia Airlines',
  'Jakarta',
  'Bangkok',
  new Date('15 May 2023 15:20'),
);
const flight3 = new Flight(
  'GA300',
  'Garuda',
  'Jakarta',
  'Berlin',
  new Date('14 April 2023 15:00'),
);
const flight5 = new Flight(
  'QF110',
  'Qantas Airways',
  'Jakarta',
  'Berlin',
  new Date('14 August 2023 15:40'),
);

airport.addFlight(flight1);
airport.addFlight(flight2);
airport.addFlight(flight3);
airport.addFlight(flight4);
airport.addFlight(flight5);

console.log('Welcome to ' + airport.getName());
console.log('List of flight : ');
console.log('');
console.log('****************************');
console.log('All list flights to Bangkok:');
// Display the list of flights with destination Bangkok!

airport.searchFlights('Bangkok');

console.log('****************************');
console.log('All list flights to Berlin:');
// Display the list of flights with destination Berlin!
airport.searchFlights('Berlin');
