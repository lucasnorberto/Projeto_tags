

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