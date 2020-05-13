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
        "baseline-form":   {url:"$H/m/tasks/baseline-form.html",   Table:"sleepfix-gp-baseline",task_name:"Baseline Questionnaire",page:"Page 1 of 8"},
        "isi-data":   {url:"$H/m/tasks/isi-data.html",   Table:"sleepfix-gp-isi", form_module:"isi-form",task_name:"ISI"},
        "isi-form":   {url:"$H/m/tasks/isi-form.html",   Table:"sleepfix-gp-isi",task_name:"Insomnia",page:"Page 2 of 8"},
        "sq-data":   {url:"$H/m/tasks/sq-data.html",   Table:"sleepfix-gp-sq", form_module:"sq-form",task_name:"Sleep Quality"},
        "sq-form":   {url:"$H/m/tasks/sq-form.html",   Table:"sleepfix-gp-sq",task_name:"Sleep Quality",page:"Page 3 of 8"},
        "sds-data":   {url:"$H/m/tasks/sds-data.html",   Table:"sleepfix-gp-sds", form_module:"sds-form",task_name:"SDS"},
        "sds-form":   {url:"$H/m/tasks/sds-form.html",   Table:"sleepfix-gp-sds",task_name:"Sleep difficulty",page:"Page 4 of 8"},
        "gad-7-data":   {url:"$H/m/tasks/gad-7-data.html",   Table:"sleepfix-gp-gad-7", form_module:"gad-7-form",task_name:"GAD-7"},
        "gad-7-form":   {url:"$H/m/tasks/gad-7-form.html",   Table:"sleepfix-gp-gad-7",task_name:"Anxiety",page:"Page 5 of 8"},
        "phq-9-data":   {url:"$H/m/tasks/phq-9-data.html",   Table:"sleepfix-gp-phq-9", form_module:"phq-9-form",task_name:"PHQ-9"},
        "phq-9-form":   {url:"$H/m/tasks/phq-9-form.html",   Table:"sleepfix-gp-phq-9",task_name:"Health",page:"Page 6 of 8"},
        "ffs-data":   {url:"$H/m/tasks/ffs-data.html",   Table:"sleepfix-gp-ffs", form_module:"ffs-form",task_name:"Flinder Fatigue Scale"},
        "ffs-form":   {url:"$H/m/tasks/ffs-form.html",   Table:"sleepfix-gp-ffs",task_name:"Fatigue",page:"Page 7 of 8"},
        "ess-data":   {url:"$H/m/tasks/ess-data.html",   Table:"sleepfix-gp-ess", form_module:"ess-form",task_name:"ESS"},
        "ess-form":   {url:"$H/m/tasks/ess-form.html",   Table:"sleepfix-gp-ess",task_name:"Sleepiness",page:"Page 8 of 8"},
        "psqi-data":   {url:"$H/m/tasks/psqi-data.html",   Table:"sleepfix-gp-psqi", form_module:"psqi-form",task_name:"PSQI"},
        "psqi-form":   {url:"$H/m/tasks/psqi-form.html",   Table:"sleepfix-gp-psqi",task_name:"Sleep Habits",page:"Page 7 of 8"},
        "isi-w6-data":   {url:"$H/m/tasks/isi-data.html",   Table:"sleepfix-gp-isi-w6", form_module:"isi-w6-form",task_name:"ISI Week 6"},
        "isi-w6-form":   {url:"$H/m/tasks/isi-form.html",   Table:"sleepfix-gp-isi-w6",task_name:"Insomnia - Week 6",page:"Page 1 of 9"},
        "sq-w6-data":   {url:"$H/m/tasks/sq-data.html",   Table:"sleepfix-gp-sq-w6", form_module:"sq-w6-form",task_name:"Sleep Quality Week 6"},
        "sq-w6-form":   {url:"$H/m/tasks/sq-form.html",   Table:"sleepfix-gp-sq-w6",task_name:"Sleep Quality - Week 6",page:"Page 2 of 9"},
        "sds-w6-data":   {url:"$H/m/tasks/sds-data.html",   Table:"sleepfix-gp-sds-w6", form_module:"sds-w6-form",task_name:"SDS"},
        "sds-w6-form":   {url:"$H/m/tasks/sds-form.html",   Table:"sleepfix-gp-sds-w6",task_name:"Sleep difficulty",page:"Page 3 of 8"},
        "gad-7-w6-data":   {url:"$H/m/tasks/gad-7-data.html",   Table:"sleepfix-gp-gad-7-w6", form_module:"gad-7-w6-form",task_name:"GAD-7 Week 6"},
        "gad-7-w6-form":   {url:"$H/m/tasks/gad-7-form.html",   Table:"sleepfix-gp-gad-7-w6",task_name:"Anxiety - Week 6",page:"Page 4 of 9"},
        "phq-9-w6-data":   {url:"$H/m/tasks/phq-9-data.html",   Table:"sleepfix-gp-phq-9-w6", form_module:"phq-9-w6-form",task_name:"PHQ-9 Week 6"},
        "phq-9-w6-form":   {url:"$H/m/tasks/phq-9-form.html",   Table:"sleepfix-gp-phq-9-w6",task_name:"Health - Week 6",page:"Page 5 of 9"},
        "ffs-w6-data":   {url:"$H/m/tasks/ffs-data.html",   Table:"sleepfix-gp-ffs-w6", form_module:"ffs-w6-form",task_name:"Flinder Fatigue Scale Week 6"},
        "ffs-w6-form":   {url:"$H/m/tasks/ffs-form.html",   Table:"sleepfix-gp-ffs-w6",task_name:"Fatigue - Week 6",page:"Page 6 of 9"},
        "ess-w6-data":   {url:"$H/m/tasks/ess-data.html",   Table:"sleepfix-gp-ess-w6", form_module:"ess-w6-form",task_name:"ESS Week 6"},
        "ess-w6-form":   {url:"$H/m/tasks/ess-form.html",   Table:"sleepfix-gp-ess-w6",task_name:"Sleepiness - Week 6",page:"Page 7 of 9"},
        "psqi-w6-data":   {url:"$H/m/tasks/psqi-data.html",   Table:"sleepfix-gp-psqi-w6", form_module:"psqi-w6-form",task_name:"PSQI"},
        "psqi-w6-form":   {url:"$H/m/tasks/psqi-form.html",   Table:"sleepfix-gp-psqi-w6",task_name:"Sleep Habits",page:"Page 6 of 9"},
        "taq-w6-data":   {url:"$H/m/tasks/taq-data.html",   Table:"sleepfix-gp-taq-w6", form_module:"taq-w6-form",task_name:"TAQ"},
        "taq-w6-form":   {url:"$H/m/tasks/taq-form.html",   Table:"sleepfix-gp-taq-w6",task_name:"Treatment",page:"Page 8 of 9"},
        "ieuq-w6-data":   {url:"$H/m/tasks/ieuq-data.html",   Table:"sleepfix-gp-ieuq-w6", form_module:"ieuq-w6-form",task_name:"IEUQ"},
        "ieuq-w6-form":   {url:"$H/m/tasks/ieuq-form.html",   Table:"sleepfix-gp-ieuq-w6",task_name:"SleepFix App",page:"Page 9 of 9"},


        "sleepfix-study-page": {url:"$H/m/tasks/sleepfix-study-page1.html"},
        "progress-report":{url:"$H/m/tasks/progress-data.html",   Table:"sleepfix-gp-login",task_name:"Progress report"},
        "start-date":   {url:"$H/m/tasks/date-start-form.html",   Table:"sleepfix-gp-contact", task_name:"Start Date"},
        "reminder-1-date":   {url:"$H/m/tasks/date-reminder-1-form.html",   Table:"sleepfix-gp-contact", task_name:"Access Code Reminder 1 Date"},
        "reminder-2-date":   {url:"$H/m/tasks/date-reminder-2-form.html",   Table:"sleepfix-gp-contact", task_name:"Access Code Reminder 2 Date"},
        "email-data":   {url:"$H/m/tasks/email-data.html",   Table:"sleepfix-gp-contact", form_module:"email-form",task_name:"email"},
        "send-email":   {url:"$H/m/tasks/send-email-form.html",   Table:"sleepfix-gp-contact", task_name:"send email"},

        "survey-data":  	    {url:"$H/m/tasks/survey-data.html",Table:"sleepfix-gp-survey",form_module:"survey-form"},
        "survey-form":  	    {url:"$H/m/tasks/survey-form.html",Table:"sleepfix-gp-survey"},

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
