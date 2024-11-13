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

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {noOfDays} days for couple with a {budget} budget, give me hotels options list with hotelName,  Hotel address, price, hotel images urls, geo coordinates, rating, description, and suggest itinerary with placeName, place details, place images Urls, geo coordinates, ticket pricing , rating, time travel, each for location for {noOfDays} days with each day plan with best time to visit in JSON format'