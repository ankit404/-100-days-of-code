<?php
$servername="localhost";
$username="root";
$password="ankitrai@4498";
$dbname="mywebsite";

$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("Error in connection:").$conn->connect_error;
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Login Form in PHP </title>
  <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
 <div id="login">
  <h2>Login Form</h2>
  <form action="adddetails.php" method="post">
   <label>FirstName :</label>
   <input id="" name="fname" placeholder="firstname" type="text">
   <label>LastName :</label>
   <input id="" name="lname" placeholder="lastname" type="text">
   <label>Email :</label>
   <input id="" name="email" placeholder="email" type="email">
    <br><br>
   <input  type="submit" name="submit" value=" Add details ">

   
  </form>
 </div>
</body>
</html>
<?php
$conn->close();
?>