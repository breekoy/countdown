$.getJSON('https://api.timezonedb.com/v2.1/get-time-zone?key=44QN6ASGVSEB&format=json&by=zone&zone=Asia/Manila', function(data){
			let dateNow = new Date(data.formatted);
			let dateChristmas = new Date(dateNow.getFullYear(), 11, 25);
			let dateNewYear = new Date(dateNow.getFullYear() + 1, 0, 1);
			let differenceChristmas = dateChristmas.getTime() - dateNow.getTime();
			let differenceNewYear = dateNewYear.getTime() - dateNow.getTime();

			dateChristmas = (differenceChristmas < 0) 
				? new Date(dateChristmas.getFullYear() + 1, dateChristmas.getMonth(), dateChristmas.getDate())
				: dateChristmas;

			dateNewYear = (differenceNewYear < 0) 
				? new Date(dateNewYear.getFullYear() + 1, dateNewYear.getMonth(), dateChristmas.getDate())
				: dateNewYear;

			differenceChristmas = dateChristmas.getTime() - dateNow.getTime();
			differenceNewYear = dateNewYear.getTime() - dateNow.getTime();

			
			setInterval(function(){
				let daysLeftBeforeXmas = Math.floor(differenceChristmas / (1000 * 60 * 60 * 24));
				let hoursLeftBeforeXmas = Math.floor((differenceChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutesLeftBeforeXmas = Math.floor((differenceChristmas % (1000 * 60 * 60)) / (1000 * 60));
				let secondsLeftBeforeXmas = Math.floor((differenceChristmas % (1000 * 60))/ 1000);

				let daysLeftBeforeNewYear = Math.floor(differenceNewYear / (1000 * 60 * 60 * 24));
				let hoursLeftBeforeNewYear = Math.floor((differenceNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutesLeftBeforeNewYear = Math.floor((differenceNewYear % (1000 * 60 * 60)) / (1000 * 60));
				let secondsLeftBeforeNewYear = Math.floor((differenceNewYear % (1000 * 60))/ 1000);

				const pluralize = (count, noun, suffix = 's ') =>
  					`${count} ${noun}${count !== 1 ? suffix : ' '}`;

				document.getElementById('countdownChristmas').innerHTML = pluralize(daysLeftBeforeXmas, 'day') + 
					pluralize(hoursLeftBeforeXmas, 'hour') + 
					pluralize(minutesLeftBeforeXmas, 'minute') +
					pluralize(secondsLeftBeforeXmas, 'second') +
					'before christmas!';

				document.getElementById('countdownNewYear').innerHTML = pluralize(daysLeftBeforeNewYear, 'day') + 
					pluralize(hoursLeftBeforeNewYear, 'hour') + 
					pluralize(minutesLeftBeforeNewYear, 'minute') +
					pluralize(secondsLeftBeforeNewYear, 'second') +
					'before new year!';;

				differenceChristmas -= 1000;
				differenceNewYear -= 1000;
			}, 1000);
		});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'json/particlesjs-config.json');