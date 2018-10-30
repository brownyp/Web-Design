function checkInput(inputName, inputTel,inputAddress,inputEmail, formId) {
    var flag = true;
    var tel = /^[0-9]*$/;
    var email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var username = /^[A-Za-z0-9]+$/;
    if (document.getElementsByName(inputName)[0].value.replace(/(^\s*)|(^[0-9]*$)|(\s*$)/g, "").length ===0) {
        document.getElementById('val1').innerText = 'Input something!';
        flag=false;
    }else if(!username.test(document.getElementsByName(inputName)[0].value)){
        document.getElementById('val1').innerText = 'Input Number!';
        console.log(username.test(inputName));
        flag=false;
    }else{
        document.getElementById('val1').innerText = '';
    }


    if(document.getElementsByName(inputTel)[0].value.replace(/(^\s*)|(\s*$)/g, "").length ===0){
        document.getElementById('val2').innerText = 'Input something!';
        flag=false;
    }else if(!tel.test(document.getElementsByName(inputTel)[0].value)){
        document.getElementById('val2').innerText = 'Input PhoneNumber!';
        console.log(tel.test(inputTel));
        flag=false;
    }else{
        document.getElementById('val2').innerText = '';
    }


    if(document.getElementsByName(inputAddress)[0].value.replace(/(^\s*)|(\s*$)/g, "").length ===0){
        document.getElementById('val3').innerText = 'Input something!';
        flag=false;
    }else{
        document.getElementById('val3').innerText = '';
    }


    if(document.getElementsByName(inputEmail)[0].value.replace(/(^\s*)|(\s*$)/g, "").length ===0){
        document.getElementById('val4').innerText = 'Input something!';
        flag=false;
    }else if(!email.test(document.getElementsByName(inputEmail)[0].value)){
        document.getElementById('val4').innerText = 'Input Email!';
        console.log(email.test(inputEmail));
        flag=false;
    }else{
        document.getElementById('val4').innerText = '';
    }

    if(flag)
    {
        document.getElementById(formId).submit();
    }
}

function checkPInput(name) {
    var list = document.getElementsByClassName(name);
    var flag = true;
    var tel = /^[0-9]*$/;
    // alert(list.length);
    var flag1 = true;


    // for (var i = 0; i < list.length; i++) {
    //     if (document.getElementsByClassName(name)[i].value == "") {
    //         document.getElementById('warn' + i).innerText = '';
    //         flag = false;
    //     }
    //     else if (!tel.test(document.getElementsByClassName(name)[i].value)) {
    //         document.getElementById('warn' + i).innerText = 'Input Number!';
    //         flag = false;
    //     } else {
    //         document.getElementById('warn' + i).innerText = '';
    //         flag = true;
    //     }
    // }

    for (var i = 0; i < list.length; i++) {
        if (document.getElementsByClassName(name)[i].value === "") {
            document.getElementById('warn' + i).innerText = '';
        }else{
            if (!tel.test(document.getElementsByClassName(name)[i].value)) {
                document.getElementById('warn' + i).innerText = 'Input Number!';
                document.getElementById("chargeTotal").value = '';
                flag = false;
            } else {
                document.getElementById('warn' + i).innerText = '';
                flag = true;
            }
        }
    }

    for (var i = 0; i < list.length; i++) {
        if (!tel.test(document.getElementsByClassName(name)[i].value)) {
            document.getElementById('warn' + i).innerText = 'Input Number!';
            document.getElementById("chargeTotal").value = '';
            flag = false;
            alert("Invalid Input")
        }
    }

    if (flag) {
        var test = 0;
        var size = document.getElementById("productSize").value;
        for (var k = 0; k < size; k++) {
            var inputNum = document.getElementById("amountInput" + k).value;
            var priceNum = document.getElementById("price" + k).value;

            test += inputNum * priceNum;
        }

        document.getElementById("chargeTotal").value = test;
        document.getElementById("chargeNum").value = test;
        document.getElementById("orderNow1").disabled = false;
        }


}