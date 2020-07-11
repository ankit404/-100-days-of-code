
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
//$sq = "SELECT DISTINCT id,firstname,lastname,email,date FROM users";
$sq= "SELECT *From users";
$result = $conn->query($sq);
if ($result->num_rows>0){
    while($row =$result->fetch_assoc()){
        echo "ID:" .$row["id"]."- Name:".$row["firstname"]." ".$row["lastname"]."- Email:".$row["email"]."- Date: ".$row["date"]."<br>";
    }

}else{
    echo "0 results";
}

?>