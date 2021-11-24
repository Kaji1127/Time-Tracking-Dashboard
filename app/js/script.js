/* ======= Variables ======= */
const period = document.querySelectorAll('.period');
const hoursCurrent = document.querySelectorAll('.hour');
const hoursPrev = document.querySelectorAll('.previous');

/* ======= Define functions ======= */
const fetchData = () => {
	fetch('../data.json')
		.then((response) => response.json())
		.then((data) => (json = data));
};

const activePeriod = (e) => {
	period.forEach((el) => {
		el.classList.remove('active');
	});
	e.target.classList.add('active');
};

const getDailyData = (e) => {
	activePeriod(e);
	hoursCurrent.forEach((el, i) => {
		hoursCurrent[i].innerHTML = `${json[i].timeframes.daily.current}hrs`;
		hoursPrev[i].innerHTML = `Yesterday - ${json[i].timeframes.daily.previous}hrs`;
	});
};

const getWeeklyData = (e) => {
	activePeriod(e);
	hoursCurrent.forEach((el, i) => {
		hoursCurrent[i].innerHTML = `${json[i].timeframes.weekly.current}hrs`;
		hoursPrev[i].innerHTML = `Last Week - ${json[i].timeframes.weekly.previous}hrs`;
	});
};

const getMonthlyData = (e) => {
	activePeriod(e);
	hoursCurrent.forEach((el, i) => {
		hoursCurrent[i].innerHTML = `${json[i].timeframes.monthly.current}hrs`;
		hoursPrev[i].innerHTML = `Last Month - ${json[i].timeframes.monthly.previous}hrs`;
	});
};

fetchData();

/*========= Event Handler =========*/
period[0].addEventListener('click', getDailyData);
period[1].addEventListener('click', getWeeklyData);
period[2].addEventListener('click', getMonthlyData);
