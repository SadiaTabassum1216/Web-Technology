<!DOCTYPE html>
<html>

<head>
    <title>My Form</title>
    <link rel="stylesheet" type="text/css" href="style.css">

</head>

<body>
    <form action="process.php" method="post">
        <label for="fruit_id">Fruit ID:</label><br>
        <input type="number" id="fruit_id" name="fruit_id"><br>
        <label for="fruit_name">Fruit Name:</label><br>
        <input type="text" id="fruit_name" name="fruit_name"><br>
        <label for="fruit_price">Fruit Price:</label><br>
        <input type="number" id="fruit_price" name="fruit_price"><br>
        <input type="submit" value="Submit">
    </form>
</body>

</html>
