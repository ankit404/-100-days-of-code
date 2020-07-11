<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>phpDocument</title>
</head>
<body>
    <?php
    
    // foreach($car as $value){
    // echo "$value <br>";
    //asort :- sort by value ;
    //arsort:-sorting in reverse order;
    //ksoet:-sorting using key;
   $arr =array("he"=>"01","she"=>"02","they"=>"03");
   ksort($arr);
   foreach($arr as $v=>$v_value){
       echo "key: ".$v." , "."value:".$v_value;
       echo "<br>";
   }

   echo $_SERVER["PHP_SELF"];
   echo "<br>";
   echo $_SERVER["SERVER_NAME"];
    ?>
</body>
</html>