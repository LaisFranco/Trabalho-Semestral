var RelatorioController = {
    
    init:function (){
        
        RelatorioController.setForm();
    },
    
       setForm: function () {
        RelatorioController.getReport();
        google.load("visualization", "1.1", {packages: ["bar"]});
        google.setOnLoadCallback(addToHtml);
},
    
    
    
    
}