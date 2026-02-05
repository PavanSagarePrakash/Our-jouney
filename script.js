// Define the Gold Star Icon
/* const starIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
}); */

// 1. Icons
const starIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
});
const heartIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
});

// Initialize map centered between Oregon and Hawaii
// const map = L.map('map').setView([30.0, -140.0], 3);
const map = L.map('map').setView([12.2958, 76.6394], 12);

// 2. Map Setup
// const map = L.map('map').setView([20.0, 0.0], 2);
// L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    // attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);

// Replace your old L.tileLayer with this:
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    // attribution: '© OpenStreetMap contributors'
// }).addTo(map);

// 3. Automated Sidebar & Marker Generation
const memoryList = document.getElementById('memory-list');

// Data structure for your memories
const memories = [
    {
        location: "Mysuru - First Meeting",
        date: "November 2022",
        timestamp: new Date(2022, 10, 1),
        coords: [12.2958, 76.6394],
        message: "The spark that started it all. ✨",
        image: "images/first_meeting.jpg",
        type: "first_meeting"
    },
    {
        location: "Our Wedding Day 💍",
        date: "May 21, 2023",
        timestamp: new Date(2023, 4, 21),
        coords: [12.3050, 76.6550], 
        message: "The day we said 'I Do'. Happy Anniversary, Varshu! ❤️",
        image: "images/wedding.JPEG",
        type: "wedding"
    },
    {
        location: "Cinnamon Velifushi, Maldives",
        date: "June 2023",
        timestamp: new Date(2023, 5, 15),
        coords: [3.4981, 73.5301],
        message: "Our dream honeymoon in the Maldives. Overwater bungalows and crystal clear water. 🏝️",
        image: "maldives.jpg"
    },
    {
        location: "Redmond, Washington",
        date: "August 5, 2023",
        timestamp: new Date(2023, 7, 5),
        coords: [47.6740, -122.1215],
        message: "Celebrating our special occasion with cake, balloons, and so much love! 🎂",
        image: "anniversary_redmond.jpg"
    },
    {
        location: "Portland State University",
        date: "September 2023", // Set to start of Fall term
        timestamp: new Date(2023, 8, 25),
        coords: [45.5115, -122.6853],
        message: "Where your Master's journey began! 📚",
        image: "psu.jpg"
    },
    {
        location: "Grand Canyon National Park",
        date: "March 2024",
        timestamp: new Date(2024, 2, 15),
        coords: [36.2679, -112.3535],
        message: "Standing on the edge of the world. A truly unforgettable sight. 🏞️",
        image: "grand_canyon.jpg"
    },
    {
        location: "Antelope Canyon & Horseshoe Bend, AZ",
        date: "April 2024",
        timestamp: new Date(2024, 3, 10),
        coords: [36.8620, -111.3744],
        message: "The glowing walls of Antelope Canyon and the breathtaking drop at Horseshoe Bend. 🏜️",
        image: "arizona_trip.jpg"
    },
    {
        location: "Zion National Park, Utah",
        date: "April 2024",
        timestamp: new Date(2024, 3, 15),
        coords: [37.2982, -113.0263],
        message: "Hiking through the majestic canyons of Zion. 🥾",
        image: "zion.jpg"
    },
    {
        location: "First Anniversary: Cannon Beach, Oregon",
        date: "May 21, 2024",
        timestamp: new Date(2024, 4, 21),
        coords: [45.8918, -123.9615],
        message: "Our 1st Anniversary! Celebrating a year of marriage with Haystack Rock and the ocean breeze. 🌊",
        image: "images/anniversary_2024.jpg",
        type: "wedding"
    },
    {
        location: "Universal Orlando Resort, Florida",
        date: "December 2024",
        timestamp: new Date(2024, 11, 20),
        coords: [28.4724, -81.4690],
        message: "Bringing out our inner kids at Universal! 🎢",
        image: "universal.jpg"
    },
    {
        location: "Key West, Florida",
        date: "January 2025",
        timestamp: new Date(2025, 0, 5),
        coords: [24.5554, -81.7842],
        message: "Boating and sunset views at the southernmost point. 🛥️",
        image: "key_west.jpg"
    },
    {
        location: "Wooden Shoe Tulip Farm, Oregon",
        date: "April 2025",
        timestamp: new Date(2025, 3, 15),
        coords: [45.0805, -122.7025],
        message: "Our annual tradition! Walking through the colorful tulip fields. 🌷",
        image: "tulips.jpg"
    },
    {
        location: "Second Anniversary: Heceta Head Lighthouse, OR",
        date: "May 21, 2025",
        timestamp: new Date(2025, 4, 21),
        coords: [44.1373, -124.1278],
        message: "Our 2nd Anniversary! Coastal views and lighthouse memories. Still 'shore' about us! ⚓❤️",
        image: "images/anniversary_2025.jpg",
        type: "wedding"
    },
    {
        location: "Yosemite & Sierra Nevada",
        date: "July 2025",
        timestamp: new Date(2025, 6, 12),
        coords: [37.8651, -119.5383],
        message: "Waterfalls and mountains with Daddy and Amma. 🏔️",
        image: "yosemite.jpg"
    },
    {
        location: "Redwoods",
        date: "October 2025",
        timestamp: new Date(2025, 9, 15),
        coords: [41.7558, -124.0301],
        message: "Feeling small among the giants. 🌲",
        image: "redwoods.jpg"
    },
    {
        location: "Haleakalā National Park, Hawaii",
        date: "November 2025",
        timestamp: new Date(2025, 10, 14),
        coords: [20.7204, -156.1552],
        message: "Sunrise above the clouds! One of the most magical moments of our Hawaii trip. 🌋",
        image: "haleakala.jpg"
    },
    {
        location: "Hawaii Volcanoes National Park",
        date: "November 2025",
        timestamp: new Date(2025, 10, 18),
        coords: [19.4291, -155.2569],
        message: "Exploring the raw power of the Island of Hawai'i. 🌋",
        image: "volcanoes.jpg"
    },
    {
        location: "Maui & Big Island",
        date: "November 2025",
        timestamp: new Date(2025, 10, 20),
        coords: [20.7984, -156.3319],
        message: "Volcanoes and oceans. The best way to end the year! 🏝️",
        image: "hawaii_2025.jpg"
    }
];

// Add markers to the map
/* memories.forEach(m => {
    const popupContent = `
        <div style="text-align:center;">
            <h3>${m.location}</h3>
            <p>${m.message}</p>
            <img src="${m.image}" style="width:150px; border-radius:10px;">
        </div>
    `;

    L.marker(m.coords)
     .addTo(map)
     .bindPopup(popupContent, { className: 'custom-popup' });
}); */

// Function to create confetti
function startCelebration() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#e91e63', '#d4af37', '#ff69b4', '#ffffff'][Math.floor(Math.random() * 4)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        
        // Clean up DOM after animation
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Sort: Oldest to Newest
memories.sort((a, b) => a.timestamp - b.timestamp);

// OR Sort: Newest to Oldest (uncomment the line below to use)
// memories.sort((a, b) => b.timestamp - a.timestamp);

let currentYear = null;
memories.forEach((m, index) => {
    // Add Marker to Map	
	const marker = L.marker(m.coords, {
    icon: m.type === "first_meeting" ? starIcon : 
          m.type === "wedding" ? heartIcon : new L.Icon.Default()
    }).addTo(map);

    const popupContent = `
        <div style="text-align:center;">
            <h3 style="margin:0;">${m.location}</h3>
            <p style="font-size:12px; color:#666;">${m.date || ''}</p>
            <img src="${m.image}" style="width:180px; border-radius:10px; margin-top:5px;">
            <p style="margin-top:10px;">${m.message}</p>
        </div>
    `;
    marker.bindPopup(popupContent);
	
	const memoryYear = m.timestamp.getFullYear();

    // Add a Year Header if the year changes
    if (memoryYear !== currentYear) {
        currentYear = memoryYear;
        const yearHeader = document.createElement('div');
        yearHeader.className = 'year-header';
        yearHeader.innerHTML = `<h2>${currentYear}</h2>`;
        memoryList.appendChild(yearHeader);
    }

    // Create Sidebar Card
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.innerHTML = `
        <h3>${m.location}</h3>
        <small>${m.date || 'Memorable Moment'}</small>
    `;

    // Click Card -> Fly to Map Location
    card.onclick = () => {
    map.flyTo(m.coords, 14, { duration: 2 });
    marker.openPopup();

    // Trigger celebration if it's the wedding day
    if (m.type === "wedding") {
        startCelebration();
    }
};

    memoryList.appendChild(card);
});

// The "First Meeting" Special Marker
L.marker([12.2958, 76.6394], {icon: starIcon})
 .addTo(map)
 .bindPopup(`
    <div style="text-align:center;">
        <h2 style="color: #d4af37;">✨ Where It All Began ✨</h2>
        <p><b>Mysuru, November 2022</b></p>
        <p>The very first time we met. Who knew this was the start of our global adventure?</p>
        <img src="images/first_meeting.jpg" style="width:200px; border-radius:15px; border: 3px solid #d4af37;">
    </div>
 `).openPopup(); // This makes it open automatically when the map loads!

/* const today = new Date();
const monthDay = `${today.getMonth() + 1}-${today.getDate()}`;

if (monthDay === "5-21" || monthDay === "12-4") {
    alert("Happy Anniversary, Varshini! Check the map for a special memory today.");
    // You could also center the map on a specific "Home" marker
} */

// 4. Anniversary Logic
const today = new Date();
if ((today.getMonth() + 1 === 5 && today.getDate() === 21) || 
    (today.getMonth() + 1 === 12 && today.getDate() === 4)) {
    // Add a heart overlay or special greeting here
    console.log("Happy Anniversary!");
}

// Initial animation on load
window.onload = () => {
    // Start at a high altitude over the ocean
    map.setView([20, 0], 2); 
    
    // After 1.5 seconds, fly to the "First Meeting" in Mysuru
    setTimeout(() => {
        map.flyTo([12.2958, 76.6394], 12, {
            animate: true,
            duration: 3 // 3 seconds of smooth gliding
        });
    }, 1500);

};
