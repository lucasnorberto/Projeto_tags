/*function fecharDialog(){
    document.getElementById("btn_dialog").innerHTML="&lt;!--...--&gt;";
    document.getElementById("tagcoment").removeAttribute("open");
}

function abrirDialog(){
    document.getElementById("btn_dialog").innerHTML="&lt;!--...--&gt;";
    document.getElementById("taccoment").setAttribute("open","");
}

function controlaDialog(){
    if(document.getElementById("tagcoment").open){
        fecharDialog();
    }else { 
        abrirDialog();      
      }

    }
    */

    function fecharDialog(){
        document.getElementById("btn_dialog").innerHTML="&lt;!--...--&gt;";
        document.getElementById("d1").removeAttribute("open");
    }
    function abrirDialog(){
        document.getElementById("btn_dialog").innerHTML="&lt;!--...--&gt;";
        document.getElementById("d1").setAttribute("open","");
    }
    function controlaDialog(){
        if(document.getElementById("d1").open){
            fecharDialog();
        }else{
            abrirDialog();
        }
    }