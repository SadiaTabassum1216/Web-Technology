<!DOCTYPE html>
<html>
<head>
	<title>My Form</title>
	<style>
		form {
			background-color: #f2f2f2;
			padding: 20px;
			border-radius: 5px;
		}
		input[type=text], input[type=number] {
			padding: 10px;
			border: none;
			border-radius: 5px;
			margin-bottom: 10px;
		}
		input[type=submit] {
			background-color: #4CAF50;
			color: white;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
		}
		input[type=submit]:hover {
			background-color: #45a049;
		}
	</style>
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
