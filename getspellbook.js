function setup() {
	
}

Array.prototype.sample = function(){
	return this[Math.floor(Math.random()*this.length)];
}

function draw() {
}

function get_max_spell_level(wizlevel){
	return Math.min(9,Math.floor((wizlevel+1)/2))
	}


function prod(){
  console.log(get_spells(5,5));
  var i;
  for (i = 1; i < 10; i++){
	document.getElementById("L"+ i +"_Title").innerHTML = "Level "+i+" Spells";
    document.getElementById("L"+ i).innerHTML = "List of spells goes here of level "+ i;
   }  
}

function get_spells(num,level){
	var spells=[];
	for (i = 1; i < num +1; i++){
	//ch = spell_list[level]
	choice = spell_list[level].sample();
		spells.push(choice);
		}
	return spells
	}