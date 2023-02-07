let photos = ['../img/1.jpg', '../img/2.jpg', '../img/Robo.jpg', '../img/6.jpg', '../img/5.jpg', '../img/7.jpg', '../img/3.jpg', '../img/4.jpg', '../img/8.jpg', '../img/9.jpg', '../img/10.jpg', '../img/11.jpg', '../img/12.jpg', '../img/15.jpg', '../img/14.jpg', '../img/13.jpg']


///// shows all images ////
function render_content() {
    for (i = 0; i < photos.length; i++) {
        document.getElementById('gallery').innerHTML += template_HTML(photos, i)
    }
}


function template_HTML(photos, i) {
    return `
            <img src="${photos[i]}" class="all-images" onclick="open_bg_1(), show_photos(${i}), show_arrows(${i})">
    `;
}


///// shows the individual images ///////
function show_photos(i) {
    document.getElementById('show_pics').innerHTML = '';
    document.getElementById('show_pics').innerHTML += show_photos_HTML(i);
}


function show_photos_HTML(i) {
    return `
    <div class="bg1-child"  onclick="event.stopPropagation()">
        <img src="${photos[i]}">
    </div>
    `;
}


/////// adds the arrow-icons/img to the Arrow-divs ////// 
function show_arrows(i) {
    document.getElementById('arrow-right').innerHTML = '';
    document.getElementById('arrow-right').innerHTML += `
        <img src="../img/arrow-right.ico" onclick="next(${i})">
    `;

    document.getElementById('arrow-left').innerHTML = '';
    document.getElementById('arrow-left').innerHTML = `
    <img src="../img/arrow-left.ico" onclick="previous(${i})">
    `;
}


////// next image /////
function next(i) {
    let next_img = document.getElementById('show_pics');

    if (i < photos.length - 1) {
        i++
    } else {
        i = 0
    }

    show_photos(i);
    show_arrows(i);

}


/////// previous image  //////////
function previous(i) {
    let previous_img = document.getElementById('show_pics');

    if (i !== 0) {
        i--
    } else {
        i = photos.length - 1
    }

    show_photos(i);
    show_arrows(i);

}


////// opens background of the individual images ///////
function open_bg_1() {
    document.getElementById('show_pics').classList.remove('d-none')
    document.getElementById('arrow-left').classList.remove('d-none')
    document.getElementById('arrow-right').classList.remove('d-none')
}


///// closes background of the individual images /////////
function close_bg_1() {
    document.getElementById('show_pics').classList.add('d-none');
    document.getElementById('arrow-left').classList.add('d-none');
    document.getElementById('arrow-right').classList.add('d-none');
}