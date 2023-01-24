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

Object.keys(habits).forEach((habitIcon) => {
    const habit = document.createElement('div');
    
    habit.className = 'habits';
    habit.innerText = habitIcon;

    habitsIcons.appendChild(habit);
})





// Adding the days
const qtMonthDays = new Date(dateObject.getFullYear(), dateObject.getMonth(), 0).getDate();
const days = document.getElementById('days');

for(let i=1; i != qtMonthDays+1; i++) {

    const day = document.createElement('div');
    
    day.id = 'day' + i;
    day.className = 'day';
    day.innerHTML = `<div>day ${i}</div>`;

    Object.keys(habits).forEach((key) => {
        const input = document.createElement('input');
        
        input.type = 'checkbox';
        input.name = habits[key]

        day.appendChild(input)
    })

    days.appendChild(day);

}





// Structuring data
let data = JSON.parse(window.localStorage.getItem('@data')) || {
    'read' : [],
    'drink-water': [],
    'train' : [],
    'sleep' : [],
    'walk-with-pet' : [],
    'work' : []
}





// Adding day on form change 
let form = document.querySelector('form')

form.addEventListener('change', ()=>{

    Object.keys(habits).forEach((key)=>{
        habitName = habits[key]

        let allInputs = Array.from(document.getElementsByName(habitName))
        let checkedInputs = []
        
        allInputs.forEach((input) => {
            if(input.checked == true) {
                return checkedInputs.push(input.parentElement.id)
            }
        })

        data[habitName] = checkedInputs

    })

    window.localStorage.setItem('@data', JSON.stringify(data))

})





//Adding checked days on page load/reload
Object.keys(data).forEach((habitName) => {

    data[habitName].forEach((day)=>{
        let parent = document.querySelector('#' + day)
        let inputs = parent.querySelectorAll(`input[name="${habitName}"]`)
        
        inputs.forEach((input)=>{
            input.checked =  true
        })

    })

})