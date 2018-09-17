
function getInputs() {
    var ar1 = [11,23,14,15,18,20,30,23,33,21];
    var ar2 = [5,6,3,3,5,7,4,3,2,5];
    
    var idValue1 = document.getElementById("page").innerHTML;
    document.getElementById("id1").innerHTML = ar1[Number(idValue1) - 1];
    document.getElementById("id2").innerHTML = ar2[Number(idValue1) - 1];
    
    }
    
    function prev() {
     var idValue1 = document.getElementById("page").innerHTML;
     document.getElementById("result").value = null;
      document.getElementById("demo").innerHTML = null;   
     var check = Number(idValue1) - 1;
     if(check > 0) {
      document.getElementById("page").innerHTML = check; 
      getInputs();
    } 
    }
    
    function next() {
    var idValue1 = document.getElementById("page").innerHTML;
    document.getElementById("result").value = null;
    document.getElementById("demo").innerHTML = null;   
    
     var check = Number(idValue1) + 1;  
      if(check <= 10) {
     document.getElementById("page").innerHTML = check; 
     getInputs();
     }
     
     
    }
    
    
    
    function myFunction() {
        var txt = "";
        var idValue1 = document.getElementById("id1").innerHTML;
        var idValue2 = document.getElementById("id2").innerHTML;
        var idValueSum = Number(idValue1) + Number(idValue2);   
        var resultSum = document.getElementById("result").value;
        if (idValueSum == resultSum) {
            txt = "Good Job Lasya!!!";
        } else {
            txt = "Try Again";
        } 
        document.getElementById("demo").innerHTML = txt;    
    }