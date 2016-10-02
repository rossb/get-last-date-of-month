const GetMidnightDate = require('get-midnight-date');

function GetLastDateOfMonth(date) {

	let dateObj = GetMidnightDate(date);
	let thisMonth = dateObj.getMonth();

	while (dateObj.getMonth() === thisMonth) {
		dateObj.setDate(dateObj.getDate() + 1);
	}

	dateObj.setDate(dateObj.getDate() - 1);

	return dateObj;

}

module.exports = GetLastDateOfMonth;
