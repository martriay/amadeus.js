module.exports = Amadeus;

function Amadeus(){};

Amadeus.prototype.jonico    = function(x) { return modo(0,x); }
Amadeus.prototype.mayor     = function(x) { return modo(0,x); }
Amadeus.prototype.dorico    = function(x) { return modo(1,x); }
Amadeus.prototype.frigio    = function(x) { return modo(2,x); }
Amadeus.prototype.lidio     = function(x) { return modo(3,x); }
Amadeus.prototype.mixolidio = function(x) { return modo(4,x); }
Amadeus.prototype.eolico    = function(x) { return modo(5,x); }
Amadeus.prototype.menor     = function(x) { return modo(5,x); }
Amadeus.prototype.locrio    = function(x) { return modo(6,x); }

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
  var c = nota(b)
    , modo = []
    , t = tonalidad(12 + c - escala[a])
    ;
  for(i = 0; i <= 6; i++){
    modo.push(t[(i + a) % 7]);
  }

  return modo;
}

function nota(x) {
  var a = x.toLowerCase();
  if( aux(a,"do","si#")) {
    n = 0;
  } else if (aux(a,"do#","reb")) {
    n = 1;
  } else if (a == "re") {
    n = 2;
  } else if (aux(a,"re#","mib")) {
    n = 3;
  } else if (aux(a,"mi","fab")) {
    n = 4;
  } else if (aux(a,"fa","mi#")) {
    n = 5;
  } else if (aux(a,"fa#","solb")) {
    n = 6;
  } else if (a == "sol") {
    n = 7;
  } else if (aux(a,"sol#","lab")) {
    n = 8;
  } else if (a == "la") {
    n = 9;
  } else if (aux(a,"la#","sib")) {
    n = 10;
  } else if (aux(a,"si","dob")) {
    n = 11;
  } else {
    n = 12;
  }
  return n;
}

function aux(a,b,c) {
  return a == b || a == c;
}

var escala = (function () {
  var semitono = 1
    , tono = 2
    , escala = [];
    ;
  
  [tono, tono, semitono, tono, tono, tono, semitono].reduce(function (prev, curr) {
    escala.push(prev);
    return prev + curr;
  }, 0);

  return escala;
})();
