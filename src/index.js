"use Strict";

const $ = require('jquery');

const sayHello = hello => console.log('Hello');
sayHello();

$('#button').click(e => {
    $('#message').text("Hello World!");
    $('body').css('color', 'red');
});