var insertvalue,temp;
function insert(num)
{
    insertvalue=num;
    temp=num;
    document.form.textview.value= document.form.textview.value+insertvalue;
}       
function equal()
{            
    var eqe= document.getElementById("box").value;
    if(eqe.trim()=="")
        alert("Enter some values");
    else
        document.form.textview.value= eval(document.form.textview.value);

}
function clearr()
{
    document.form.textview.value="";
}
function backspace()
{
    var str=document.form.textview.value;
    document.form.textview.value=str.substring(0,str.length-1);
}