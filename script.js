function fecharDialog(){
    document.getElementById("btn_dialog").innerHTML="Abrir";
    document.getElementById("tagcoment").removeAttribute("open");
}

function abrirDialog(){
    document.getElementById("btn_dialog").innerHTML="Fechar";
    document.getElementById("taccoment").setAttribute("open","");
}

function controlaDialog(){
    if(document.getElementById("tagcoment").open){
        fecharDialog();
    }else { 
        abrirDialog();      
      }

    }
