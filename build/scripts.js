(function(){
    var hash = window.location.hash;
    var img_first = document.querySelector('img#first')
    var img_second = document.querySelector('img#second')
    var img_third = document.querySelector('img#third')

    var first_name = document.querySelector('#first-sales h2')
    var second_name = document.querySelector('#second-sales h2')
    var third_name = document.querySelector('#third-sales h2')

    var first_discount = document.querySelector('#first-sales p.discount')
    var second_discount = document.querySelector('#second-sales p.discount')
    var third_discount = document.querySelector('#third-sales p.discount')

    var firts_link = document.querySelector('#first-sales a')
    var second_link = document.querySelector('#second-sales a')
    var third_link = document.querySelector('#third-sales a')
})();

var hash_data = [{
    'hash': 'teddy',
    'sales': []
},{
    'hash': 'coffee',
    'sales': []
}]