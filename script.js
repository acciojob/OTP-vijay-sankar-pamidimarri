//your JS code here. If required.
let inputList=document.querySelectorAll("#input input");
inputList.forEach((val,index)=>{
   val.addEventListener('input',(e)=>{
	   // inputList[index].value=val.value;
    if(val.value.length ===1&&index<inputList.length-1){
		// inputList[index+1]=" ";
        inputList[index+1].focus();
		// inputList[index+1]=val;
    }
   });
   val.addEventListener('keydown',(e)=>{
    if(e.key=="Backspace"&&index>0&&val.value===""){
        inputList[index-1].focus();
    }
   });
});