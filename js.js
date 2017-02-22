
			//Variables
		
			var currentTime = 0;
			var number = '';
			var numberS = '';
			var numberM = '';
			var numberH = '';
			var interval = 1;
			var seconds = 0;
			var minutes = 0;
			var hours = 0;
			var lapNum = 0;
			var clearS = 0;
			var lapArea = '';
			
			var numberLap = '';
			var numberSLap = '';
			var numberMLap = '';
			var numberHLap = '';
			var currentTimeLap = 0;
			var secondsLap = 0;
			var minutesLap = 0;
			var hoursLap = 0;
			
			var firstTime2 = null;

			//Scripts



			if (localStorage.FirstTimeHere101 == "Nope") {

			} else {
			 localStorage.setItem("FirstTimeHere101",  "Nope");
			 setTimeout(function() {clearTime()}, 1500);
			}

			function updater2Lap() {
				if (hoursLap < 10) {
				 numberHLap = 0;
				} else {
				 numberHLap = '';
				}
				if (currentTimeLap > 99) {
				 currentTimeLap = currentTimeLap - 100;
				 secondsLap = secondsLap + 1;
				}
				if (currentTimeLap < 10) {
				 numberLap = 0;
				} else {
				 numberLap = '';
				}
				if (secondsLap < 10) {
				 numberSLap = 0;
				} else {
				 numberSLap = '';
				}
				if (minutesLap < 10) {
				 numberMLap = 0;
				} else {
				 numberMLap = '';
				}

				
				if (secondsLap > 59) {
				 secondsLap = secondsLap - 60;
				 minutesLap = minutesLap + 1;
				}
				if (minutesLap > 59) {
				 minutesLap = minutesLap - 60;
				 hoursLap = hoursLap + 1;
				}
			}
			
			function updater2() {
			
				if (clearS == 1) {
				 document.getElementById('clear2').style = "visibility: hidden";
				} else {
				 document.getElementById('clear2').style = "visibility: visible";
				}
			
				if (hours < 10) {
				 numberH = 0;
				} else {
				 numberH = '';
				}
				if (currentTime > 99) {
				 currentTime = currentTime - 100;
				 seconds = seconds + 1;
				}
				if (currentTime < 10) {
				 number = 0;
				} else {
				 number = '';
				}
				if (seconds < 10) {
				 numberS = 0;
				} else {
				 numberS = '';
				}
				if (minutes < 10) {
				 numberM = 0;
				} else {
				 numberM = '';
				}

				
				if (seconds > 59) {
				 seconds = seconds - 60;
				 minutes = minutes + 1;
				}
				if (minutes > 59) {
				 minutes = minutes - 60;
				 hours = hours + 1;
				}
			}
			
			function updateTimer() {
				deleteWhat = document.getElementById('deletionOfLaps').value;
				document.getElementById('timeTitle').innerHTML = numberH + hours + ":" + numberM + minutes + ":" + numberS + seconds + "." + number + currentTime + " - Stop Watch";
				document.getElementById('timeDisplay').innerHTML = numberH + hours + ":" + numberM + minutes + ":" + numberS + seconds + "." + number + currentTime;
				document.getElementById('timeDisplayLap').innerHTML = numberHLap + hoursLap + ":" + numberMLap + minutesLap + ":" + numberSLap + secondsLap + "." + numberLap + currentTimeLap;
			}
			
			
			function startUp() {
				clearInterval(interval);
				setInterval( function() { updateTimer(); });
				setInterval( function() { updater2(); });
				setInterval( function() { updater2Lap(); });
				/*if (firstTime2 == null) {
				 clearTime();
				 setTimeout( function() { alert('Welcome New Comer'); }, 500);
				 firstTime2 = 2;
				} 
				if (firstTime2 == 2) {
				 alert('Welcome Back');	
				}*/
			}
			
			function startTimer() {
				clearInterval(interval);
				interval = setInterval( function() { addTime(); }, 10)
				document.getElementById('lap-btn').style = "visibility: visible";
				document.getElementById('stopT').style = "visibility: visible";
				document.getElementById('startT').style = "visibility: hidden";
				document.getElementById('clear2').style = "visibility: hidden";
				clearS = 1;
			}
			
			function addTime() {
				currentTime = currentTime + 1;
				currentTimeLap = currentTimeLap + 1;
				clearS = 1;
			}
			
			function stopTime() {
				clearInterval(interval);
				document.getElementById('clear2').style = "visibility: visible";
				document.getElementById('lap-btn').style = "visibility: hidden";
				document.getElementById('stopT').style = "visibility: hidden";
				document.getElementById('startT').style = "visibility: visible";
				clearS = 0;
			}
			function clearTime() {
				clearInterval(interval);
				currentTime = 0;
				seconds = 0;
				minutes = 0;
				hours = 0;
				currentTimeLap = 0;
				secondsLap = 0;
				minutesLap = 0;
				hoursLap = 0;
				lapNum = 0;
				document.getElementById('lapArea').innerHTML = "";
				clearS = 1;
			}
			function lap() {
				lapNum = lapNum + 1;
				lapAreas = "<p class='noMargin'>Lap " + lapNum + " - " + "<span class='noMargin inText'>" + numberHLap + hoursLap + ":" + numberMLap + minutesLap + ":" + numberSLap + secondsLap + "." + numberLap + currentTimeLap + "</span></p>" + 
				document.getElementById('lapArea').innerHTML;
				document.getElementById('lapArea').innerHTML = lapAreas;
				currentTimeLap = 0;
				secondsLap = 0;
				minutesLap = 0;
				hoursLap = 0;
			}
			
			function saver(Storage) {
				 localStorage.currentTimeDATA = currentTime;
				 localStorage.setItem("intervalDATA", interval);
				 localStorage.intervalDATA = interval;
				 localStorage.secondsDATA = seconds;
				 localStorage.minutesDATA = minutes;
				 localStorage.hoursDATA = hours;
				 localStorage.lapNumDATA = lapNum;
				 localStorage.clearSDATA = clearS;
				 localStorage.lapAreaDATA = lapArea;
				 localStorage.setItem("lapAreaDATA", document.getElementById('lapArea').innerHTML);
				 localStorage.currentTimeLapDATA= currentTimeLap;
				 localStorage.secondsLapDATA = secondsLap;
				 localStorage.minutesLapDATA = minutesLap;
				 localStorage.hoursLapDATA = hoursLap;
			        }
			
			function load() {
			 currentTime = Number(localStorage.currentTimeDATA);
			 clearS = Number(localStorage.clearSDATA);
			 interval = localStorage.getItem("intervalDATA");
			 seconds = Number(localStorage.secondsDATA);
			 minutes = Number(localStorage.minutesDATA);
			 hours = Number(localStorage.hoursDATA);
			 lapNum = Number(localStorage.lapNumDATA);
			 interval = Number(localStorage.intervalDATA);
			 seconds = Number(localStorage.secondsDATA);
			 minutes = Number(localStorage.minutesDATA);
			 hours = Number(localStorage.hoursDATA);
			 document.getElementById('lapArea').innerHTML = localStorage.getItem("lapAreaDATA");
			 currentTimeLap = Number(localStorage.currentTimeLapDATA);
			 secondsLap = Number(localStorage.secondsLapDATA);
			 minutesLap = Number(localStorage.minutesLapDATA);
			 hoursLap = Number(localStorage.hoursLapDATA);
			}
			
			function deleteLaps() {
			 if(deleteWhat == "all") {
			  document.getElementById('lapArea').innerHTML = '';
			  localStorage.setItem("lapAreaDATA", '');
			  alert('Cleared All Laps And Lap Data')
			 }
			 if(deleteWhat == "none") {
			  alert('Please Select An Option');
			 }
			}

			startUp();
