var MODEL = (function () {
  var homeContent = `<div class="homePage">
    <div class="hero home-page">
      <div class="container callout">
        <div class="header">
          <h1>travel-fly</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            aliquid minus nemo sed est.
          </p>
          <div class="read-more">Read More</div>
        </div>
      </div>
    </div>
    <section class="promos">
      <div class="wrapperTour">
        <div class="tours" id="isr">
          <h1>Israel</h1>
          <div class="price">from $1000</div>
          <a id="isrTour" href="#" class="learn-more">Learn More</a>
        </div>
        <div class="tours" id="usa">
          <h1>U.S.A</h1>
          <div class="price">from $1500</div>
          <a id="usaTour" href="#" class="learn-more">Learn More</a>
        </div>
        <div class="tours" id="aus">
          <h1>Australia</h1>
          <div class="price">from $1800</div>
          <a id="ausTour" href="#" class="learn-more">Learn More</a>
        </div>
      </div>
    </section>
    <section class="booking">
      <div class="booking-wrapper">
        <h1 class="booking-callout">Booking Form</h1>
        <div class="input-form">
          <div class="booking-info">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name..."
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email..."
            />
            <input
              type="text"
              name="country"
              id="country"
              placeholder="country..."
            />
            <input
              type="text"
              name="hotel"
              id="hotel"
              placeholder="hotel..."
            />
          </div>
          <div class="checkIn-form">
            <div class="check-container">
              <label for="checkIn">Check-In</label>
              <input
                type="text"
                name="checkIn"
                id="checkIn"
                placeholder="1/1/2022"
              />
              <img src="images/calendar.svg" alt="Calendar icon" />
            </div>
            <div class="check-container">
              <label for="checkOut">Check-Out</label>
              <input
                type="text"
                name="checkOut"
                id="checkOut"
                placeholder="1/1/2022"
              />
              <img src="images/calendar.svg" alt="Calendar icon" />
            </div>
          </div>
          <div class="guests">
            <div class="drop-down">
              <label for="adult">Adult</label>
              <input type="text" name="adult" id="adult" placeholder="2" />
              <img src="images/down-arrow.svg" alt="Down arrow icon" />
            </div>
            <div class="drop-down">
              <label for="children">Children</label>
              <input
                type="text"
                name="children"
                id="children"
                placeholder="0"
              />
              <img src="images/down-arrow.svg" alt="Down arrow icon" />
            </div>
            <div class="drop-down">
              <label for="rooms">Rooms</label>
              <input type="text" name="rooms" id="rooms" placeholder="1" />
              <img src="images/down-arrow.svg" alt="Down arrow icon" />
            </div>
          </div>
          <div class="booking-message">
            <input
              type="text"
              name="message"
              id="message"
              placeholder="message..."
            />
          </div>
          <div class="booking-submit">
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  </div>`;
  var aboutContent = `<div class="aboutPage">
    <div class="blank-space"></div>
    <!--This keeps the hero images away from the nav bar (positions are weird)-->

    <section class="about-description">
      <h1 class="title"><span>ABOU</span>T:</h1>
      <p class="about-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab illo inventore veritatis et quasi architecto beatae vitae dicta
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
        quia non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem.
      </p>
    </section>

    <section class="client" id="bottom-margin-about">
      <h2 class="quotes"><span>CLIENT QUO</span>TES:</h2>
      <div class="client-container">
        <div class="client-image-one">
          <img src="images/about-client-01.jpg" alt="client one" />
        </div>
        <div class="client-quote">
          <div class="client-review">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div class="client-name">- Miranda Brown</div>
        </div>
      </div>
      <div class="client-container">
        <div class="client-image-two">
          <img src="images/about-client-02.jpg" alt="client two" />
        </div>
        <div class="client-quote">
          <div class="client-review">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo.
            </p>
          </div>
          <div class="client-name">- Johnathan wes</div>
        </div>
      </div>
    </section>
  </div>`;
  var toursContent = `<div class="toursPage">
    <div class="blank-space"></div> <!--This keeps the hero images away from the nav bar (positions are weird)-->

    <div class="hero tours-page">
      <h1>TOURS:</h1>
    </div>

    <div class="wrapperTour">
      <div class="tours" id="isr">
        <h1>Israel</h1>
        <div class="price">from $1000</div>
        <a id="isrTour" href="#" class="learn-more">Learn More</a>
      </div>
      <div class="tours" id="usa">
        <h1>U.S.A</h1>
        <div class="price">from $1500</div>
        <a id="usaTour" href="#" class="learn-more">Learn More</a>
      </div>
      <div class="tours" id="aus">
        <h1>Australia</h1>
        <div class="price">from $1800</div>
        <a id="ausTour" href="#" class="learn-more">Learn More</a>
      </div>
      <div class="tours" id="nz">
        <h1>New Zealand</h1>
        <div class="price">from $1200</div>
        <a id="nzTour" href="#" class="learn-more">Learn More</a>
      </div>
      <div class="tours" id="fra">
        <h1>France</h1>
        <div class="price">from $2500</div>
        <a id="fraTour" href="#" class="learn-more">Learn More</a>
      </div>
      <div class="tours" id="egy">
        <h1>Egypt</h1>
        <div class="price">from $900</div>
        <a id="egyTour" href="#" class="learn-more">Learn More</a>
      </div>
      <div class="tours" id="jap">
        <h1>Japan</h1>
        <div class="price">from $1300</div>
        <a id="japTour" href="#" class="learn-more">Learn More</a>
      </div>
      <div class="tours" id="can">
        <h1>Canada</h1>
        <div class="price">from $2000</div>
        <a id="canTour" href="#" class="learn-more">Learn More</a>
      </div>
      <div class="tours" id="uae">
        <h1>U.A.E</h1>
        <div class="price">from $3000</div>
        <a id="uaeTour" href="#" class="learn-more">Learn More</a>
      </div>
    </div>
  </div>`;
  var specialOffersContent = `<div class="specialOffersPage">
    <div class="blank-space"></div>
    <!--This keeps the hero images away from the nav bar (positions are weird)-->

    <div class="deal-title">
      <h1><span>SPECIAL OFF</span>ER(S):</h1>
    </div>

    <section class="deal-wrapper">
      <div class="deals-container">
        <div class="deal-img" id="bar"></div>
        <div class="deal-info">
          <div class="deal-heading">
            <div class="location">
              <h1><span>BARCELONA, </span>SPAIN</h1>
            </div>
            <div class="discount">(20% off!)</div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div class="learn-more">Learn More</div>
        </div>
      </div>

      <div class="deals-container" id="bottom-margin-deals">
        <div class="deal-img" id="ban"></div>
        <div class="deal-info">
          <div class="deal-heading">
            <div class="location">
              <h1><span>BANGKOK, TH</span>AILAND</h1>
            </div>
            <div class="discount">(10% off!)</div>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div class="learn-more">Learn More</div>
        </div>
      </div>
    </section>
  </div>`;
  var blogContent = `<div class="blogPage">
    <div class="blank-space"></div>
    <!--This keeps the hero images away from the nav bar (positions are weird)-->

    <h1 class="blog-title"><span>BLOG:</span></h1>

    <div class="blog-wrapper">
      <div class="daily-blog">
        <div class="blog-day">
          09 <br />
          JUL
        </div>
        <div class="blog-body">
          <div class="blog-img"></div>
          <div class="blog-text">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p class="blue-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
      <div class="daily-blog">
        <div class="blog-day">
          23 <br />
          JUL
        </div>
        <div class="blog-body">
          <div class="blog-img"></div>
          <div class="blog-text">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p class="blue-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  var contactContent = `<div class="contactPage">
    <div class="blank-space"></div>
    <!--This keeps the hero images away from the nav bar (positions are weird)-->

    <h1 class="contact-title"><span>CONTACT </span>US:</h1>

    <div class="contact-wrapper">
      <div class="map">
        <div class="map-img"></div>
        <div class="address">
          travel-fly Inc. 8901 Marmora Road,<br />
          Glasgow, D04 89GR.<br />
          Freephone:+1 800 559 6580<br />
          Telephone:+1 800 603 6035<br />
          FAX:+1 800 889 9898<br />
          E-mail: mail@travelfly.org
        </div>
      </div>
      <div class="contact-form">
        <input
          type="text"
          name="yourName"
          class="fields"
          id="yourName"
          placeholder="Your name..."
        />
        <input
          type="text"
          name="email"
          class="fields"
          id="email"
          placeholder="Email Address..."
        />
        <input
          type="text"
          name="company"
          class="fields"
          id="company"
          placeholder="Company..."
        />
        <input
          type="text"
          name="message"
          class="fields"
          id="message"
          placeholder="Message..."
        />
        <button type="button" class="send-button">SEND MESSAGE</button>
      </div>
    </div>
  </div>`;
  var isrTourContent = `<div class="israelPage">
  <div class="blank-space"></div>
<!--This keeps the hero images away from the nav bar-->

<div class="isr-hero">
  <div class="tour-name">Israel tour package:</div>
  <div class="price-point">STARTING FROM $1000 (prices may vary)</div>
</div>
<div class="image-set">
  <div class="tour-img" id="isr-01"></div>
  <div class="tour-img" id="isr-02"></div>
  <div class="tour-img" id="isr-03"></div>
</div>

<div class="tour-text-container">
  <div class="days" id="no-top-margin">
    <h1><span>Day #</span>1:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="days">
    <h1><span>Day #</span>2:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="days">
    <h1><span>Day #</span>3:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</div>

<div class="book-now">Book Now</div>
</div>`;
  var usaTourContent = `<div class="blank-space"></div>
<!--This keeps the hero images away from the nav bar (positions are weird)-->

  <div class="usa-hero">
      <div class="tour-name">U.S.A tour package:</div>
      <div class="price-point">STARTING FROM $1500 (prices may vary)</div>
  </div>
  <div class="image-set">
      <div class="tour-img" id="usa-01"></div>
      <div class="tour-img" id="usa-02"></div>
      <div class="tour-img" id="usa-03"></div>
  </div>

<div class="tour-text-container">
  <div class="days">
    <h1><span>Day #</span>1:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="days">
    <h1><span>Day #</span>2:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
  <div class="days">
    <h1><span>Day #</span>3:</h1>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
      eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
      qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
      sed quia non numquam eius modi tempora incidunt ut labore et dolore
      magnam aliquam quaerat voluptatem.
    </p>
  </div>
</div>

<div class="book-now">Book Now</div>`
  var ausTourContent = `<div class="blank-space"></div>
  <!--This keeps the hero images away from the nav bar (positions are weird)-->

    <div class="aus-hero">
        <div class="tour-name">Australia tour package:</div>
        <div class="price-point">STARTING FROM $1800 (prices may vary)</div>
    </div>
    <div class="image-set">
        <div class="tour-img" id="aus-01"></div>
        <div class="tour-img" id="aus-02"></div>
        <div class="tour-img" id="aus-03"></div>
    </div>

  <div class="tour-text-container">
    <div class="days">
      <h1><span>Day #</span>1:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>2:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>3:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>

  <div class="book-now">Book Now</div>`
  var nzTourContent = `<div class="blank-space"></div>
  <!--This keeps the hero images away from the nav bar (positions are weird)-->
  
    <div class="nz-hero">
        <div class="tour-name">New Zealand tour package:</div>
        <div class="price-point">STARTING FROM $1200 (prices may vary)</div>
    </div>
    <div class="image-set">
        <div class="tour-img" id="nz-01"></div>
        <div class="tour-img" id="nz-02"></div>
        <div class="tour-img" id="nz-03"></div>
    </div>

  <div class="tour-text-container">
    <div class="days">
      <h1><span>Day #</span>1:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>2:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>3:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>

  <div class="book-now">Book Now</div>`
  var fraTourContent = `<div class="blank-space"></div>
  <!--This keeps the hero images away from the nav bar (positions are weird)-->
  
    <div class="fra-hero">
        <div class="tour-name">France tour package:</div>
        <div class="price-point">STARTING FROM $2500 (prices may vary)</div>
    </div>
    <div class="image-set">
        <div class="tour-img" id="fra-01"></div>
        <div class="tour-img" id="fra-02"></div>
        <div class="tour-img" id="fra-03"></div>
    </div>

  <div class="tour-text-container">
    <div class="days">
      <h1><span>Day #</span>1:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>2:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>3:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>

  <div class="book-now">Book Now</div>`
  var egyTourContent = `<div class="blank-space"></div>
  <!--This keeps the hero images away from the nav bar (positions are weird)-->
  
    <div class="egy-hero">
        <div class="tour-name">Egypt tour package:</div>
        <div class="price-point">STARTING FROM $900 (prices may vary)</div>
    </div>
    <div class="image-set">
        <div class="tour-img" id="egy-01"></div>
        <div class="tour-img" id="egy-02"></div>
        <div class="tour-img" id="egy-03"></div>
    </div>

  <div class="tour-text-container">
    <div class="days">
      <h1><span>Day #</span>1:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>2:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>3:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>

  <div class="book-now">Book Now</div>`
  var japTourContent = `<div class="blank-space"></div>
  <!--This keeps the hero images away from the nav bar (positions are weird)-->
  
    <div class="jap-hero">
        <div class="tour-name">Japan tour package:</div>
        <div class="price-point">STARTING FROM $1300 (prices may vary)</div>
    </div>
    <div class="image-set">
        <div class="tour-img" id="jap-01"></div>
        <div class="tour-img" id="jap-02"></div>
        <div class="tour-img" id="jap-03"></div>
    </div>

  <div class="tour-text-container">
    <div class="days">
      <h1><span>Day #</span>1:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>2:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>3:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>

  <div class="book-now">Book Now</div>`
  var canTourContent = `<div class="blank-space"></div>
  <!--This keeps the hero images away from the nav bar (positions are weird)-->
  
    <div class="can-hero">
        <div class="tour-name">Canada tour package:</div>
        <div class="price-point">STARTING FROM $2000 (prices may vary)</div>
    </div>
    <div class="image-set">
        <div class="tour-img" id="can-01"></div>
        <div class="tour-img" id="can-02"></div>
        <div class="tour-img" id="can-03"></div>
    </div>

  <div class="tour-text-container">
    <div class="days">
      <h1><span>Day #</span>1:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>2:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>3:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>

  <div class="book-now">Book Now</div>`
  var uaeTourContent = `<div class="blank-space"></div>
  <!--This keeps the hero images away from the nav bar (positions are weird)-->
  
    <div class="uae-hero">
        <div class="tour-name">U.A.E tour package:</div>
        <div class="price-point">STARTING FROM $3000 (prices may vary)</div>
    </div>
    <div class="image-set">
        <div class="tour-img" id="uae-01"></div>
        <div class="tour-img" id="uae-02"></div>
        <div class="tour-img" id="uae-03"></div>
    </div>

  <div class="tour-text-container">
    <div class="days">
      <h1><span>Day #</span>1:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>2:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
    <div class="days">
      <h1><span>Day #</span>3:</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.
      </p>
    </div>
  </div>

  <div class="book-now">Book Now</div>`

  function initListeners() {
    $("a").click(function (e) {
      let btnId = e.currentTarget.id;
      MODEL.changePageContent(btnId);
    });
  }

  var _changePageContent = function (pageName) {
    let contentName = pageName + "Content";
    $("#app").html(eval(contentName));

    if (pageName == "home") {
      $("#navBar").removeClass("borderBlack");
      $("#links").removeClass("linksBlack");
      $("#logo").html(`<img src="../images/logo/logo-white.png" alt="" />`);
    } else {
      $("#navBar").addClass("borderBlack");
      $("#links").addClass("linksBlack");
      $("#logo").html(`<img src="../images/logo/logo-black.png" alt="" />`);
    }

    $(document).ready(function () {
      initListeners();
    });
  };

  return {
    changePageContent: _changePageContent,
  };
})();
