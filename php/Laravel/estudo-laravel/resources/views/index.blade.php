<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Tela inicial</title>
	<style>
		.img{
			margin: 20px;
		}

		.form{
			margin: 20px;
		}
		input{
			padding: 5px;
			margin: 5px;
		}
		strong{
			color: red;
		}
	</style>
</head>
<body>
	<div class="form">
		<form action="{{route('user.store')}}" method="POST">
			@csrf
			<input type="text" name="name" placeholder="Name">
			@error('name')
				<strong>{{$message}}</strong>
			@enderror
			<br>
			<input type="email" name="email" placeholder="E-mail">
			@error('name')
				<strong>{{$message}}</strong>
			@enderror
			<br>
			<input type="password" name="password" placeholder="Password">
			@error('name')
				<strong>{{$message}}</strong>
			@enderror
			<br>
			<input type="submit" value="Enviar"><br>
		</form>
	</div>

	<div class="img">
		<img src="{{asset('img/img2.png')}}" width=500  alt="Erro ao encontrar a imagem">
	</div>
</body>
</html>