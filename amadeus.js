module.exports = Amadeus;

function Amadeus(){};

Amadeus.prototype.jonico    = modo.bind(undefined,0);
Amadeus.prototype.dorico    = modo.bind(undefined,1);
Amadeus.prototype.frigio    = modo.bind(undefined,2);
Amadeus.prototype.lidio     = modo.bind(undefined,3);
Amadeus.prototype.mixolidio = modo.bind(undefined,4);
Amadeus.prototype.eolico    = modo.bind(undefined,5);
Amadeus.prototype.locrio    = modo.bind(undefined,6);

Amadeus.prototype.mayor     = Amadeus.prototype.jonico;
Amadeus.prototype.menor     = Amadeus.prototype.eolico;

// Internas

function notas (x) {
  var todas = [['Do','Do'],['Do#','Reb'],['Re','Re'],['Re#','Mib'],['Mi','Mi'],['Fa','Fa'],['Fa#','Solb'],['Sol','Sol'],['Sol#','Lab'],['La','La'],['La#','Sib'],['Si','Dob']]
    , i = [0,2,4,7,9,11].indexOf(x % 12) != -1 ? 0 : 1
    ;

  return todas.map(function(n){
    return n[i];
  });
}

function tonalidad (x) {
  var tonalidad = [];

  escala.forEach(function (e){
    var n = x == 6 && e == 5 ? 6 : e
      , nota = notas(x)[(n + x) % 12]
      ;
    tonalidad.push(nota);
  });

  return tonalidad;
}

function modo (a, b){
  var c = num2nota(b)
    , modo = []
    , t = tonalidad(12 + c - escala[a])
    ;
  for(i = 0; i <= 6; i++){
    modo.push(t[(i + a) % 7]);
  }

  return modo;
}

function num2nota(x) {
  var a = x.toLowerCase();
	return nota[a] || 12;
}

var nota = {
	'do': 0,
	'si#': 0,
	'do#': 1,
	'reb': 1,
	're': 2,
	're#': 3,
	'mib': 3,
	'mi': 4,
	'fab': 4,
	'fa': 5,
	'mi#': 5,
	'fa#': 6,
	'solb': 6,
	'sol': 7,
	'sol#': 8,
	'lab': 8,
	'la': 9,
	'la#': 10,
	'sib': 10,
	'si': 11,
	'dob': 11
};

var escala = (function () {
  var semitono = 1
    , tono = 2
    ;
  
  return [tono, tono, semitono, tono, tono, tono, semitono].reduce(function (acc, curr, i) {
    return acc.concat(acc[i] + curr);
  }, [0]);
})();
