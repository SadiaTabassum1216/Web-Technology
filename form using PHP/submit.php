<html>
  <head>
    <title>submitted value</title>
    <style>
      body{
        font-size:larger;
        background-color: #d3e0e4;
        padding: 80px;
      }

      img{
        max-height: 300px;
      }
    
      #left{   
        float: left;
      }

      #right{
        float: right;
      }
    </style>

  </head>
<body>
<div id="left">
  
<?php
  $fname = $_POST["fname"];
  $lname = $_POST["lname"];
  $email = $_POST["email"];
  $address = $_POST["address"];
  $photo = $_FILES["photo"]["name"];

  echo "<p>Name: ${fname} ${lname}</p>";
  echo "<p>Email: ${email}</p>";
  echo "<p>Address: ${address}</p>";
  ?> 
</div>


 <div id="right">
 <?php 

  $file_tmp = $_FILES['photo']['tmp_name'];
  move_uploaded_file($file_tmp, "uploads/{$photo}");
  echo "<img src='uploads/{$photo}' alt='Image'>";

 ?>
 </div>

</body>
</html>
