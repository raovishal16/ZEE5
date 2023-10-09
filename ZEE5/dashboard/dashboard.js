function gotoPlayerPage(index) {
    console.log("nextId", movie_card[index].id);
    window.location.href = `../player/player.html?id=${movie_card[index].id}`

}

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
        video: "../videos/haddi",
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

var cardList = document.getElementById("trending_bar")
var card = ''
var trendingMovie = document.getElementById("trending_bar1")
var cardTrend = '';

function onaddCard() {
    movie_card.map(function (element, index) {
        card += `<a href="#" onclick="gotoPlayerPage(${index})"><div class="card_img rounded-3">
          <div class="card_front">
            <img src="${element.img}" alt="" />
            
          </div>
          
        </div></a>`
    })
    trending_card.map(function (x) {
        cardTrend += ` <div class="number_card">
            <div class="number">
              <span>${x.id}</span>
            </div>
            <div class="card_img rounded-3">
              <div class="card_front">
                <img src="${x.img}" alt="" />
              </div>
            </div>
          </div>`
    })

    cardList.innerHTML = card;
    trendingMovie.innerHTML = cardTrend;
}
onaddCard()

function onLogin() {
    window.location.href = "../login/login.html"
}

function onUserLogin() {
    var nav = document.getElementById("navBar");
    var addnav;
    var getLoginDeatils = JSON.parse(localStorage.getItem("number"))
    console.log("get", getLoginDeatils);

    if (getLoginDeatils) {
        addnav = ` <div class="header w-100 d-flex justify-content-between">
        <div class="logo_menu d-flex">
          <div class="logo">
            <img src="../imgae/logo.jpg" alt="" />
          </div>
          <div class="menu">
            <ul class="sub_menu">
              <li><a href="#" class="demo">Home</a></li>
              <li><a href="#" class="demo">TV&nbsp;Shows</a></li>
              <li><a href="#" class="demo">Movies</a></li>
              <li><a href="#" class="demo">Premium</a></li>
              <li><a href="#" class="demo">Web&nbsp;Series</a></li>
              <li><a href="#" class="demo">News</a></li>
              <li><a href="#" class="demo">Edauraa</a></li>
              <li><a href="#" class="demo">Live&nbsp;TV</a></li>
              <li><a href="#" class="demo">Music</a></li>
              <li>
                <a href="#" class="demo"
                  ><i class="fa-solid fa-chevron-down"></i>
                  <ul class="peta_menu">
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Rent</a></li>
                    <li><a href="#">Kid</a></li>
                    <li><a href="#">Songs</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Chennels</a></li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="action_side d-flex">
          <div class="search w-100 d-flex">
            <div class="search_icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              placeholder="Search for Movies,Shows,Channles etc."
              class="rounded-2"
            />
          </div>
          <div class="font">
            <a href="#"> <i class="fa-solid fa-a"></i></a>
          </div>
           <div class="login_btn d-flex justify-content-start">
            <div class="user_img d-flex">
              <img src="../imgae/profile.png" alt="" />
              <div class="user">
                <a href="#" >User</a>
              </div>
            </div>
           
          </div>
          <div class="plan_btn">
            <button type="button" class="btn d-flex gap-1 buy_btn text-light">
              <span><i class="fa-solid fa-crown"></i></span>
              Buy&nbsp;Plans
            </button>
          </div>
          <div class="bar">
            <a href="#"> <i class="fa-solid fa-bars"></i></a>
          </div>
        </div>
      </div>`
    } else {
        addnav = ` <div class="header w-100 d-flex justify-content-between">
        <div class="logo_menu d-flex">
          <div class="logo">
            <img src="../imgae/logo.jpg" alt="" />
          </div>
          <div class="menu">
            <ul class="sub_menu">
              <li><a href="#" class="demo">Home</a></li>
              <li><a href="#" class="demo">TV&nbsp;Shows</a></li>
              <li><a href="#" class="demo">Movies</a></li>
              <li><a href="#" class="demo">Premium</a></li>
              <li><a href="#" class="demo">Web&nbsp;Series</a></li>
              <li><a href="#" class="demo">News</a></li>
              <li><a href="#" class="demo">Edauraa</a></li>
              <li><a href="#" class="demo">Live&nbsp;TV</a></li>
              <li><a href="#" class="demo">Music</a></li>
              <li>
                <a href="#" class="demo"
                  ><i class="fa-solid fa-chevron-down"></i>
                  <ul class="peta_menu">
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Rent</a></li>
                    <li><a href="#">Kid</a></li>
                    <li><a href="#">Songs</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Chennels</a></li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="action_side d-flex">
          <div class="search w-100 d-flex">
            <div class="search_icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              placeholder="Search for Movies,Shows,Channles etc."
              class="rounded-2"
            />
          </div>
          <div class="font">
            <a href="#"> <i class="fa-solid fa-a"></i></a>
          </div>
          <div class="login_btn">
            <button
              type="button"
              class="btn btn-outline-light"
              onclick="onLogin()"
            >
              Login
            </button>
          </div>
          <div class="plan_btn">
            <button type="button" class="btn d-flex gap-1 buy_btn text-light">
              <span><i class="fa-solid fa-crown"></i></span>
              Buy&nbsp;Plans
            </button>
          </div>
          <div class="bar">
            <a href="#"> <i class="fa-solid fa-bars"></i></a>
          </div>
        </div>
      </div>`
    }
    nav.innerHTML = addnav

}
onUserLogin()