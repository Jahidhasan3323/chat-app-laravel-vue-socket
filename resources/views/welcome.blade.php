<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chat App 1</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          crossorigin="anonymous">
    <link href="http://127.0.0.1:8000/css/app.css">

</head>
<body>
<div id="app">
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-col-md-6">
                <div class="card mt-5">
                    <div class="card-header bg-info text-white">
                        Chat app 1
                    </div>
                    <chat></chat>
                </div>
            </div>
        </div>
    </div>
</div>


{{--<script src="/socket.io/socket.io.js"></script>--}}
<script src="http://127.0.0.1:8000/js/app.js"></script>
<script>
    // var socket = io();
    // var socket = io("http://localhost:3001/test")
    // // console.log('djkjd', ip + ':' +so_port)
    // socket.emit('created', 'hello')
</script>
</body>
</html>
