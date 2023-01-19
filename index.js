// Setting the month and year in the header
const dateObject = new Date();
const month_year = document.getElementById('month-year');
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

month_year.innerText = `${monthNames[dateObject.getMonth()]}, ${dateObject.getFullYear()}`;





// Adding the habits icons
const habits = {
    '📖' : 'read', 
    '💧' : 'drink-water', 
    '💪' : 'train', 
    '💤' : 'sleep', 
    '🐕' : 'walk-with-pet', 
    '📝' : 'work'
};
const habitsIcons = document.getElementById('habits-icons');

Object.keys(habits).forEach((h) => {
    const habit = document.createElement('div');
    
    habit.className = 'habits';
    habitsIcons.appendChild(habit);
})


// Adding the days
const qtMonthDays = new Date(dateObject.getFullYear(), dateObject.getMonth(), 0).getDate();
const days = document.getElementById('days');

for(let i=1; i != qtMonthDays+1; i++) {

    const day = document.createElement('div');
    
    day.className = 'day';
    day.innerHTML = `<div>day ${i}</div>`;

    Object.keys(habits).forEach((key) => {
        const input = document.createElement('input');
        
        input.type = 'checkbox';
        input.className = habits[key];

        day.appendChild(input)
    })

    days.appendChild(day);

}