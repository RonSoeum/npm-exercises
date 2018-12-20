"use Strict";

const $ = require('jquery');
const niceMessage = require('./say-hello.js');

$(document).ready(function() {

    const sayHello = () => console.log('Hello');
    sayHello();

    $('#button').click(() => {
        $('#message').text("Hello World!");
        $('body').css('color', 'red');
    });

    $('#nice-message').text(niceMessage());

});// Ready