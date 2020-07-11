<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHParound</title>
</head>
<body>
    <?php
        // echo "ankit rai<hr/>";
        // $x=2+/*5*/+6;
        // echo $x;
        // echo "<hr />";
        // $car="mercedez";
        // echo $car;
        // echo "<hr/>";
        // $color="blue";
        // echo "I want to drive ". $car. " of". $color. " in color";
        /*so we have 4 string methods 
        1.str_word_count(for no fo words )
        2.strrev(for reversing a string)
        3.strpos("hello world","world")//ans-6

        */
        
        function add(){
           
            static $sum=1;
            $arr=array("ank","dull","kio","kl");
            var_dump($arr[0]);
            var_dump($sum);
                   
            $sum+=2;
            echo "<br>";
            echo 11;
            echo "<br>";
            echo strpos("hello world","world");
            echo "<br>";
            echo str_replace("world","ankit","hello world!");

        } 
        add();
        echo "<hr />";
        add();
        echo "<hr />";
        add();
        echo "<hr />";
        add();
        echo "<hr />";

    ?>
</body>
</html>