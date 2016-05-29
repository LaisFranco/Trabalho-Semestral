var Index = {
    
    init: function() {
        Index.setForm();
        Index.listUsuario();
    },
    
    //seter o formulario com o onsubmit
    
    setForm: function(){
        var form = document.getElementById('form');
        if(form){
            form.onsubmit = function(){
                Index.saveUsuario(form);
                return false;
            };
        }
    },
    
    

    //salva os dados
    
    saveUsuario: function(form){
        var usuario = {};
        usuario.nome = form.nome.value;
        usuario.tcc = form.tcc.value;
        usuario.orientador = form.orientador.value;
        
        if (UsuarioDAO.save(usuario/*, TableController.setTable()*/) == UsuarioDAO.NEW) {
           TableController.addItem(usuario,Index.edit,Index.delete);
        } else{ 
           TableController.clearList();
            Index.listUsuario();
        }    
               
            form.nome.value = form.tcc.value = form.orientador.value = "";

 },
 
    setTable: function(){
        var table = document.getElementById('tabela-usuarios');
        TableController.setTable(table);
    },
        
        listUsuario: function () {
            Index.setTable();
            var usuarioList = UsuarioDAO.retrieve();
           if (usuarioList && usuarioList.length) {
			TableController.addList(usuarioList, Index.edit, Index.delete);
		}
	},
