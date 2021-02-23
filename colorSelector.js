let clrR=document.getElementById("clrr");
  let clrG=document.getElementById("clrg");
  let clrB=document.getElementById("clrb");
  
  

  function toHex(str){
    str=str.toString(16);
    return (str.length>=2)?str:"0"+str;
  }
  
  
  function randClr(){  //隨機產生顏色
    var R=Math.floor(Math.random()*255);
    var G=Math.floor(Math.random()*255);
    var B=Math.floor(Math.random()*255);

    document.getElementById("clr").style=`background:rgb(${R},${G},${B})`;
    document.getElementById("clr").innerText="#"+toHex(R)+toHex(G)+toHex(B);
    clrR.value=R;
    clrG.value=G;
    clrB.value=B;
  }
  randClr();
  


  function chg(x){
    switch(x){
      case 'R':
      clrR.value=prompt("請輸入0~255整數");
      break;
      case 'G':
      clrG.value=prompt("請輸入0~255整數");
      break;
      case 'B':
      clrB.value=prompt("請輸入0~255整數");
      break;
    }
    
    document.getElementById("clr").style=`background:rgb(${clrR.value},${clrG.value},${clrB.value})`;
    document.getElementById("clr").innerText=`#${Number(clrR.value).toString(16)}${Number(clrG.value).toString(16)}${Number(clrB.value).toString(16)}`;
  }


  function bar(item){

    document.getElementById("clr").style=`background:rgb(${clrR.value},${clrG.value},${clrB.value})`;
    document.getElementById("clr").innerText=`#${Number(clrR.value).toString(16)}${Number(clrG.value).toString(16)}${Number(clrB.value).toString(16)}`;
  }

  function add(){
    clrR.value++;
    clrG.value++;
    clrB.value++;
    document.getElementById("clr").style=`background:rgb(${clrR.value},${clrG.value},${clrB.value})`;
    document.getElementById("clr").innerText=`#${Number(clrR.value).toString(16)}${Number(clrG.value).toString(16)}${Number(clrB.value).toString(16)}`;
  }
  
  function less(){
    clrR.value--;
    clrG.value--;
    clrB.value--;
    document.getElementById("clr").style=`background:rgb(${clrR.value},${clrG.value},${clrB.value})`;
    document.getElementById("clr").innerText=`#${Number(clrR.value).toString(16)}${Number(clrG.value).toString(16)}${Number(clrB.value).toString(16)}`;

  }
