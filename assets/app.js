$(document).ready(function() {

    function scroll() {
        var n = $(document).height();
        $('html, body').animate({ scrollTop: n }, 50);
    }
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/chat/welcome',
        success: function(data) {
            var time = new Date;
            time = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

            $('.chat-body').append('<div class="message left mt-4 animate__animated animate__fadeInLeft"><p>' + data.message + '</p><span class="time">' + time + '</span></div>');
            $('.messages-chat').append('<div class="message animate__animated animate__fadeIn"><p class="text">' + data.message + '</p></div>');
            setTimeout(function(){
                $('#modal-name').modal('show');
            }, 2500);
        }
    });

    $('.icon').on('click', function () {
        var name = $('#name').val();
        if (name.length > 0) {
            $('#modal-name').modal('hide');
        }
    });

    $('#modal-name').on('hidden.bs.modal', function () {
        var name = $('#name').val();
        var time = new Date;
        time = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

        $('.chat-body').append('<div class="message right animate__animated animate__fadeInRight"><p>Hello, Im <span class="text-capitalize">' + name + '</span></p><span class="time">' + time + '</span></div>');
        $('.messages-chat').append('<div class="message text-only animate__animated animate__fadeIn"><div class="response"></div><p class="text">Hello, Im <span class="text-capitalize">' + name + '</span></p></div></div>');

        setTimeout(function(){
            $.ajax({
                type: 'POST',
                url: 'http://127.0.0.1:8000/api/chat/welcome',
                success: function(data) {
                    var message = data.message;
                    var time = new Date;
                    time = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

                    message = message.replace("chat_name", '<span class="text-capitalize">' + name + '</span>');
                    $('.chat-body').append('<div class="message left animate__animated animate__fadeInLeft"><p>' + message + '</p><span class="time">' + time + '</span></div>');
                    $('.messages-chat').append('<div class="message animate__animated animate__fadeIn"><p class="text">' + message + '</p></div>');
                    

                    setTimeout(function(){
                        $.ajax({
                            type: 'POST',
                            url: 'http://127.0.0.1:8000/api/chat/ready',
                            success: function(data) {
                                var time = new Date;
                                time = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

                                $('.chat-body').append('<div class="message left animate__animated animate__fadeInLeft"><p>' + data.message + '</p><span class="time">' + time + '</span></div>');
                                $('.chat-body').append('<div class="choices left"><span id="yes-ready" class="option yes-ready animate__animated animate__bounceIn animate__delay-1s">yes</span><span id="no-ready" class="option no-ready animate__animated animate__bounceIn animate__delay-1s">no</span></div>');

                                $('.messages-chat').append('<div class="message animate__animated animate__fadeIn"><p class="text">' + data.message + '</p></div>');
                                $('.messages-chat').append('<div class="choices-web left"><span id="yes-ready" class="option yes-ready animate__animated animate__bounceIn animate__delay-1s">yes</span><span id="no-ready" class="option no-ready animate__animated animate__bounceIn animate__delay-1s">no</span></div>');
                                
                                scroll();
                            }
                        });
                    }, 1000);
                }
            });
        }, 1000);
    });

    $('.chat-body, .messages-chat').on('click', '.yes-ready', function() {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/api/chat/ready',
            success: function(data) {
                var time = new Date;
                time = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

                $('.chat-body').append('<div class="message right animate__animated animate__fadeInRight"><p>Yes</p><span class="time">' + time + '</span></div>');
                $('.messages-chat').append('<div class="message text-only animate__animated animate__fadeIn"><div class="response"></div><p class="text">Yes</p></div></div>');
                setTimeout(function(){
                    $('.chat-body').append('<div class="message left animate__animated animate__fadeInLeft"><p>Please choose an exam</p><span class="time">' + time + '</span></div>');
                    $('.messages-chat').append('<div class="message animate__animated animate__fadeIn"><p class="text">Please choose an exam</p></div>');
                    scroll();
                }, 1000);

                setTimeout(function(){
                    $.ajax({
                        type: 'GET',
                        url: 'http://127.0.0.1:8000/api/chat/course',
                        success: function(data) {
                            $.each(data, function(index, value) {
                                $('.chat-body').append('<div class="course left option">' + value + '</div>');
                                $('.messages-chat').append('<div class="course-web left option">' + value + '</div>');
                            });
                            scroll();
                        }
                    });
                }, 2000);
            }
        });
    });

    $('.chat-body, .messages-chat').on('click', '.no-ready', function() {
        var time = new Date;
        time = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});
        
        $('.chat-body').append('<div class="message right animate__animated  animate__fadeInRight"><p>No</p><span class="time">' + time + '</span></div>');
        $('.messages-chat').append('<div class="message text-only animate__animated animate__fadeIn"><div class="response"></div><p class="text">No</p></div></div>');
        setTimeout(function(){
            $('.chat-body').append('<div class="message left animate__animated animate__fadeInLeft"><p>Take your time</p><span class="time">' + time + '</span></div>');
            $('.messages-chat').append('<div class="message animate__animated animate__fadeIn"><p class="text">Take your time</p></div>');
        }, 1000);
    });

    $('.chat-body, .messages-chat').on('click', '.course-web, .course', function() {
        var time = new Date;
        time = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false});

        var course = this.textContent;

        $('.chat-body').append('<div class="message right animate__animated animate__fadeInRight"><p>' + course + '</p><span class="time">' + time + '</span></div>');
        $('.messages-chat').append('<div class="message text-only animate__animated animate__fadeIn"><div class="response"></div><p class="text">' + this.textContent + '</p></div></div>');

        setTimeout(function(){
            $.ajax({
                type: 'GET',
                url: 'http://127.0.0.1:8000/api/chat/exam/' + course,
                success: function(data) {
                    var question;
                    $.each(data, function(index, value) {
                        // console.log(value.question)
                        // question = 
                        $('.chat-body').append('<div data-course="' + value.course + '" data-id="' + value.id + '" class="message left exam-q animate__animated animate__fadeInLeft"><p>' + value.question + '</p><span class="time">' + time + '</span></div>');
                        $('.messages-chat').append('<div data-course="' + value.course + '" data-id="' + value.id + '" class="message exam-q animate__animated animate__fadeIn"><p class="text">' + value.question + '</p></div>');
                    });
                    scroll();
                }
            });
        }, 1000);
    });

    $('.chat-body, .messages-chat').on('click', '.exam-q', function() {
        // console.log('first');
        var coursesQ = $(this).attr("data-course");
        var id = $(this).attr("data-id");
        var qs = [];
        var courses;

        if (!qs.includes(id)) {
            qs.push(id);
            if (coursesQ.includes("|")) {
                courses += coursesQ;
            }
            else {
                courses += coursesQ + '|';
            }
        }
        else {
            var index = qs.indexOf(id);
            qs.splice(index, 1);
        }
        console.log(id);
        console.log(qs);
    });

});



  