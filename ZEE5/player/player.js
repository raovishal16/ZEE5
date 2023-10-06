var movie_card = [
    {
        id: 1,
        img: "../imgae/card1.webp",
        video: "../videos/sirf.mp4",
        name: "Sirf Ek Bandaa Kaafi Hai"

    },
    {
        id: 2,
        img: "../imgae/card2.webp",
        video: "../videos/haddi.mp4",
        name: "Haddi"
    },
    {
        id: 3,
        img: "../imgae/card3.webp",
        video: "../videos/gadar.mp4",
        name: "Gadar"

    },
    {
        id: 4,
        img: "../imgae/16.webp",
        video: "../videos/vikram.mp4",
        name: "Vikram"
    },
    {
        id: 5,
        img: "../imgae/17.webp",
        video: "../videos/har har.mp4",
        name: "Har Har Mahadev"
    },
    {
        id: 6,
        img: "../imgae/4.webp",
        video: "../videos/kanjoos.mp4",
        name: "Kanjoos Makhichoos"
    },
    {
        id: 7,
        img: "../imgae/card7.webp",
        video: "../videos/spider.mp4",
        name: "Spider-Man"
    },
    {
        id: 8,
        img: "../imgae/18.webp",
        video: "../videos/master.mp4",
        name: "Master"

    },
    {
        id: 9,
        img: "../imgae/card9.webp"
    },
    {
        id: 10,
        img: "../imgae/card10.webp"
    },
    {
        id: 11,
        img: "../imgae/card11.webp"
    },
    {
        id: 12,
        img: "../imgae/card12.webp"
    },
    {
        id: 13,
        img: "../imgae/card13.webp"
    },
]

var trending_card = [
  {
    id: 1,
    img: "../imgae/15.webp",
    video: "../videos/babu",
    name: "Babumoshai Bandookbaaz"
  },
  {
    id: 2,
    img: "../imgae/16.webp"
  },
  {
    id: 3,
    img: "../imgae/17.webp"
  },
  {
    id: 4,
    img: "../imgae/18.webp"
  },
  {
    id: 5,
    img: "../imgae/11.webp"
  },
  {
    id: 6,
    img: "../imgae/12.webp"
  },
  {
    id: 7,
    img: "../imgae/1.webp"
  },
  {
    id: 8,
    img: "../imgae/4.webp"
  },
  {
    id: 9,
    img: "../imgae/5.webp"
  },
  {
    id: 10,
    img: "../imgae/3.webp"
  },
]

function onDisplay() {
    var getId = new URLSearchParams(window.location.search)
    var getValue = getId.get("id")
    console.log(("Id from param::", getValue));

    var getVideoId = movie_card.filter((item) => item.id == getValue)
    console.log(getVideoId, "getVideo");

    
    var playerId = document.getElementById("addplayer")
    var data = '';

    movie_card.map(() => {
        data = ` <div class="col-8 col-sm-8 col-md-8 col-xl-8">
          <div class="trending_card d-flex justify-content-between">
            <div class="trending_title">
              <h5>You're Watching a trailer</h5>
            </div>
          </div>

          <div class="video_player">
            <div class="d-flex justify-content-center">
              <video width="100%" height="600px" controls>
                <source src="${getVideoId[0].video}" />
              </video>
            </div>
            <div class="sucscribe_bar d-flex justify-content-between">
              <div class="subscribe">
                <a href="#"
                  ><span>
                    Movies & WebSeries Ad-Free with Premium at ₹699/year.
                  </span></a
                >
              </div>
              <div class="plan_btn">
                <button
                  type="button"
                  class="btn d-flex gap-1 buy_btn1 text-light"
                >
                  <span><i class="fa-solid fa-crown"></i></span>
                  Buy&nbsp;Plans
                </button>
              </div>
            </div>
            <div class="information mt-2">
              <div class="title mt-3">
                <h1 class="text-light">${getVideoId[0].name}</h1>
              </div>
              <div class="type d-flex gap-5 mt-3 fs-5">
                <a href="#">Movies</a>
                <a href="#">2023</a>
              </div>
              <div class="type_info d-flex gap-5 mt-3 fs-5">
                <div class="time text-secondary">2h&nbsp;14m</div>
                <a href="#">Crime</a>
                <a href="#">Drama</a>
                <div class="text-secondary">A</div>
              </div>
              <div class="share_bar mt-3">
                <div class="share_btn d-flex justify-content-start gap-5">
                  <div class="share">
                    <i
                      class="fa-solid fa-share fs-3 ms-3 text-light share_link"
                    ></i>
                    <p class="mt-2 text-center">Share</p>
                  </div>
                  <div class="share">
                    <i class="fa-solid fa-bars fs-3 ms-4 text-light"></i>
                    <p class="mt-2 text-center">Watchlist</p>
                  </div>
                  <div class="share play">
                    <i
                      class="fa-regular fa-circle-play fs-3 play_btn text-light"
                    ></i>
                    <p class="mt-2 text-center">Watch Trailer</p>
                  </div>
                </div>
              </div>

              <div class="lan_audio text-light fs-5">
                Audio Languages: <span>Hindi</span>
              </div>
              <div class="dec mt-3">
                <p class="text-light fs-5">
                  In this ZEE5 Original film, a transgender, Haddi moves to
                  Delhi and joins a gang of transgenders and cross-dressers
                  headed by an influential man. But is this move aspirational or
                  driven by revenge?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 col-sm-4 col-md-4 col-xl-4">
          <div class="side_nav">
            <div class="title">
              <h4 class="text-light">Recommended Movies For You</h4>
            </div>
            <div class="row gap-3 scroll">
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/card8.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/card9.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/card10.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/card11.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/card12.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/card13.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/1.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/2.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/3.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/4.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/5.webp" alt="" /></a>
                </div>
              </div>
              <div class="col-5">
                <div class="card">
                  <a href="#"><img src="../imgae/6.webp" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>`
    })
    playerId.innerHTML = data
    document.title = `${getVideoId[0].name}`
}
onDisplay()


