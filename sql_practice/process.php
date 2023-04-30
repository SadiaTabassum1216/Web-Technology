<?php
// Retrieve form data
$fruit_id = $_POST['fruit_id'];
$fruit_name = $_POST['fruit_name'];
$fruit_price = $_POST['fruit_price'];

// Print the form data
echo "<div style='background-color: #f2f2f2; padding: 20px; border-radius: 5px;'>";
echo "<p style='font-weight: bold;'>Fruit ID:</p> <p>" . $fruit_id . "</p>";
echo "<p style='font-weight: bold;'>Fruit Name:</p> <p>" . $fruit_name . "</p>";
echo "<p style='font-weight: bold;'>Fruit Price:</p> <p>" . $fruit_price . "</p>";
echo "</div>";



// Include database connection code
include "connection.php";


// Insert form data into database
$sql = "INSERT INTO fruits (id, name, price) VALUES ('$fruit_id', '$fruit_name', '$fruit_price')";

if (mysqli_query($connection, $sql)) {
    echo "<script>alert('New record created successfully');</script>";
} else {
    echo "<script>alert('Error: " . $sql . "<br>" . mysqli_error($conn) . "');</script>";
}

mysqli_close($connection);





?>
