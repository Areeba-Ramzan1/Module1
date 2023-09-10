var rollV, nameV, sectionV;

function readForm() {
    rollV = document.getElementById("rollNo").value;
    nameV = document.getElementById("name").value;
    sectionV = document.getElementById("section").value;
    console.log(rollV, nameV, sectionV);
}

// Create
document.getElementById("create").onclick = function () {
    readForm();

    firebase.database().ref("student/" + rollV)
        .set(
            {
                rollNo: rollV,
                name: nameV,
                section: sectionV,
            }
        );
    alert("Data Created Successfully🙂");
    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("section").value = "";
}

// Read
document.getElementById("read").onclick = function(){
    readForm();

    firebase.database().ref("student/" + rollV)
    .on("value" , function(snap)
        {
          document.getElementById("rollNo").value = snap.val().rollNo;
          document.getElementById("name").value = snap.val().name;
          document.getElementById("section").value = snap.val().section;
        }
    );
    alert("Data read Successfully🙂");
 }

// Update 
document.getElementById("update").onclick = function () {
    readForm();

    firebase.database().ref("student/" + rollV)
        .update(
            {
                // rollNo: rollV,
                name: nameV,
                section: sectionV,
            }
        );
    alert("Data Updated Successfully🙂");
    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("section").value = "";
}

// Delete
document.getElementById("delete").onclick = function () {
    readForm();

    firebase.database().ref("student/" + rollV)
        .remove();

    alert("Data Deleted Successfully🙂");
    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("section").value = "";
}

