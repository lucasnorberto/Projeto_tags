

    function fecharDialog(){
        document.getElementById("btn_dialog").innerHTML="&lt;!--...--&gt;";
        document.getElementById("d1").removeAttribute("open");
    }
    function abrirDialog(){
        document.getElementById("btn_dialog").innerHTML="&lt;!--...--&gt;";
        document.getElementById("d1").setAttribute("open","");
    }
    function controlaDialog(titulo,msg){
        if(document.getElementById("d1").open){
            fecharDialog();
        }else{
            abrirDialog();
            document.getElementById("titulo").innerHTML=titulo;
            document.getElementById("msg1").innerHTML=msg
            
        }
    }

    var win = null;
	function NovaJanela(pagina,nome,w,h,scroll){
	LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
	TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
	settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
	win = window.open(pagina,nome,settings);
	}

    function timeMsg(){
        var t=setTimeout("alertMsg()",3000);
    }
    
    function alertMsg(){
        document.write("Terminal Root");
    }
    var str = 'Terminal Root';

var str = str.slice(0, -5)+' Bash';

document.write(str);


var str = 'Terminal Root';

if(str.match(/Root/)){
  document.write('Encontrou');
}else{
	document.write('Palavra Não Encontrada');
}


function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}