<?php
$servername="localhost";
$username="root";
$password="ankitrai@4498";
$dbname="mywebsite";

$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("Error in connection:").$conn->connect_error;
}
if(isset($_GET["message"])){
	if(($_GET["message"])=="delete"){
		echo "Record was deleted! <br>";
		echo "<br>";
	}elseif($_GET["message"]=="Details Added!"){
		echo "Record was added";
		echo "<br>";
	}
}

$sql="SELECT id,firstname,lastname,email From users";
$result=$conn->query($sql);
?>
<?php
if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
		?>
		<table width="300" border="1" cellpadding="10" cellspacing="1">
			<br>
       <tr>
		<td>ID</td>
		<td><?php echo $row["id"]; ?></td>
		<td><a href="deluser.php?id=<?php echo $row["id"]; ?>">Delete</a>
		<br><a href="update.php?id=<?php echo $row["id"]; ?>">Update</a></td>

	</tr>
	  <tr>
		<td>First Name</td>
		<td><?php echo $row["firstname"]; ?></td>
		<td>&nbsp;</td>
	  </tr>
	  <tr>
		<td>Last Name</td>
		<td><?php echo $row["lastname"]; ?></td>
		<td>&nbsp;</td>
	  </tr>
	  <tr>
		<td>Email</td>
		<td><?php echo $row["email"]; ?></td>
		<td>&nbsp;</td>
	  </tr>
	  </table>

        
	<?php
        }
    ?>
        
<?php
    }else{
        echo "0 Results found";
    }
    
    $conn->close();
?>