    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>prepared statement</title>
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

    $conn =new mysqli($servername,$username,$password,$dbname);
    if($conn->connect_error){
        die("Error!").$conn->connect_error;
    }
    //prepare statement
$stmt=$conn->prepare("INSERT INTO users(firstname,lastname,email) VALUES(?,?,?)");;
//bind statement 
$stmt->bind_param("sss",$firstname,$lastname,$email);
//parameteres
$firstname="rahul";
$lastname="singh";
$email="rahul@cmom";
$stmt->execute();

$firstname="ranjan";
$lastname="das";
$email="das@cmom";
$stmt->execute();

echo "sucessfully executed";

$stmt->close;
$conn->close;

    ?>
    </body>
    </html>