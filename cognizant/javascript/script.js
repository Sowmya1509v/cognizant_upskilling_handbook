// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");

window.addEventListener('load', () => {
    alert("Page fully loaded! Browse our upcoming events.");
});

// 2. Syntax, Data Types, and Operators
class Event {
    constructor(name, date, seats, category) {
        this.name = name;
        this.date = new Date(date);
        this.seats = seats;
        this.category = category;
    }
    
    checkAvailability() {
        return this.seats > 0 && this.date >= new Date();
    }
}

// Initial events data
let events = [
    new Event("Community Bake Sale", "2023-12-15", 50, "Food"),
    new Event("Local Music Festival", "2023-11-20", 0, "Music"),
    new Event("Art Workshop", "2023-12-01", 15, "Art"),
    new Event("Tech Talk: Web Development", "2023-12-10", 30, "Technology"),
    new Event("Yoga in the Park", "2023-11-25", 15, "Health"),
    new Event("Book Club Meeting", "2023-12-05", 20, "Literature")
];

// 3. Conditionals, Loops, and Error Handling
function displayValidEvents() {
    const today = new Date();
    return events.filter(event => {
        try {
            return event.date >= today && event.seats > 0;
        } catch (error) {
            console.error(`Error processing event ${event.name}:`, error);
            return false;
        }
    });
}

// 4. Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, date, seats, category) {
    events.push(new Event(name, date, seats, category));
    renderEvents();
    updateEventDropdown();
}

function registerUser(eventName) {
    try {
        const event = events.find(e => e.name === eventName);
        if (event && event.seats > 0) {
            event.seats--;
            return true;
        }
        return false;
    } catch (error) {
        console.error("Registration error:", error);
        return false;
    }
}

// Closure for tracking registrations by category
function createCategoryTracker() {
    const registrations = {};
    
    return function(category) {
        registrations[category] = (registrations[category] || 0) + 1;
        console.log(`Total registrations for ${category}: ${registrations[category]}`);
        return registrations[category];
    };
}

const trackRegistration = createCategoryTracker();

// 5. Objects and Prototypes - Already implemented in Event class

// 6. Arrays and Methods
function getEventsByCategory(category) {
    return category === 'all' 
        ? displayValidEvents() 
        : displayValidEvents().filter(event => event.category === category);
}

// 7. DOM Manipulation & 8. Event Handling
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
    updateEventDropdown();
    setupEventListeners();
});

function renderEvents(eventsToRender = displayValidEvents()) {
    const eventsContainer = document.querySelector('#events-container');
    eventsContainer.innerHTML = '';
    
    eventsToRender.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        
        card.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date.toDateString()}</p>
            <p><strong>Seats Available:</strong> ${event.seats}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <button class="register-btn" data-event="${event.name}">Register</button>
        `;
        
        eventsContainer.appendChild(card);
    });
}

function updateEventDropdown() {
    const eventSelect = document.querySelector('#event');
    eventSelect.innerHTML = '';
    
    displayValidEvents().forEach(event => {
        const option = document.createElement('option');
        option.value = event.name;
        option.textContent = `${event.name} (${event.date.toDateString()})`;
        eventSelect.appendChild(option);
    });
}

function setupEventListeners() {
    // Register button click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('register-btn')) {
            const eventName = e.target.dataset.event;
            if (registerUser(eventName)) {
                const event = events.find(e => e.name === eventName);
                trackRegistration(event.category);
                alert(`Successfully registered for ${eventName}!`);
                renderEvents();
                updateEventDropdown();
            } else {
                alert(`Registration failed for ${eventName}. No seats available.`);
            }
        }
    });

    // Category filter
    document.querySelector('#category-filter').addEventListener('change', (e) => {
        const category = e.target.value;
        renderEvents(getEventsByCategory(category));
    });

    // Quick search
    document.querySelector('#search').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = displayValidEvents().filter(event => 
            event.name.toLowerCase().includes(term) ||
            event.category.toLowerCase().includes(term)
        );
        renderEvents(filtered);
    });

    // Form submission
    document.querySelector('#registration-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const eventName = form.elements['event'].value;
        
        if (!name || !email || !eventName) {
            alert('Please fill all fields');
            return;
        }
        
        if (registerUser(eventName)) {
            const event = events.find(e => e.name === eventName);
            trackRegistration(event.category);
            alert(`Thanks ${name}! You're registered for ${eventName}. Confirmation sent to ${email}`);
            form.reset();
            renderEvents();
            updateEventDropdown();
            
            // Simulate sending data to server
            simulateRegistration({ name, email, eventName });
        } else {
            alert(`Sorry ${name}, registration failed for ${eventName}. No seats available.`);
        }
    });
}

// 9. Async JS, Promises, Async/Await
async function simulateRegistration(userData) {
    document.querySelector('#loading').style.display = 'block';
    
    try {
        // Simulate API call with delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In a real app, this would be a fetch call:
        // const response = await fetch('https://api.example.com/registrations', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(userData)
        // });
        
        console.log('Registration data sent:', userData);
    } catch (error) {
        console.error('Registration submission error:', error);
    } finally {
        document.querySelector('#loading').style.display = 'none';
    }
}

// 10. Modern JavaScript Features
function addNewEvent({ name, date = new Date(), seats = 20, category = 'General' }) {
    addEvent(name, date, seats, category);
}

// Example usage:
// addNewEvent({ name: "New Year's Party", date: "2023-12-31", seats: 100, category: "Social" });

// 11. Working with Forms - Already implemented in form submission handler

// 12. AJAX & Fetch API - Implemented in simulateRegistration function

// 13. Debugging and Testing - Implemented with try-catch blocks throughout

// 14. jQuery and JS Frameworks (commented as optional)
/*
// If jQuery were included, we could use:
$(document).ready(function() {
    $('.event-card').fadeIn();
    $('#registerBtn').click(function() {
        // jQuery click handler
    });
});
// Benefit of React/Vue would be component-based architecture and reactive data binding
*/