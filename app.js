		var slider = document.getElementById('sliderStatus');
		var message = document.getElementById('sliderMessage');
		slider.addEventListener('input' , function(){
			sliderChange(callback());
		});
		slider.classList.remove("orange", "yellow", "lightgreen", "green");

		function sliderChange(callback){
			if(slider.value <= 9){
				message.innerHTML = "Неделава беше ужасна..";
				message.style.color =  "#ec1c24";
				slider.style.background = "#ec1c24";
				slider.classList.add("red");
				slider.classList.remove("orange")
			} else if(slider.value <= 39){
				message.innerHTML = "Можеше и подобро.";
				message.style.color = "#ff7f27";
				slider.style.background = "#ff7f27";
				slider.classList.add("orange");
				slider.classList.remove("yellow");
			} else if(slider.value <= 60){
				message.innerHTML = "Уште една обична работна недела.";
				message.style.color = "#fff200";
				slider.style.background = "#fff200";
				slider.classList.add("yellow");
				slider.classList.remove("lightgreen");
			} else if(slider.value <= 90){
				message.innerHTML = "Забавно беше.";
				message.style.color = "#c4ff0e";
				slider.style.background = "#c4ff0e";
				slider.classList.add("lightgreen");
				slider.classList.remove("green");
			}else if(slider.value <= 100){
				message.innerHTML = "Wow, одлична недела.";
				message.style.color = "#0ed145";
				slider.style.background = "#0ed145";
				slider.classList.add("green");
			}else if(slider.value == 100){
				var greenMargin = document.querySelector(".green");
				greenMargin.style.marginLeft = "20px";
			}
		}
		$(function(){
            $(window).on('load', function(){
                $('#sliderStatus').attr({
                    value: '52'
                });
                message.innerHTML = "Уште една обична работна недела.";
                message.style.color = "#fff200";
                slider.style.background = "#fff200";//<-- yellow
                slider.classList.add("yellow");
                slider.classList.remove("lightgreen");
            });
        });

