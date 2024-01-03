<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

</head>

<body>

 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script> 

    <div class="container" id="container">
        <div style="position: relative; display: flex; align-items: center;">
            <p style="position: relative; text-align: left; margin-right: auto;">User Name</p>
            <p style="text-align: right; position: relative;">Action</p>
        </div>

        @foreach($usersD as $user)
            @php
                $name1 = "modal" . $loop->index;
            @endphp
            <div style="position: relative; display: flex; align-items: center;">
                <p style="position: relative; text-align: left; margin-right: auto;">{{ $user->name }}</i></p>
                <button type="button"  data-toggle="modal" data-target="#{{ $name1 }}" style="border:0px ; background-color:white"><i class="bi bi-eye"></i></button>
            </div>

            <div class="modal fade" id="{{ $name1 }}" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title" style="text-align:center">{{ $user->name }}</h4>
                        </div>
                        <div class="modal-body">
                            <p>Id: {{ $user->id }} &emsp; Email:{{ $user->email }}&emsp; Gender:{{ $user->gender }} &emsp; Status:{{ $user->status }}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

</body>

</html>
