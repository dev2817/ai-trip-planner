import solo from "/user.png";
import couple from "/parents.png"
import family from "/family.png"
import friends from "/friends.png"
import low from '/low.png'
import medium from '/medium.png'
import high from '/high.png'

export const selectTravelersList = [
    {
        id: 1,
        title: "Just Me",
        desc: "A sole traveles in exploration",
        icon: solo,
        people: "1"
    },
    {
        id: 2,
        title: "Couple",
        desc: "Two traveles in tandem",
        icon: couple,
        people: "2 people"
    },
    {
        id: 3,
        title: "Family",
        desc: "A group of fun loving adv.",
        icon: family,
        people: "3 to 5 people"
    },
    {
        id: 4,
        title: "Friends",
        desc: "A bunch of thrill-seekes",
        icon: friends,
        people: "5 to 10 people"
    },
]

export const selectBudgetOptions = [
    {
        id: 1,
        title: "Cheap",
        desc: "Stay conscious of cost",
        icon: low
    },
    {
        id: 2,
        title: "Moderate",
        desc: "Keep cost on average side",
        icon: medium
    },
    {
        id: 3,
        title: "Luxury",
        desc: "Dont worry about cost",
        icon: high
    },
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {noOfDays} days for couple with a {budget} budget, give me hotels options list with hotelName,  Hotel address, price, hotel images urls, geo coordinates, rating, description, and suggest itinerary with placeName, place details, place images Urls, geo coordinates, ticket pricing , rating, time travel, each for location for {noOfDays} days with each day plan with best time to visit in JSON format format: {"userId": "6716192a854ddb1df75f4cfd","location": {"name": "Ahmedabad, Gujarat, India","placeId": "ChIJSdRbuoqEXjkRFmVPYRHdzk8"},"noOfDays": "2","budget": "Moderate","traveler": "5 to 10 people","hotels": [{"hotelName": "Fortune Landmark Hotel","hotelAddress": "Usmanpura, Ahmedabad, Gujarat 380013","price": "$50-$100","hotelImageUrls": ["https://cf.bstatic.com/xdata/images/hotel/max1280x900/336989819.jpg?k=2420c41d4a461b7c134a11a97083423c9f7f24206fbf27408045a7f20041f51c&o=&hp=1"],"geoCoordinates": {"latitude": 23.0442,"longitude": 72.5683},"rating": 4.3,"description": "Well-appointed hotel with comfortable accommodations and multiple dining options. Good value for couples seeking comfort and convenience."},],"itinerary": [{"day": 1,"bestTimeToVisit": "Morning","plan": [{"placeName": "Sabarmati Ashram","placeDetails": "Visit the historical Sabarmati Ashram, where Mahatma Gandhi resided for many years. Explore the museum and learn about his philosophy of non-violence.","placeImageUrls": ["https://www.holidify.com/images/cmsuploads/compressed/2744_20190627170816.JPG"],"geoCoordinates": {"latitude": 23.0756,"longitude": 72.5852},"ticketPricing": "₹10 for Indians, ₹100 for foreigners","rating": 4.7,"timeTravel": "2 hours"},]},]}'