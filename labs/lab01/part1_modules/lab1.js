let _ = require('lodash');
let moment = require('moment'); 

let holidays = [
    { name: 'Christmas', date: '2025-12-25' },
    { name: 'Canada Day', date: '2025-07-01' },
    { name: 'New Year', date: '2025-01-01' }
];

holidays.forEach(holiday => {
    let today = moment(); 
    let holidayDate = moment(holiday.date); 
    let daysUntil = holidayDate.diff(today, 'days'); 
    console.log(`There are ${daysUntil} days until ${holiday.name}.`);
});

let randomHoliday = _.sample(holidays);
if (randomHoliday) {
    console.log(`Random Holiday: ${randomHoliday.name} on ${randomHoliday.date}`);
}

let holidayNames = holidays.map(holiday => holiday.name);
console.log(`Index of Christmas: ${_.indexOf(holidayNames, 'Christmas')}`);
console.log(`Index of Canada Day: ${_.indexOf(holidayNames, 'Canada Day')}`);
