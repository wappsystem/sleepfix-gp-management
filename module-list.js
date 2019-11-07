(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel-main":       {url:"$H/m/panel-main.html",router:1},
        "panel-child":      {url:"$H/m/panel-child.html"},
        "notes-data":  	    {url:"$H/m/notes-data.html",Table:"sleepfix-gp-notes",form_module:"notes-form"},
        "notes-form":  	    {url:"$H/m/notes-form.html",Table:"sleepfix-gp-notes"},
        
        "participant-data": {url:"$H/m/participant-data.html", Table:"sleepfix-gp-participant", form_module:"participant-form",router:1,
                                panel_child:"panel-child",
                                online_questionnaire_setup:"oq-setup",
                                online_questionnaire:"oq",
                                online_questionnaire_w6:"oq-w6",
                                participant_id:{field1:""}
                            },
        "oq-setup":         {url:"$H/m/oq-setup.html",Table:"sleepfix-gp-participant"},
        "oq":               {url:"$H/online-questionnaire.html"},
        "oq-w6":            {url:"$H/online-questionnaire-w6.html"},
        "oq-panel":         {url:"$H/m/oq-panel.html"},
        "participant-form": {url:"$H/m/participant-form.html", Table:"sleepfix-gp-participant"},
        
        "after-screening" :  {url:"$H/m/oq-panel.html"},
        "w6-quesstionnaire" :  {url:"$H/m/oq-w6-panel.html"},
        "access-code-data":       {url:"$H/m/tasks/access-code-data.html",   Table:"sleepfix-gp-access-code", form_module:"access-code-form",task_name:"Access Code"},
        "access-code-form":       {url:"$H/m/tasks/access-code-form.html",   Table:"sleepfix-gp-access-code"},
        "login-data":       {url:"$H/m/tasks/login-data.html",   Table:"sleepfix-gp-login", form_module:"login-form",task_name:"Login"},
        "login-form":       {url:"$H/m/tasks/login-form.html",   Table:"sleepfix-gp-login"},
        "login-w6-data":       {url:"$H/m/tasks/login-data.html",   Table:"sleepfix-gp-login-w6", form_module:"login-form",task_name:"Login"},
        "login-w6-form":       {url:"$H/m/tasks/login-form.html",   Table:"sleepfix-gp-login-w6"},
        "screening-data":   {url:"$H/m/tasks/screening-data.html",   Table:"sleepfix-gp-screening", form_module:"screening-form",task_name:"Screening Questions"},
        "screening-form":   {url:"$H/m/tasks/screening-form.html",   Table:"sleepfix-gp-screening",task_name:"Screening Questions"},
        "pis-data":   {url:"$H/m/tasks/pis-data.html",   Table:"sleepfix-gp-pis", form_module:"pis-form",task_name:"Pis"},
        "pis-form":          {url:"$H/m/tasks/pis-form.html",Table:"sleepfix-gp-pis",task_name:"pis"},
        "consent-data":   {url:"$H/m/tasks/consent-data.html",   Table:"sleepfix-gp-consent", form_module:"consent-form",task_name:"consent"},
        "consent-form":   {url:"$H/m/tasks/consent-form.html",   Table:"sleepfix-gp-consent",task_name:"consent"},
        "contact-data":   {url:"$H/m/tasks/contact-data.html",   Table:"sleepfix-gp-contact", form_module:"contact-form",task_name:"contact"},
        "contact-form":   {url:"$H/m/tasks/contact-form.html",   Table:"sleepfix-gp-contact",task_name:"contact"},
        "screen-failure-phq-9":          {url:"$H/m/tasks/screen-failure-phq-9.html",task_name:"Screening Failure PHQ-9"},
        "screen-failure-thank-you-page": {url:"$H/m/tasks/screen-failure-thank-you-page.html"},
        "thank-you-page": {url:"$H/m/tasks/thank-you-page.html",task_name:"thank you"},
        "success-page":          {url:"$H/m/tasks/success-page.html",Table:"sleepfix-gp-contact",task_name:"Success Page"},
        "baseline-data":   {url:"$H/m/tasks/baseline-data.html",   Table:"sleepfix-gp-baseline", form_module:"baseline-form",task_name:"Baseline Questionnaire"},
        "baseline-form":   {url:"$H/m/tasks/baseline-form.html",   Table:"sleepfix-gp-baseline",task_name:"Baseline Questionnaire (1/6)"},
        "isi-data":   {url:"$H/m/tasks/isi-data.html",   Table:"sleepfix-gp-isi", form_module:"isi-form",task_name:"ISI"},
        "isi-form":   {url:"$H/m/tasks/isi-form.html",   Table:"sleepfix-gp-isi",task_name:"ISI (2/6)"},
        "sq-data":   {url:"$H/m/tasks/sq-data.html",   Table:"sleepfix-gp-sq", form_module:"sq-form",task_name:"Sleep Quality"},
        "sq-form":   {url:"$H/m/tasks/sq-form.html",   Table:"sleepfix-gp-sq",task_name:"Sleep Quality (3/6)"},
        "ess-data":   {url:"$H/m/tasks/ess-data.html",   Table:"sleepfix-gp-ess", form_module:"ess-form",task_name:"ESS"},
        "ess-form":   {url:"$H/m/tasks/ess-form.html",   Table:"sleepfix-gp-ess",task_name:"ESS (4/6)"},
        "ffs-data":   {url:"$H/m/tasks/ffs-data.html",   Table:"sleepfix-gp-ffs", form_module:"ffs-form",task_name:"Flinder Fatigue Scale"},
        "ffs-form":   {url:"$H/m/tasks/ffs-form.html",   Table:"sleepfix-gp-ffs",task_name:"Flinder Fatigue Scale (5/6)"},
        "phq-9-data":   {url:"$H/m/tasks/phq-9-data.html",   Table:"sleepfix-gp-phq-9", form_module:"phq-9-form",task_name:"PHQ-9"},
        "phq-9-form":   {url:"$H/m/tasks/phq-9-form.html",   Table:"sleepfix-gp-phq-9",task_name:"PHQ-9"},
        "gad-7-data":   {url:"$H/m/tasks/gad-7-data.html",   Table:"sleepfix-gp-gad-7", form_module:"gad-7-form",task_name:"GAD-7"},
        "gad-7-form":   {url:"$H/m/tasks/gad-7-form.html",   Table:"sleepfix-gp-gad-7",task_name:"GAD-7 (6/6)"},
        "isi-w6-data":   {url:"$H/m/tasks/isi-data.html",   Table:"sleepfix-gp-isi-w6", form_module:"isi-w6-form",task_name:"ISI Week 6"},
        "isi-w6-form":   {url:"$H/m/tasks/isi-form.html",   Table:"sleepfix-gp-isi-w6",task_name:"ISI Week 6 (1/5)"},
        "sq-w6-data":   {url:"$H/m/tasks/sq-data.html",   Table:"sleepfix-gp-sq-w6", form_module:"sq-w6-form",task_name:"Sleep Quality Week 6"},
        "sq-w6-form":   {url:"$H/m/tasks/sq-form.html",   Table:"sleepfix-gp-sq-w6",task_name:"Sleep Quality Week 6 (2/5)"},
        "ess-w6-data":   {url:"$H/m/tasks/ess-data.html",   Table:"sleepfix-gp-ess-w6", form_module:"ess-w6-form",task_name:"ESS Week 6"},
        "ess-w6-form":   {url:"$H/m/tasks/ess-form.html",   Table:"sleepfix-gp-ess-w6",task_name:"ESS Week 6 (3/5)"},
        "ffs-w6-data":   {url:"$H/m/tasks/ffs-data.html",   Table:"sleepfix-gp-ffs-w6", form_module:"ffs-w6-form",task_name:"Flinder Fatigue Scale Week 6"},
        "ffs-w6-form":   {url:"$H/m/tasks/ffs-form.html",   Table:"sleepfix-gp-ffs-w6",task_name:"Flinder Fatigue Scale Week 6 (4/5)"},
        "phq-9-w6-data":   {url:"$H/m/tasks/phq-9-data.html",   Table:"sleepfix-gp-phq-9-w6", form_module:"phq-9-w6-form",task_name:"PHQ-9 Week 6"},
        "phq-9-w6-form":   {url:"$H/m/tasks/phq-9-form.html",   Table:"sleepfix-gp-phq-9-w6",task_name:"PHQ-9 Week 6"},
        "gad-7-w6-data":   {url:"$H/m/tasks/gad-7-data.html",   Table:"sleepfix-gp-gad-7-w6", form_module:"gad-7-w6-form",task_name:"GAD-7 Week 6"},
        "gad-7-w6-form":   {url:"$H/m/tasks/gad-7-form.html",   Table:"sleepfix-gp-gad-7-w6",task_name:"GAD-7 Week 6 (5/5)"},


        "sleepfix-study-page": {url:"$H/m/tasks/sleepfix-study-page1.html"},
        "progress-report":{url:"$H/m/tasks/progress-data.html",   Table:"sleepfix-gp-login",task_name:"Progress report"},
        "email-data":   {url:"$H/m/tasks/email-data.html",   Table:"sleepfix-gp-contact", form_module:"email-form",task_name:"email"},
        "email-01":   {url:"$H/m/tasks/email-01.html"},
        "email-r1":   {url:"$H/m/tasks/email-r1.html"},
        "email-r2":   {url:"$H/m/tasks/email-r2.html"},
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
