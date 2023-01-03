let OutputScreen=document.getElementById("output");
function display(num){
    OutputScreen.value += num
}
function calculate(){
    try{
        OutputScreen.value=eval(OutputScreen.value);
    }
    catch(err){
        alert("invalid");
    }
}
function Clear(){
    OutputScreen.value="";
}
function del(){
    OutputScreen.value=OutputScreen.value.slice(0,-1);
}
function sqrt() {
    OutputScreen.value= Math.sqrt(OutputScreen.value);
  }
  function sqrt1() {
    OutputScreen.value=OutputScreen.value*OutputScreen.value;
  }