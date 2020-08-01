var chemical = 0;
var liquid = 0;
var temp = 0;
var isChemChecked = false;
var isWaterChecked = false;
var isTempChecked = false;

function findResult(){
	msg = "";
	if(chemical==1){ //if carbon-based life and water as a solvent
		msg = "Carbon is an element with four valence electrons. This makes it especially good at connecting to other atoms and itself. "+
		"It has the abillity to create double bonds and is much smaller than silicon-creating more fluidity. ";
		if(liquid==1){ 
			msg = msg + "<br><br>Water has proven to be very useful to life on Earth with one of its many functions being that it allows for " +
			" the facilitation of the transport of 'important building blocks inside a cell' (Linde). From an Earth centered perspective, "+
			"it is difficult to assume life can arise anywhere without it.<br><br>In order to sustain liquid form, the planet must be within "+
			"0 degrees Celsius and 100 degress Celsius on an Earth-like atmospheres. According to The Hunt for Alien Life, "+
			"We note that is not only the temperature but also the pressure which determines when a substance can exist in liquid form (Linde)"+
			"You chose ";
			if(temp==1){//hot
				msg = msg + "a hot climate. When it comes to carbon-based life and water as a solvent in extremely hot temperatures, we can take inspiration from Venus. "+
				"Venus is small and terrestrial. It has a thick carbon-dioxide and nitrogen atomosphere. No water is suspected to exist on the "+
				"surface, but there is water vapor in the atmosphere. At 100km, an ozone layer exists which could prove to have similar chemical "+
				"reactions like those on Earth. 'Most Earth-like conditions that can be found today on Venus are in the lower cloud layer of the atmosphere' "+
				"Knowing this, we must be able to imagine life would have to somehow be airborn since life would likely exist in the clouds and not the surface "+
				"or subsurface. Taking note from Earth, extrateresstrial life at its simplest here could look like an extremophile known as thermoacidophiles. (Kolb 402). "+
				"<img src='thermo.jpg'><br><br> A more imaginative idea of what life could eventually evolve to look like is described by Harold Morowitz and "+
				" Carl Sagan as ping pong ball sized autotrophs. These creatures would have a few centimeters thick diameter due to its membrane. "+
				"Importantly, it would be like a balloon that fills with photosynthetic hyrdrogen to keep a certain pressure, so that it "+
				"will not catch a downdrift into hotter/unlivable areas.<br><br><img src='pingpongjoke.png'><img src='pingpong.jpg'>";
			}
			if(temp==2){//ideal
				msg = msg + "an ideal climate. When it comes to carbon-based life at ideal temperatures and pressure, the best place to learn about life beyond Earth is"+
				" Earth itself. Here, water exists in the atmosphere, surface, and subsurface. The clearest example of life we see is the complexity of humanity. We are "+
				"what can be considered intelligent life. Less intelligent life coexists with us on earth. While humans and octopi may not look very similar, "+
				"we are both multicellular organisms who survive by consuming energy in the form of plants or animals rather than sunlight or chemical reactions. "+
				"Amazingly, we also share much in common with life that does use sunlight or chemical reactions and even singular celled organisms. After all, we "+
				"pass hereditary information through DNA and may share a common ancestor. The differences we see in the physical are all results of what it took"+
				" to survive in our respective environments. Extremophiles on Earth further broadan our understanding of what factors allow for "+
				"life.<br><br><img src='extremophiles.jpg'><br>Hollywood tends to favor humanoid aliens."+
				" If a new habitable world truly resembles conditions such as those on Earth, it wouldn't be too far fetched to believe that similar life to "+
				"humans would exist there. However, even on Earth, the environment is not heterogenous. Something as simple as the tilt of the Earth creates"+
				"intense differences in the climate at the equator compared to the polar caps. So there is a possibility that life can evolve from simple cells"+
				" to intelligent beings on this new world. However, much like on Earth, but just how the new organisms look likely will not be exactly the same as Earth" +
				" due to differences in gravity, atmospheric composition, liquid percentage, degree of axial tilt, distance from sun, etc.<br><img src='et.jpg'>";


			}
			if(temp==3){//cold
				msg = msg + "a cold climate. For water to remain a liquid at cold temperatures, pressure must be much higher or there could be other "+
				"geological factors at play. To explore these geological factors, let's consider both Mars ans Europa. <br><br>Mars is a cold desert "+
				"whose magnetosphere, atmosphere, and dyrosphere were steadily lost over time. In the past, wet periods could have existed due to magmatic "+
				"activity that lead to temporary channels, lakes, and maybe even oceans. Mar's tilt wobbling drastically can account for the change in location"+
				" of water from poles to equator to poles. The presence of a past atmosphere also meant Mars was slightly warmer though still cool at the time. "+
				"This leads to the idea that perhaps life had to adapt to a drying and cooling environment. An adaptation could have been the retreat of organisms "+
				"to subsurface environments. Extremophiles and microorganisms can search for organic nutrients that remain (Kolb 402). <br><br>Europa might "+
				" have a salty ocean. It is possible that the water and the rocks could have chemical reactions that produce hydrogen-rich "+
				"materials. In these areas of interaction between ocean and hot rocks, water can transport chemical nutrients that life may need for energy."
				+" Bacteria and extremophiles could use this chemical energy. Also, tides can heat and help create an ocean underneath the icy shell."+
				" and above the rocky core (NASA Europa). Some scientists say that evidence has already been found for life on Europa. They believe that the"+
				" discolored cracks in the ice surface. The general consensus is that these are likely salt minerals, but their composition is unknown.<br><br>"+
				"The simplest but most probable life for habitable worlds that are carbon-based and use water as a solvent likely are ___________ and ______ since eating other"+
				" beings is unlikely, sunlight might be limited due to distance, but chemical reactions are available. Such life forms might have a reduced metabolism and stay "+
				"much more dormant due to the frigid temperature and fewer energy sources than Earth has.<br><br>More imaginative life on Europa or other cold watery but carbon-"+
				"based worlds can look like David Aguilar's illustration below. ''Instead of jumping down and biting something, it"+
				" extends its very long tongue with fish hooks on it,'' he explains. 'It grabs an obaki [the red critter in its mouth, similar to an octopus] and reels it in just"+
				" like somebody who went fishing for the day out on the ice.'(Smithsonian Magazine) <img src='seapup.jpg'><br>";

			}
		}
		if(liquid==2){ //if carbon-based and methane as solvent
			msg = msg + "<br><br>Water has proven to be very useful to life on Earth with one of its many functions being that it allows for " +
			" the facilitation of the transport of 'important building blocks inside a cell' (Linde). From an Earth centered perspective, "+
			"it is difficult to assume life can arise anywhere without it. It is important that we remove ourselves from our earth-life "+
			"perspective and widen our range of factors that could effect life (Linde). We must not cling to one view, like those who "+
			"clung to the geocentric model long ago. Methane and Ethane are alternatives to water and have a wider range of temperatures"+
			" at which they can be liquid (Linde). Liquid solvents are essential for life because 'macromolecules and nutrients can be "+
			"concentrated within a bounded internal environment without immobilizing interacting constituents' (Kolb 407)." ;
			if(temp==1){//hot
				msg = msg + "<br><br>Methane and Ethane are gases on Earth like temperatures. Considering the need for liquid solvents, gaseous methane and "+
				"ethane may not be the most suitable for life at warmer temperatures. However, if enough pressure is applied, Methane can be kept warmer "+
				"at hotter temperatures. However, if the planet is warmer, there's a higher chance that there will be C02 then Methane due to the abundance of carbon and water (space.com).<br><br>"+
				"Due to this immense pressure needed, I would imagine the evolutionary adaptations on such a planet would need an organism with a height and build that can survive and move easily under pressure."
			}
			if(temp==2){//ideal
				msg = msg + "<br><br>The ideal temperature for methane solvent reliant life would be a colder temperature. Hence why Titan at its distance has "+
				"the possibility of lakes and oceans. In a way, 'Methane could create a whole new habitable zone' (Space.com).<br><br><b><h3>As such, please reset this web application and check out carbon, methane, cold.</h3><b><br>";
			}
			if(temp==3){//cold
				msg = msg + "<br><br>While Methane and Ethane are gases on Earth-like climates, they are liquids on colder possible"+
				" habitable worlds like Titan (Linde). Titan is believed to host lakes or even oceans of liquid Methane or Ethane."+
				" NASA's Titan page specifies that these seas of 'liquid hydrocarbon' are on warmer spots on this habitable world. The "+
				" Methane in the atmosphere is slowly deteriorating due to sunlight, but this actually allows complicated molecules like those"+
				" on early Earth were present. Such prebiotic compounds gives hope for future life to form (NASA). On Earth, there is a "+
				"miniturization of what life is like in water environments"+
				". However, that does not mean it also applies to other liquids. Scientists speculate that life on Titan can actually "+
				"take larger forms of cells than those we are used to. Lower viscosity and diffusion rates of Methane as a solvent"+
				" can indicate that these cellular life forms metabolize much more slowly (Kolb 406). It is likely that such an organism would be a"+
				"_______?____________ because it would be difficult to gain light from such a distance and would likely get energy from chemical reactions. Also dormant_________.<br><br>"+
				"More imaginative life can stem from imagining evolution of Titan life once the Sun becomes a red giant (NASA). Life on Earth "+
				"mostly utilizes visual eyesight within a limited portion of the electromagnetic spectrum since we recieve plenty of sunlight."+
				" On Titan, it is possible that earlier life will develop different ways of sensing their environment. This could include Earth-like "+
				" sensory systems like echolocation or touch. Once the Sun becomes a red giant though, I can see the possibility of Titan life developing"+
				" eyesight as luminosity increases.<br><br>More imaginative life on Titan or other cold but carbon-"+
				"based worlds with methane/ethane solvents can look like David Aguilar's illustration below.''<br><img src='infaredEyes.jpg'><br> ''The artist shows two little critters called preencatchers in this illustration, as the netseref would see them. In infrared, the preencatchers look like colorful heat maps."+
				" I wanted to introduce to kids that eyes, on different creatures, do not always see the same thing,” explains Aguilar. “We know now that dogs and we think cats see a lot of ultraviolet light.'' (Smithsonian Magazine).";


			}
		}
		return msg;
	}//end of carbon-based

	if(chemical==2){ //if silicon-based life and water as a solvent
		msg = msg + "<br>Silicon, just like Carbon, has four valence electrons. This makes it easier to connect to other atoms or itself. "+
		"Unlike, Carbon, Silicon is bigger and less fluid (Linde). ";
		if(liquid==1){ 
			msg = msg + "Water is not compatible with silicon compounds. For example, Silanes suddenly burns to form silicate and hydrogen. "+
			"When Silicon is put in water, it immediately creates a silica shell and removes the oxygen from it (Rampelotto 2010).<br><br><a href='https://www.youtube.com/watch?v=SyujHJs_p4s'>Cool Youtube link about silicon reacting with oxygen.</a>"
			+ " If silicon life does need oxygen like humans, exhaling would produce silicon dioxide rather than carbon dioxide...which is basically a solid known as sand (Linde).";
			if(temp==1){//hot
				msg = msg + "<br><br>If high enough temperatures exist, that silicon-dioxide can be a liquid (Linde)."
			}
			if(temp==2){//ideal

			}
			if(temp==3){//cold

			}
		}
		if(liquid==2){ //if silicon-based and methane as solvent
			msg = msg + "<br><br>Water has proven to be very useful to life on Earth with one of its many functions being that it allows for " +
			" the facilitation of the transport of 'important building blocks inside a cell' (Linde). From an Earth centered perspective, "+
			"it is difficult to assume life can arise anywhere without it. It is important that we remove ourselves from our earth-life "+
			"perspective and widen our range of factors that could effect life (Linde). We must not cling to one view, like those who "+
			"clung to the geocentric model long ago. Methane and Ethane are alternatives to water and have a wider range of temperatures"+
			" at which they can be liquid (Linde). Liquid solvents are essential for life because 'macromolecules and nutrients can be "+
			"concentrated within a bounded internal environment without immobilizing interacting constituents' (Kolb 407).<br><br>" ;
			if(temp==1){//hot
				msg = msg + "<br><br>Methane and Ethane are gases on Earth like temperatures. Considering the need for liquid solvents, gaseous methane and "+
				"ethane may not be the most suitable for life at warmer temperatures. However, if enough pressure is applied, Methane can be kept warmer "+
				"at hotter temperatures. However, if the planet is warmer, there's a higher chance that there will be C02 then Methane due to the abundance of carbon and water (space.com).<br><br>"+
				"Due to this immense pressure needed, I would imagine the evolutionary adaptations on such a planet would need an organism with a height and build that can survive and move easily under pressure (Rampelotto 2010).";

			}
			if(temp==2){//ideal
				msg = msg + "The ideal temperature for methane solvent reliant life would be a colder temperature. In a way, 'Methane could create a whole new habitable zone' (Space.com).<br><br><b><h3>As such, please reset this web application and check out carbon, methane, cold.</h3><b><br>";
			}
			if(temp==3){//cold
				msg = msg + "Rampelotto's work in the Journal of Cosmology made very clear that studies suggest that silicon-based life would be limited to worlds with small quantities of oxygen and water."+
				" The best solvent for it would be Methane or Ethane due to the higher reactivity in cold environments." +
				" If silicon life does need oxygen like humans, exhaling would produce silicon dioxide rather than carbon dioxide...which is basically a solid known as sand (Linde). " +
				" What makes this particular combination special is that, worlds of silicon-based life and methane solvents are completely hypothetical. It is not life that we have observed on Earth. "+
				"It's the kind of life we could only apply educated guesses on based on life known on Earth. <br><br>"+
				"<a href=''>Enjoy this video clip of the Star Trek Enterprise discovering what silicon-based life might look like!</a><br>Minute 2:41 is when it is spotted.";
			}
		}
		return msg;
	}//end of silicon-based

}//end of findResult() function

$( document ).ready(function() {
	  $( ".chemGroup" ).click(function() {
	  		if( isChemChecked == false){
	  			$( this ).css("background-color", "rgba(211,211,211, 0.4)")
	  			if($(this).html()=="carbon"){
	  				chemical=1;
	  			}
	  			if($(this).html()=="silicon"){
	  				chemical=2;
	  			}	
	  			isChemChecked =true;	
	  		}
	});
	  $( ".waterGroup" ).click(function() {
	  		if( isWaterChecked == false){
	  			$( this ).css("background-color", "rgba(211,211,211, 0.4)");
	  			if($(this).html()=="water"){
	  				liquid=1;
	  			}
	  			if($(this).html()=="methane"){
	  				liquid=2;
	  			}		
	  			isWaterChecked =true;	
	  		}
	});
	  $( ".tempGroup" ).click(function() {
	  		if( isTempChecked == false){
	  			$( this ).css("background-color", "rgba(211,211,211, 0.4)")
	  			if($(this).html()=="hot"){
	  				temp=1;
	  			}
	  			if($(this).html()=="ideal"){
	  				temp=2;
	  			}	
	  			if($(this).html()=="cold"){
	  				temp=3;
	  			}		
	  			isTempChecked =true;	
	  		}
	});
	  $( "#reset" ).click(function() {
	  		isWaterChecked = false;
	  		isChemChecked = false;
	  		isTempChecked = false;
	  		chemical = 0;
	  		water = 0;
	  		temp = 0;
	  		$(".createBox").html("");
	  		$(".border").css("background-color", "transparent");
	});
	  $( "#create" ).click(function() {
	  		if(chemical==0 || liquid==0 || temp==0){
	  			alert("Oops, you forgot to answer a question");
	  		}
	  		else{
	  			$(".createBox").append(findResult());
	  		}
	});

});
