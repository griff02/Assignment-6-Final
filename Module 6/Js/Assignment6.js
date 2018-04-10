function CreateCustomer()
{
var objRequest = new XMLHttpRequest();
var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";

//Collect Customer data from web page
var id = document.getElementById("custid").value;
var name = document.getElementById("custname").value;
var city = document.getElementById("custcity").value;

//Create the parameter string
var newcustomer = '{"CustomerID":"' + id + '","CompanyName":"' + name +'","City":"' + city +'"}';         

//Checking for AJAx operation return
objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var result = JSON.parse(objRequest.responseText);
        OperationResult(result);
    }
};

//Start AJAX request
objRequest.open("POST", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(newcustomer);


function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
    document.getElementById("result").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}
}

/////Update Shipping Address Section///
function UpdateOrderAddress()
{
var objRequest = new XMLHttpRequest();
var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";

//Collect Customer data from web page
var orderid = document.getElementById("custorder#").value;
var shipadd = document.getElementById("custshipname").value;
var shipcity = document.getElementById("custshipadd").value;
var shipname = document.getElementById("custshipcity").value;
var shipzip = document.getElementById("custshipzip").value;

//Create the parameter string
var updateinfo = '{"OrderID":"' + orderid + '","ShipName":"' + shipname +'","ShipAddress":"' + shipadd + '","ShipCity":"' + shipcity +'","ShipPostcode":"' + shipzip +'"}';        

//Checking for AJAx operation return
objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var result = JSON.parse(objRequest.responseText);
        OperationResult(result);
    }
};

//Start AJAX request
objRequest.open("POST", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(updateinfo);


function OperationResult(output)
{
    if (output == 1)
    {
    document.getElementById("result2").innerHTML = "The operation was successful!";
    }
    else if (output == 0)
    {
        document.getElementById("result2").innerHTML = "Operation failed with an unspecified error" + "<br>" + output.Exception;
    }
    else if (output == -2)
    {
        document.getElementById("result2").innerHTML = "The data couldnt be deserialized" + "<br>" + output.Exception;
    }
    else if (output == -3)
    {
        document.getElementById("result2").innerHTML = "The record of Order ID couldnt be found" + "<br>" + output.Exception;
    }
}
}


////delete customer/////
function DeleteCustomer()
{
    var objRequest = new XMLHttpRequest();  
    var url ="https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    url += document.getElementById("deletecustid").value;

//Checks that the object has returned data
objRequest.onreadystatechange = function()
{
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {
    var result = JSON.parse(objRequest.responseText);
    OperationResult(result);
    }
};
//Initiate the server request
objRequest.open("GET", url, true);
var check = confirm("Are you sure you wish to delete this customer?");
if (check == true)
{
objRequest.send();
}


function OperationResult(output)
{
    if (output.DeleteCustomerResult.WasSuccessful == 1)
    {
    document.getElementById("result3").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result3").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}
}




function MenuChoice()
{
    if (document.getElementById("menu").value == "Create Customer")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Change Address")
    {
    document.getElementById("section1").style.visibility = "hidden";
    document.getElementById("section2").style.visibility = "visible";
    document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value== "Delete Customer")
    {  
    document.getElementById("section1").style.visibility = "hidden";
    document.getElementById("section2").style.visibility = "hidden";
    document.getElementById("section3").style.visibility = "visible";
    }
    else
    {
    document.getElementById("section1").style.visibility = "hidden";
    document.getElementById("section2").style.visibility = "hidden";
    document.getElementById("section3").style.visibility = "hidden";
    }
}
