<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
<body>
    <?php
    $firstname=val($_POST["firstname"]);
    $lastname=val($_POST["lastname"]);
    $email=val($_POST["email"]);

    function val($data){
        $data=trim($data);
        $data=stripslashes($data);
        $data=htmlspecialchars($data);
        return $data;
    }

    $servername="localhost";
    $username="root";
    $password="ankitrai@4498";
    $dbname="mywebsite";

    $conn =new  mysqli($servername,$username,$password,$dbname);
    if($conn->connect_error){
        die("Error:").$conn->connect_error;
    }
     $sq="INSERT INTO users(firstname,lastname,email) VALUES('$firstname','$lastname','$email')";
   
     if($conn->query($sq)===true){
         $ins=$conn->insert_id;
         echo "New record added Sucessfuly!"."<br>"."record id is:".$ins;
     }else{
         echo "Error:".$sq."<br>".$conn->error;
     }
    
     $conn->close();
    ?>
</body>
</html>