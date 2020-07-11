
<?php
    $servername= "localhost";
    $username="root";
    $password="ankitrai@4498";
    $dbname="mywebsite";
//con check
$conn = new mysqli($servername,$username,$password,$dbname);
//check conn
if ($conn->connect_error){
    die("connection failed :".$conn->connect_error);
}
echo "Connection established !";
$conn->close;
?>