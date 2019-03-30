function setup() {
	wlSlider = createSlider(1,20,1);
	wlSlider.parent("test")
	wlSlider.position(20,20);
	button = createButton('Generate Level '+ wlSlider.elt.value+' book.');
	button.parent("test")
	button.position(wlSlider.x + wlSlider.width + 20);
	button.mousePressed(prod);
	
}

Array.prototype.sample = function(){
	return this[Math.floor(Math.random()*this.length)];
}


function get_spell_levels(wizlevel){
	max_level = Math.min(9,Math.floor((wizlevel+1)/2));
	var spell_levels = {}
	for (i = 1; i < max_level + 1; i++){
		numspells = (1/(i/wizlevel))/1.1;
		spell_levels[i] = Math.round(numspells);
		if (i == 1 ){
			numspells += 6
		}
		spell_levels[i] = Math.round(numspells);
		spell_levels.length = i
	}
return spell_levels
	}

function draw(){
	button.elt.innerHTML = 'Generate Level '+ wlSlider.elt.value+' book.'
}	
	
	
function prod(){
    for (i = 1; i < 9 +1; i++){ 
            document.getElementById("L"+ i +"_Title").innerHTML = " ";
            document.getElementById("L"+ i).innerHTML = " ";
    
   }  
	
	const wl = wlSlider.value();
	spells_by_level = get_spell_levels(wl)
	console.log(spells_by_level[1])
	let max_spell = get_spell_levels(wl).length
    var i;
    for (i = 1; i < max_spell +1; i++){ 
            spells_chosen = get_spells(i,spells_by_level[i])
            document.getElementById("L"+ i +"_Title").innerHTML = "Level "+i+" Spells";
            document.getElementById("L"+ i).innerHTML = spells_chosen;
    
  

   }  
}

function get_spells(level,num){
	var spells=[];
	for (i = 1; i < num +1; i++){
        choice = spell_list[level].sample();
        if (spells.includes(choice)){
                    
        }
        else{
        spells.push(choice);
      }
    }
	return spells
}