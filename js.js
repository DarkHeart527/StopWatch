
			//Variables
		
			var currentTime = 0;
			var number = '';
			var numberS = '';
			var numberM = '';
			var numberH = '';
			var interval = null;
			var seconds = 0;
			var minutes = 0;
			var hours = 0;
			var lapNum = 0;
			
			var numberLap = '';
			var numberSLap = '';
			var numberMLap = '';
			var numberHLap = '';
			var currentTimeLap = 0;
			var secondsLap = 0;
			var minutesLap = 0;
			var hoursLap = 0;
			
			//Scripts

			function saver(Storage) {
				 localStorage.currentTimeDATA = currentTime;
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

				
				if (secondsLap > 60) {
				 secondsLap = secondsLap - 60;
				 minutesLap = minutesLap + 1;
				}
				if (minutesLap > 60) {
				 minutesLap = minutesLap - 60;
				 hoursLap = hoursLap + 1;
				}
			}
			
			function updater2() {
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
				
				if (seconds == 0) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 1) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 2) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 3) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 4) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 5) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 6) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 7) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 8) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 9) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 10) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 11) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 12) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 13) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 14) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 15) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 16) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 17) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 18) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 19) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 20) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 21) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 22) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}			
				if (seconds == 23) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 24) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 25) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 26) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 27) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 28) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 29) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 30) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 31) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 32) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 33) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 34) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 35) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 36) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 37) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 38) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 39) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 40) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}				
				if (seconds == 41) {
				 document.getElementById('timeDisplay').style = "color: red"
				}				
				if (seconds == 42) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 43) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 44) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 45) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 46) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 47) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 48) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 49) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 50) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 51) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 52) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 53) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 54) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 55) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 56) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 57) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 58) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
				if (seconds == 59) {
				 document.getElementById('timeDisplay').style = "color: red"
				}
				if (seconds == 60) {
				 document.getElementById('timeDisplay').style = "color: blue"
				}
			}
			
			function updateTimer() {
				document.getElementById('timeTitle').innerHTML = numberH + hours + ":" + numberM + minutes + ":" + numberS + seconds + "." + number + currentTime + " - Stop Watch";
				document.getElementById('timeDisplay').innerHTML = numberH + hours + ":" + numberM + minutes + ":" + numberS + seconds + "." + number + currentTime;
				document.getElementById('timeDisplayLap').innerHTML = numberHLap + hoursLap + ":" + numberMLap + minutesLap + ":" + numberSLap + secondsLap + "." + numberLap + currentTimeLap;
			}
			
			
			function startUp() {
				clearInterval(interval);
				setInterval( function() { updateTimer(); })
				setInterval( function() { updater2(); })
				setInterval( function() { updater2Lap(); })
			}
			
			function startTimer() {
				clearInterval(interval);
				interval = setInterval( function() { addTime(); }, 10)
				document.getElementById('lap-btn').style = "visibility: visible";
			}
			
			function addTime() {
				document.getElementById('clear2').style = "visibility: hidden";
				currentTime = currentTime + 1;
				currentTimeLap = currentTimeLap + 1;
			}
			function stopTime() {
				clearInterval(interval);
				document.getElementById('clear2').style = "visibility: visible";
				document.getElementById('lap-btn').style = "visibility: hidden";
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
			}
			function lap() {
				lapNum = lapNum + 1;
				document.getElementById('lapArea').innerHTML = "<p class='noMargin'>Lap " + lapNum + " - " + "<span class='noMargin inText'>" + numberHLap + hoursLap + ":" + numberMLap + minutesLap + ":" + numberSLap + secondsLap + "." + numberLap + currentTimeLap + "</span></p>" + 
				document.getElementById('lapArea').innerHTML 
				currentTimeLap = 0;
				secondsLap = 0;
				minutesLap = 0;
				hoursLap = 0;
				
			}
			
			function load() {
			 currentTime = Number(localStorage.currentTimeDATA)	
			}
