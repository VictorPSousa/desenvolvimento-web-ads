function Mudarestado(){
    var display = document.getElementById("menum").style.display;
    if(display == "block"){
        document.getElementById("menum").style.display = 'none';
    }else{
        document.getElementById("menum").style.display = 'block';
		document.getElementById("busca").style.display = 'none';
	}
}

function search(){
    var display = document.getElementById("busca").style.display;
    if(display == "block"){
        document.getElementById("busca").style.display = 'none';
    }else{
        document.getElementById("busca").style.display = 'block';
		document.getElementById("menum").style.display = 'none';
	}
}