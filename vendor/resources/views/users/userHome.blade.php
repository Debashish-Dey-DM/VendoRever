<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>User Home</title>
</head>
<body>
    <h1> Hi this is user HomePage </h1>
    <table class="table table-success table-striped">
    <thead>
        <tr>
            <th>Id</th>
            
        </tr>
    </thead>
    <tbody>
    @foreach ($users as $key => $user) 
    <tr>
        <td>{{$user->id}}</td>
        
    </tr>
    @endforeach
</tbody>
</body>
</html>