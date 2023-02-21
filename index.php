<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>

    <link href="node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="node_modules/animate.css/animate.min.css" rel="stylesheet">
    <link href="node_modules/font-awesome/css/all.min.css" rel="stylesheet">

    <link href="assets/app.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar mobile" style="background-color: #267567; position: sticky;
    top: 0; z-index: 999;">
        <div class="container py-2">
            <a class="navbar-brand text-light" href="#">
                <img src="assets/img/bot.png" alt="Bootstrap" width="40" height="40">
                <span style="font-size: 18px;">DLSAU Course Assistance Chatbot</span>
            </a>
        </div>
    </nav>
    
    <div class="chat-mobile chat-body mobile">
    </div>

    <div class="wrapper-all mt-5">
        <div id="chat-body">
            <div class="chat">
                <div class="chat-header text-center">
                    <div class="container py-2">
                        <a class="navbar-brand text-light" href="#">
                            <!-- <img src="assets/img/bot.png" alt="Bootstrap" width="40" height="40"> -->
                            <span style="font-size: 18px;">DLSAU Course Assistance Chatbot</span>
                        </a>
                    </div>
                </div>
                <div class="messages-chat">
                    
                </div>
            </div>
        </div>
    </div>

    <div class="modal animate__animated animate__bounceInUp" id="modal-name" tabindex="-1" role="dialog" data-bs-backdrop="static" data-bs-keyboard="false">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" style="border-radius: 25px;padding-top: 30px; background-color: #E8F0F2;">
            <div class="modal-body">
                <div class="mb-3" style="display: flex;align-items: center;justify-content: center;">
                    <img src="assets/img/bot.png" class="position-absolute top-0 start-50 translate-middle" style="width: 60px; margin-top: -40px;">
                    <div class="input-icons">
                        <i class="fa fa-paper-plane icon"></i>
                        <input type="text" class="form-control text-center rounded-pill border-0" id="name" name="name" placeholder="What's Your Name?" autocomplete="off" style="margin: auto; font-size: 15px; padding: 10px; text-align: center;" maxlength="20">
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="assets/app.js"></script>
</body>
</html>