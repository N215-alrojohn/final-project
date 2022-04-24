//variables
var homeContent=`<header>
<p class="header-text">Header goes here</p>
<p class="header-subtitle">Less important text goes here</p>
<p class="small-header-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Fugiat aliquid minus nemo sed est.</p>
<div class="headerbutton"><a href="#about">Read More</a></div>
</header>
<div class="home-quote">
<p class="quote-text">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
</p>
<p class="quote-name">John Smith</p>
<p class="quote-name-caption">Corporation CEO, books author.</p>
</div>
<div class="upcoming-events">
    <div class="upcoming-events-title"><p>UPCOMING EVENTS:</p></div>
    <div class="all-events">
    <div class="event-container">
        <div class="event-date"><h1>06</h1><p>JUN</p></div>
        <div class="event-info">
            <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
            <div class="event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
        </div>
    </div>
    <div class="event-container">
        <div class="event-date"><h1>30</h1><p>JUL</p></div>
        <div class="event-info">
            <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
            <div class="event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
        </div>
    </div>
    <div class="event-container">
        <div class="event-date"><h1>30</h1><p>AUG</p></div>
        <div class="event-info">
            <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
            <div class="event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
        </div>
    </div>
    <div class="event-container">
        <div class="event-date"><h1>23</h1><p>NOV</p></div>
        <div class="event-info">
            <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
            <div class="event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
        </div>
    </div>
    <div class="event-container">
        <div class="event-date"><h1>23</h1><p>DEC</p></div>
        <div class="event-info">
            <div class="event-title">Sed et persipiatis unde omnis iste natus</div>
            <div class="event-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</div>
        </div>
    </div>
</div>
</div>`;
var aboutContent=`<div class="about-header"></div>
<div class="about-title"><p>OUR HISTORY:</p></div>
<p class="about-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
`;
var galleryContent=`<div class="gallery-title"><p>GALLERY:</p></div>
<div class="gallery-row">
    <a href="#foodfestival"> <div class="gallery-yellow"></div></a>
    <a href="#dj"> <div class="gallery-pink"></div></a>
    <a href="#speech"> <div class="gallery-green"></div></a>
</div>
<div class="gallery-row">
    <a href="#openfoodfest"> <div class="gallery-purple"></div></a>
    <a href="#international"> <div class="gallery-teal"></div></a>
</div>`;
var blogContent=`<div class="blog-title"><p>BLOG:</p></div>
<div class="blog-container">
    <a href="#blog1"><div class="blog-box">
        <div class="blog-date"><h1>06</h1><p>JUN</p></div>
        <div class="blog-info">
            <div class="blog-image"></div>
            <div class="blog-info-title"><p>Sed et persipiatis unde omnis iste natus</p></div>
            <div class="blog-info-text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
        </div>
    </div></a>
    <a href="#blog2"><div class="blog-box">
        <div class="blog-date"><h1>30</h1><p>JUL</p></div>
        <div class="blog-info">
            <div class="blog-image"></div>
            <div class="blog-info-title"><p>Sed et persipiatis unde omnis iste natus</p></div>
            <div class="blog-info-text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
        </div>
    </div></a>
    <a href="#blog3"><div class="blog-box">
        <div class="blog-date"><h1>30</h1><p>AUG</p></div>
        <div class="blog-info">
            <div class="blog-image"></div>
            <div class="blog-info-title"><p>Sed et persipiatis unde omnis iste natus</p></div>
            <div class="blog-info-text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
        </div>
    </div></a>
    <a href="#blog4"><div class="blog-box">
        <div class="blog-date"><h1>23</h1><p>NOV</p></div>
        <div class="blog-info">
            <div class="blog-image"></div>
            <div class="blog-info-title"><p>Sed et persipiatis unde omnis iste natus</p></div>
            <div class="blog-info-text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
        </div>
    </div></a>
    <a href="#blog5"><div class="blog-box">
        <div class="blog-date"><h1>23</h1><p>DEC</p></div>
        <div class="blog-info">
            <div class="blog-image"></div>
            <div class="blog-info-title"><p>Sed et persipiatis unde omnis iste natus</p></div>
            <div class="blog-info-text"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p></div>
        </div>
    </div></a>
</div>`;
var contactContent=`<div class="contact-title">
<p>CONTACT US:</p>
</div>
<div class="contact-container">
<div class="contact-form">
    <div class="small-form-box"><p>Your Name...</p></div>
    <div class="small-form-box"><p>Email Address...</p></div>
    <div class="small-form-box"><p>Company...</p></div>
    <div class="message-box"><p>Message...</p></div>
</div>
<div class="contact-map"></div>
</div>
<div class="submit-button-container"><div class="submit-button"><p>SEND MESSAGE</p></div></div>
<div class="footer-spacing"></div>`;
//gallery navigation
var foodfestivalContent= `<div class="foodfestival-header"></div>
<div class="gallery-pages-title" style="color: #ffd140">
    <p class="number">1.</p>
    <p class="title">food festival</p>
</div>
<div class="gallery-pages-text">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>`;
var djContent= `<div class="dj-header"></div>
<div class="gallery-pages-title" style="color: #ee4367">
    <p class="number">2.</p>
    <p class="title">dee-jay</p>
</div>
<div class="gallery-pages-text">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>`;
var speechContent= `<div class="speech-header"></div>
<div class="gallery-pages-title" style="color: #08ad69">
    <p class="number">3.</p>
    <p class="title">speech</p>
</div>
<div class="gallery-pages-text">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>`;
var openfoodfestContent= `<div class="open-foodfest-header"></div>
<div class="gallery-pages-title" style="color: #540d6e">
    <p class="number">4.</p>
    <p class="title" style="font-size: 115px; margin-top: -160px;">open foodfest</p>
</div>
<div class="gallery-pages-text">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>`;
var internationalContent= `<div class="international-header"></div>
<div class="gallery-pages-title" style="color: #3bceab">
    <p class="number">5.</p>
    <p class="title" style="font-size: 115px; margin-top: -158px;">international</p>
</div>
<div class="gallery-pages-text">
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>`;

var blog1Content= `<div class="blog-page-header">
<div class="blog-page-date">
    <h1>06</h1>
    <p>JUN</p>
</div>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #1:</p>
<p class="blog-page-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #2:</p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="footer-spacing"></div>`;
var blog2Content= `<div class="blog-page-header">
<div class="blog-page-date">
    <h1>30</h1>
    <p>JUL</p>
</div>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #1:</p>
<p class="blog-page-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #2:</p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="footer-spacing"></div>`;
var blog3Content= `<div class="blog-page-header">
<div class="blog-page-date">
    <h1>30</h1>
    <p>AUG</p>
</div>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #1:</p>
<p class="blog-page-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #2:</p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="footer-spacing"></div>`;
var blog4Content= `<div class="blog-page-header">
<div class="blog-page-date">
    <h1>23</h1>
    <p>NOV</p>
</div>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #1:</p>
<p class="blog-page-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #2:</p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="footer-spacing"></div>`;
var blog5Content= `<div class="blog-page-header">
<div class="blog-page-date">
    <h1>23</h1>
    <p>DEC</p>
</div>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #1:</p>
<p class="blog-page-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="blog-page-content">
<p class="blog-page-title">Header #2:</p>
<p class="blog-page-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
</div>
<div class="footer-spacing"></div>`;

//this function is being called from the app.js and has the page name
export function modelPageName(pgName){

    //$("#app").html(eval(pgName));


    if(pgName == "homeContent") {
        //nav a
        $("nav a").removeClass("black-text")
        .addClass("white-text");
        //span
        $("nav").removeClass("nav-black")
        .addClass("nav-white");
    } else {
        //nav a
        $("nav a").removeClass("white-text")
        .addClass("black-text");
        //span
        $("nav").removeClass("nav-white")
        .addClass("nav-black");
    }

try {
    eval(pgName);
    $("#app").html(eval(pgName));
    } catch (e) {
    console.log("hello", e);``
    }

}