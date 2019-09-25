(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel-main":       {url:"$H/m/panel-main.html"},
        "panel-child":      {url:"$H/m/panel-child.html"},
        "notes-data":  	    {url:"$H/m/notes-data.html",Table:"sleepfix-gp-notes",form_module:"notes-form",router:1},
        "notes-form":  	    {url:"$H/m/notes-form.html",Table:"sleepfix-gp-notes"},
        
        "participant-data": {url:"$H/m/participant-data.html", Table:"sleepfix-gp-participant", form_module:"participant-form",router:1,
                                panel_child:"panel-child",
                                online_questionnaire_setup:"oq-setup",
                                online_questionnaire:"oq",
                                participant_id:{field1:""}
                            },
        "oq-setup":         {url:"$H/m/oq-setup.html",Table:"sleepfix-gp-participant"},
        "oq":               {url:"$H/online-questionnaire.html"},
        "oq-panel":         {url:"$H/m/oq-panel.html"},
        "participant-form": {url:"$H/m/participant-form.html", Table:"sleepfix-gp-participant"},
        
        "login-data":       {url:"$H/m/tasks/login-data.html",   Table:"sleepfix-gp-login", form_module:"login-form",task_name:"Login"},
        "login-form":       {url:"$H/m/tasks/login-form.html",   Table:"sleepfix-gp-login"},
        "screening-data":   {url:"$H/m/tasks/screening-data.html",   Table:"sleepfix-gp-screening", form_module:"screening-form",task_name:"Screening Questions"},
        "screening-form":   {url:"$H/m/tasks/screening-form.html",   Table:"sleepfix-gp-screening",task_name:"Screening Questions"},
        "t2-data":          {url:"$H/m/tasks/t2-data.html",   Table:"sleepfix-gp-t2", form_module:"t2-form",task_name:"t2"},
        "t2-form":          {url:"$H/m/tasks/t2-form.html",   Table:"sleepfix-gp-t2",task_name:"q-t2"},
    }
    //-------------------------------------------------------------------------------------
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.href.indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
    //-------------------------------------------------------------------------------------
})();
