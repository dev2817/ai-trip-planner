import {
    GoogleGenerativeAI,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: "Generate Travel Plan for Location: Las Vegas, for 3 days for couple with a cheap budget, give me hotels options list with hotelName,  Hotel address, price, hotel image url, geo coordinates (latitude, longitude object format), rating, description, and suggest itinerary with placeName, place details, place image Url, geo coordinates(latitude, longitude object format), ticket pricing , rating, time travel, each for location for 3 days with each day plan with best time to visit in JSON format",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate Travel Plan for Location: Las Vegas, for 3 days for couple with a cheap budget, give me hotels options list with hotelName,  Hotel address, price, hotel image url, geo coordinates, rating, description, and suggest itinerary with placeName, place details, place image Url, geo coordinates, ticket pricing , rating, time travel, each for location for 3 days with each day plan with best time to visit in JSON format" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"hotels\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"hotelImageUrl\": \"https://www.thedesigntraveler.com/wp-content/uploads/2022/02/The-D-Las-Vegas-Fremont-Street-Experience-2.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1426\",\n      \"rating\": 4.0,\n      \"description\": \"A retro-themed hotel located in the heart of Fremont Street. It offers a vibrant atmosphere, live music, and affordable dining options.\"\n    },\n    {\n      \"hotelName\": \"Plaza Hotel & Casino\",\n      \"hotelAddress\": \"1 Main Street, Las Vegas, NV 89101\",\n      \"price\": \"$60 - $120 per night\",\n      \"hotelImageUrl\": \"https://media.timeout.com/images/105076952/image.jpg\",\n      \"geoCoordinates\": \"36.1693, -115.1420\",\n      \"rating\": 3.5,\n      \"description\": \"A classic hotel with a central location on Fremont Street. It offers a variety of dining options, a casino, and a rooftop pool.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Hotel & Casino\",\n      \"hotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $150 per night\",\n      \"hotelImageUrl\": \"https://media.timeout.com/images/105076677/image.jpg\",\n      \"geoCoordinates\": \"36.1696, -115.1415\",\n      \"rating\": 4.5,\n      \"description\": \"A luxurious hotel known for its iconic shark tank and stylish rooms. It offers a wide range of amenities, including several restaurants and a casino.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://media.timeout.com/images/105076607/image.jpg\",\n      \"geoCoordinates\": \"36.1064, -115.1700\",\n      \"rating\": 3.0,\n      \"description\": \"A family-friendly hotel known for its circus acts and carnival-like atmosphere. It offers affordable accommodation and a variety of dining options.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Walk under the canopy of LED lights and enjoy live music, street performers, and vintage casinos.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2566/freemont-street-experience-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1698, -115.1426\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"6:00 PM - 10:00 PM\"\n        },\n        {\n          \"placeName\": \"Heart Attack Grill\",\n          \"placeDetails\": \"Enjoy a quirky dining experience with over-the-top burgers and a unique hospital-themed setting.\",\n          \"placeImageUrl\": \"https://www.lasvegas.com/media/2411/heart-attack-grill-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1705, -115.1424\",\n          \"ticketPricing\": \"$$\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"9:00 PM - 11:00 PM\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Admire stunning floral displays and artistic installations in a beautiful indoor garden.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2561/bellagio-conservatory-botanical-garden-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1139, -115.1736\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"10:00 AM - 12:00 PM\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"Walk along the outdoor shopping and dining promenade, enjoy the High Roller observation wheel, and find unique souvenirs.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2564/the-linq-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1120, -115.1720\",\n          \"ticketPricing\": \"$$\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"1:00 PM - 4:00 PM\"\n        },\n        {\n          \"placeName\": \"Free Shows on The Strip\",\n          \"placeDetails\": \"Catch free shows at various casinos, such as the Fountains of Bellagio, the Volcano at The Mirage, or the Sirens of TI.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2555/fountains-of-bellagio-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1145, -115.1735\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"8:00 PM - 10:00 PM\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"plan\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Enjoy scenic drives and hiking trails with breathtaking views of red rock formations.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2568/red-rock-canyon-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.2259, -115.2761\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"rating\": 5.0,\n          \"timeTravel\": \"9:00 AM - 1:00 PM\"\n        },\n        {\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"Explore a collection of vintage neon signs from Las Vegas's past and learn about its history.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2557/neon-museum-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1640, -115.1400\",\n          \"ticketPricing\": \"$$\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"2:00 PM - 4:00 PM\"\n        },\n        {\n          \"placeName\": \"In-N-Out Burger\",\n          \"placeDetails\": \"Indulge in a classic American burger and fries at a popular fast-food chain.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2559/in-n-out-burger-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1194, -115.1744\",\n          \"ticketPricing\": \"$\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"5:00 PM - 6:00 PM\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is just a suggestion and can be customized based on your interests and preferences.\n* The \"ticket pricing\" is a general estimate and may vary depending on the specific attractions and the time of year.\n* For more specific details about each location, such as hours of operation, admission fees, and transportation options, please visit their official websites.\n* Consider using public transportation or ride-sharing services to get around Las Vegas, as parking can be expensive. \n* Remember to bring comfortable shoes, sunscreen, and a hat for your outdoor activities." },
            ],
        },
    ],
});