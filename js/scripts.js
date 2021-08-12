// business logic
function equi(A, B, C){
  if (A === B && A === C){
    return true
  }
  else {
    return false
  }
}

function triYes(A, B, C){
  if (A + B >= C && B + C >= A && A + C >=B){
    return true
  }
  else{
    return false
  }
}


// User Interface Logic
$(document).ready(function(){
  $("form#triForm").submit(function(){
    event.preventDefault();
    const A = parseInt($("#sideA").val());
    const B = parseInt($("#sideB").val());
    const C = parseInt($("#sideC").val());

    














    // if (A === B && A === C){
    //   $("#triName").text("Equilateral");
    //   $("#resultOutput").show();
    // }
    // else {
    //   $("#resultOutput").hide();
    //   $("#triFail").show();
    // }
    // else if (A === B || A === C || B === C){
    //   $("#triName").text("Isosceles")
    // }
    // else (A + B !== C || A + C !== B || B + C !== A) 
    //   $("#resultOutput").hide();
    //   $("#triFail").show();
    
    });
  });
