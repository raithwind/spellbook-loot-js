function setup() {
	wlSlider = createSlider(1,20,1);
	wlSlider.position(20,20)
}

Array.prototype.sample = function(){
	return this[Math.floor(Math.random()*this.length)];
}


function get_max_spell_level(wizlevel){
	return Math.min(9,Math.floor((wizlevel+1)/2));
	}


function prod(){
    const wl = wlSlider.value();
    
    max_spell = get_max_spell_level(wl)
    var i;
    for (i = 1; i < max_spell +1; i++){ 
            spells_chosen = get_spells(i,5)
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