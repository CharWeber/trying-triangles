// business logic
function equi(A, B, C){
  if (A === B && A === C){
    return true
  }
  else {
    return false
  }
}

function iso(A, B, C){
  if (A === B || B === C){
    return true
  }
  else {
    return false
  }
}
function scal(A, B, C){
  if (A !== B && A !==C && C !== B){
    return true
  }
  else {
    return false
  }
}

function triYes(A, B, C){
  if (A + B > C && B + C > A && A + C >B){
    return true
  }
  else{
    return false
  }
}


// User Interface Logic
$(document).ready(function(){
  $("form#triform").submit(function(){
    event.preventDefault();
    const A = parseInt($("#sideA").val());
    const B = parseInt($("#sideB").val());
    const C = parseInt($("#sideC").val());
    $("#resultOutput").show();
    $("#triFail").hide();

    if (triYes(A,B,C)){
      if (equi (A,B,C)) {
        $("#triName").text("An Equilateral triangle");
      } 
      else if (iso(A,B,C)) {
        $("#triName").text("An Isosceles triangle");
      }
      else if (scal(A,B,C)){
          $("#triName").text("a Scalene triangle");
      }
    }
    else {
      $("#resultOutput").hide();
      $("#triFail").show();
    }

    });
  });