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
    