// Event pada saat link di klik

$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1200, 'easeInOutExpo');

    e.preventDefault();

});

// untuk menyimpan parallax

$(window).scroll(function () {
    var wScroll = $(this)
})