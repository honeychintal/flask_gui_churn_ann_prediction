$(document).ready(function(){
    $('#crscorechk').hide();
    $('#balnchk').hide();
    $('#agechk').hide();
    $('#salchk').hide();
    $('#crholdchk').hide();
    $('#actichk').hide();
    $('#selchk').hide();
    $('#genderchk').hide();
    $('#tenurechk').hide();
    $('#prodchk').hide();

    var sel_err = true;
    var baln_err = true;
    var age_err = true;
    var sal_err = true;
    var ten_err= true;
    var prod_err= true;
    var crsc_err= true;

    //credit score start
    $('#jcrscore').keyup(function() {
        crscore_check();
    });
    
    function crscore_check()
    {
        var crsc_val=$('#jcrscore').val();
        if(isNaN(crsc_val))
        {
            $('#crscorechk').html("** NOT a valid credit score");
            $('#crscorechk').show();
            $('#crscorechk').focus();
            $('#crscorechk').css("color", "red");
            crsc_err = false;
            return false; 
        }
        if (crsc_val.length == '') {
            $('#crscorechk').show();
            $('#crscorechk').html("** YOU need to fill credit score");
            $('#crscorechk').focus();
            $('#crscorechk').css("color", "red");
            crsc_err = false;
            return false;
        }
        else
        {
            $('#crscorechk').hide();
        }
    } 
    //credit score end
    
    //balance start
    $('#jbalan').keyup(function() {
        balance_check();
    });

    function balance_check() 
    {
        var balance_val=$('#jbalan').val();
        if (balance_val.length == '') 
        {
            $('#balnchk').html("** Balance cannot be blank");
            $('#balnchk').show();
            $('#balnchk').focus();
            $('#balnchk').css("color", "red");
            baln_err = false;
            return false;
        }
        if(isNaN(balance_val))
        {
            $('#balnchk').html("** NOT a valid balance amount");
            $('#balnchk').show();
            $('#balnchk').focus();
            $('#balnchk').css("color", "red");
            baln_err = false;
            return false; 
        }
        else
        {
            $('#balnchk').hide();
        }
    }
    //balance end

    //age start
    $('#jage').keyup(function() {
        age_check();
    });

    function age_check() 
    {
        var age_val=$('#jage').val();
        if (age_val.length == '') 
        {
            $('#agechk').html("** Age cannot be blank");
            $('#agechk').show();
            $('#agechk').focus();
            $('#agechk').css("color", "red");
            age_err = false;
            return false;
        }
        if(isNaN(age_val))
        {
            $('#agechk').html("** NOT a valid Age");
            $('#agechk').show();
            $('#agechk').focus();
            $('#agechk').css("color", "red");
            age_err = false;
            return false; 
        }
        else
        {
            $('#agechk').hide();
        }
    }
    //age end

    //salary start
    $('#jestsal').keyup(function() {
        sal_check();
    });

    function sal_check() 
    {
        var sal_val=$('#jestsal').val();
        if (sal_val.length == '') 
        {
            $('#salchk').html("** Salary cannot be blank");
            $('#salchk').show();
            $('#salchk').focus();
            $('#salchk').css("color", "red");
            sal_err = false;
            return false;
        }
        if(isNaN(sal_val))
        {
            $('#salchk').html("** NOT a valid Salary");
            $('#salchk').show();
            $('#salchk').focus();
            $('#salchk').css("color", "red");
            sal_err = false;
            return false; 
        }
        else
        {
            $('#salchk').hide();
        }
    }
    //salary end

    //Tenure start
    $('#jtenure').keyup(function() {
        tenure_check();
    });

    function tenure_check() 
    {
        var ten_val=$('#jtenure').val();
        if (ten_val.length == '') 
        {
            $('#tenurechk').html("** Tenure cannot be blank");
            $('#tenurechk').show();
            $('#tenurechk').focus();
            $('#tenurechk').css("color", "red");
            ten_err = false;
            return false;
        }
        if(isNaN(ten_val))
        {
            $('#tenurechk').html("** NOT a valid Tenure");
            $('#tenurechk').show();
            $('#tenurechk').focus();
            $('#tenurechk').css("color", "red");
            ten_err = false;
            return false; 
        }
        else
        {
            $('#tenurechk').hide();
        }
    }
    //Tenure end

    //products start
    $('#jnoprod').keyup(function() {
        prod_check();
    });

    function prod_check() 
    {
        var prod_val=$('#jnoprod').val();
        if (prod_val.length == '') 
        {
            $('#prodchk').html("** No. of products cannot be blank");
            $('#prodchk').show();
            $('#prodchk').focus();
            $('#prodchk').css("color", "red");
            prod_err = false;
            return false;
        }
        if(isNaN(prod_val))
        {
            $('#prodchk').html("** NOT a valid number of products");
            $('#prodchk').show();
            $('#prodchk').focus();
            $('#prodchk').css("color", "red");
            prod_err = false;
            return false; 
        }
        else
        {
            $('#prodchk').hide();
        }
    }
    //products end


    //select button start
    function sel_chek()
     {
        var sel = $("#jresid");
        if (sel.val()=="")
         {
            $('#selchk').show();
            $('#selchk').html("** YOU need to select something");
            $('#selchk').focus();
            $('#selchk').css("color", "red");
            sel_err = false;
            return false;
        } 
        else
        {
            $('#selchk').hide();
        }
    }
    //select button end
   

    $('#subtn').click(function(){
        sel_err = true;
        baln_err = true;
        age_err = true;
        sal_err = true;
        ten_err= true;
        prod_err= true;
        crsc_err= true;

        crscore_check();
        balance_check();
        age_check();
        sal_check();
        tenure_check();
        prod_check();
        sel_chek();

        if((sel_err==true)&&(baln_err==true)&&(age_err==true)&&(sal_err==true)&&(ten_err==true)&&(prod_err==true)&&(crsc_err==true))
        {
            return true;
        }
        else
        {
            return false;
        }
        
    });
});