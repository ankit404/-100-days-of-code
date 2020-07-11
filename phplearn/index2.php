<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phparound2</title>
</head>
<body>
        <?php
        class Person{
            public $firstname;
            public $lastname;
            public $age;

            public function __construct($firstname,$lastname,$age){
                $this->firstname=$firstname;
                $this->lastname=$lastname;
                $this->age=$age;
            }
            public function hello(){
                return "i am ".$this->firstname." ".$this->lastname." of age ".$this->age;
            }

        }
        $person1= new Person("ankit","rai",22);
        echo $person1->hello();
        ?> 
          
</body>
</html>
