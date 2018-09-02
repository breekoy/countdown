$.getJSON('https://api.timezonedb.com/v2.1/get-time-zone?key=44QN6ASGVSEB&format=json&by=zone&zone=Asia/Manila', function(data){
			let dateNow = new Date(data.formatted);
			let dateChristmas = new Date("Dec 25, 2018 00:00:00");
			let dateNewYear = new Date("Jan 01, 2019 00:00:00");
			let differenceChristmas = dateChristmas.getTime() - dateNow.getTime();
			let differenceNewYear = dateNewYear.getTime() - dateNow.getTime();
			
			let timer = setInterval(function(){
				let daysLeftBeforeXmas = Math.floor(differenceChristmas / (1000 * 60 * 60 * 24));
				let hoursLeftBeforeXmas = Math.floor((differenceChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutesLeftBeforeXmas = Math.floor((differenceChristmas % (1000 * 60 * 60)) / (1000 * 60));
				let secondsLeftBeforeXmas = Math.floor((differenceChristmas % (1000 * 60))/ 1000);

				let daysLeftBeforeNewYear = Math.floor(differenceNewYear / (1000 * 60 * 60 * 24));
				let hoursLeftBeforeNewYear = Math.floor((differenceNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				let minutesLeftBeforeNewYear = Math.floor((differenceNewYear % (1000 * 60 * 60)) / (1000 * 60));
				let secondsLeftBeforeNewYear = Math.floor((differenceNewYear % (1000 * 60))/ 1000);

				document.getElementById('countdownChristmas').innerHTML = daysLeftBeforeXmas + ' days ' + 
					hoursLeftBeforeXmas + ' hours ' + 
					minutesLeftBeforeXmas + ' minutes ' +
					secondsLeftBeforeXmas + ' seconds ' +
					'before christmas!';

				document.getElementById('countdownNewYear').innerHTML = daysLeftBeforeNewYear + ' days ' + 
					hoursLeftBeforeNewYear + ' hours ' + 
					minutesLeftBeforeNewYear + ' minutes ' +
					secondsLeftBeforeNewYear + ' seconds ' +
					'before new year!';;

				differenceChristmas -= 1000;
				differenceNewYear -= 1000;
			}, 1000);
		});