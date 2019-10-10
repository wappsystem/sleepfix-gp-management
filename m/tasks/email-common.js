$('#D__ID').on('load',function(){
    $('#dev_password__ID').hide();
    if(window.location.toString().indexOf('tb=demo')!=-1) $('#dev_password__ID').show();
    var record=$vm.vm['__ID'].input.record;
    $('#mobile_email__ID').hide();
    if(record.Data.sms=='on'){
        $('#mobile_email__ID').show();
    }
    $('#first_name__ID').text(record.Data.first_name);
    $('#mobile_first_name__ID').text(record.Data.first_name);
    $('#access_code__ID').html('<b>'+record.Data.access_code+'</b>');$('#mobile_access_code__ID').text('<b>'+record.Data.access_code+'</b>');
    uid=record.I2;
    email_to=record.Data.email;
    email_body=$('#email__ID').html();

    sms=record.Data.sms;
    sms_to=record.Data.phone.replace(/-/g,'');
    sms_body=$('#mobile_email__ID').html();
})
//-----------------------------------------------
$('#send__ID').on('click',function(){
/*    var req={cmd:'send-email',db_pid:'20011578',qid:$vm.qid,To:email_to,Subject:email_subject,Body:email_body,Password:$('#dev_password__ID').val()}
    $VmAPI.request({data:req,callback:function(res){
        if(res.ret==1){
            $vm.alert("The email has been sent out to "+email_to);
            var data={Subject:email_subject,To:email_to,TP:v2}
            var dbv={S1:email_subject,S2:email_to,PUID:uid,V1:uid,V2:v2}
            var req={cmd:"add",qid:$vm.qid,db_pid:'20011579',data:data,dbv:dbv};
            $VmAPI.request({data:req,callback:function(res){
            }});
        }
        else{
            $vm.alert("Error");
        }
    }});
    if(sms=='on'){
        var req={cmd:'send-email',db_pid:'20011578',qid:$vm.qid,To:sms_to+"@directsms.com.au",Subject:email_subject,Body:sms_body,Password:$('#dev_password__ID').val()}
        $VmAPI.request({data:req,callback:function(res){
            $vm.alert("The message has been sent out to "+sms_to);
        }});
    }
    */
})
