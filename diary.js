header = document.getElementById("user_name").value;
user_name = "<h1>" + "Welcome" + header;

function logout()
{
    localStorage.removeItem("user_name");
    window.location = "index.html";
}

function save()
{
    user_date = document.getElementById("date").value;
    user_note = document.getElementById("note").value;
    row = user_date + " - " + user_note;

    document.getElementById("output").innerHTML = row;
}