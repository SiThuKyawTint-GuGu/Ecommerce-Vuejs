<template>


<div id="progress">
    <span id="progress-value">
      <i class="fa-sharp fa-solid fa-arrow-up color " style="font-size: 15px;"></i>
    </span>
  </div>

  <div id="progress1">
    <span id="progress-value1">
      <i class="bi bi-bag"></i>
      <div class="count">
        <small class="count-icon">{{receivecount}}</small>
      </div>
    </span>
  </div>


  <nav>
    <div class="" id="imageslider">
      <div class="container">
        <div class=" nav-barp">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid mt-3">
              <a class="navbar-brand" href="#"><img src="assets/image/header.jpeg"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse  navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-5">
                  <li class="nav-item">
                    <a class="nav-link effect " href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ms-4 effect" @click="nextshop()" >Shop
                      <div class="dd-2">
                        <p class="sharp1"></p>
                        <div class="mt-4 ms-4 pt-2">
                          <div class="row">
                            <div class="col-3">
                              <h6 class="dd-text-2   ms-1">WINES</h6>
                              <h6 class="dd-text-3 ms-1" style="margin-top: 30px;" > Champagnes</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2"> Half Bottles</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2"> Red Wines</h6>
                              <h6 class="dd-text-3 ms-1 mt-2"> Rose Wines</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2"> Sparkling</h6> 
                            </div>
                            <div class="col-3">
                              <h6 class="dd-text-2   ms-1">COFFEE</h6>
                              <h6 class="dd-text-3 ms-1" style="margin-top: 30px;" > Expresso</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2"> Royal Beans</h6> 
                            </div>
                            <div class="col-3">
                              <h6 class="dd-text-2   ms-1">TEA</h6>
                              <h6 class="dd-text-3 ms-1" style="margin-top: 30px;" > Rings</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2"> Earings</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Necklace</h6>
                            </div>
                            <div class="col-3">
                              <div class="image">
                                <img src="assets/image/coffee.jpeg" class=" coffee" alt="">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><i class="fa-sharp fa-solid fa-angle-down icon-size ms-2"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ms-4  effect" @click="gotoproduct()">Product
                      <div class="dd-3">
                        <p class="sharp2"></p>
                        <div class="mt-3 ms-4 pt-2">
                          <div class="row">
                            <div class="col-4">
                              <div class="d-flex">
                                <div>
                                  <img src="assets/image/h1.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Convivio Dining Table</h6>
                                  <h6 class="text-dd-5 ms-3"><del style="color:#999" class="me-1">$23.90</del> $19.12</h6>
                                </div>
                              </div>
                              <div class="d-flex mt-3">
                                <div>
                                  <img src="assets/image/h2.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Megan Maple Chair</h6>
                                  <h6 class="text-dd-5 ms-3"><del style="color:#999" class="me-1">$35.90</del> $28.72</h6>
                                </div>
                              </div>
                              <div class="d-flex mt-3">
                                <div>
                                  <img src="assets/image/h3.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Gabriel Console Table</h6>
                                  <h6 class="text-dd-5 ms-3"> $29.00</h6>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="d-flex">
                                <div>
                                  <img src="assets/image/h4.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Creme Brulee Coffee</h6>
                                  <h6 class="text-dd-5 ms-3">$18.90</h6>
                                </div>
                              </div>
                              <div class="d-flex mt-3">
                                <div>
                                  <img src="assets/image/h5.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Decaf Espresso Roast Coffee</h6>
                                  <h6 class="text-dd-5 ms-3">$18.90</h6>
                                </div>
                              </div>
                              <div class="d-flex mt-3">
                                <div>
                                  <img src="assets/image/h6.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Decaf House Blend Coffee</h6>
                                  <h6 class="text-dd-5 ms-3">$18.90</h6>
                                </div>
                              </div>
                            </div>
                            <div class="col-4">
                              <div class="d-flex">
                                <div>
                                  <img src="assets/image/h7.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Mountain fox notebook</h6>
                                  <h6 class="text-dd-5 ms-3">$12.90</h6>
                                </div>
                              </div>
                              <div class="d-flex mt-3">
                                <div>
                                  <img src="assets/image/h8.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Brown bear notebook</h6>
                                  <h6 class="text-dd-5 ms-3">$12.90</h6>
                                </div>
                              </div>
                              <div class="d-flex mt-3">
                                <div>
                                  <img src="assets/image/h9.jpeg" class="header-image" alt="">
                                </div>
                                <div>
                                  <h6 class="text-dd-4 mt-3 ms-3">Hummingbird notebook</h6>
                                  <h6 class="text-dd-5 ms-3">$12.90</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="nav-text-1">
                        <small class="nav-text-2">FEATURE</small>
                      </div>
                      <i class="fa-sharp fa-solid fa-angle-down icon-size ms-2"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ms-4 " @click="gotoblog()">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ms-4 effect " @click="gotopage()">Pages
                      <div class="dd-4">
                        <p class="sharp3"></p>
                        <div class="mt-4 ms-4 pt-2">
                          <div class="row">
                            <div class="col-3">
                              <h6 class="dd-text-2   ms-1"> PRODUCT PAGE STYLES</h6>
                              <h6 class="dd-text-3 ms-1" style="margin-top: 30px;" > Product Thumbs Bottom</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Thumbs Left</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2"> Product Thumbs Right</h6>
                              <h6 class="dd-text-3 ms-1 mt-2">Product No Thumbs</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2"> Product No Thumbs Fullwidth</h6>
                              <h6 class="dd-text-3 ms-1 mt-2">Product No Thumbs Center</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Image Gallery</h6> 
                            </div>
                            <div class="col-3">
                              <h6 class="dd-text-2   ms-1">PRODUCT CATEGORY</h6>
                              <h6 class="dd-text-3 ms-1" style="margin-top: 30px;" > Product Style 01</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 02</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 03</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 04</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 05</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 06</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 07</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 08</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 09</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 10</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 11</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Product Style 12</h6> 
                            </div>
                            <div class="col-3">
                              <h6 class="dd-text-2   ms-1"> PAGES</h6>
                              <h6 class="dd-text-3 ms-1" style="margin-top: 30px;" > Delivery</h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Legal Notice </h6> 
                              <h6 class="dd-text-3 ms-1 mt-2">Secure Payment</h6>
                              <h6 class="dd-text-3 ms-1 mt-2">Sitmap</h6>
                              <h6 class="dd-text-3 ms-1 mt-2">About Us</h6>
                              <h6 class="dd-text-3 ms-1 mt-2">Terms And Conditions Of Use</h6>
                              <h6 class="dd-text-3 ms-1 mt-2">Our Stores</h6>
                              <h6 class="dd-text-3 ms-1 mt-2">Contact Us</h6>
                              <h6 class="dd-text-3 ms-1 mt-2">FAQs</h6>
                            </div>
                            <div class="col-3">
                              <div class="image">
                                <img src="assets/image/final.webp" class="final" alt="">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><i class="fa-sharp fa-solid fa-angle-down icon-size ms-2"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ms-4 " @click="gotohot()">Hot Deals
                      <div class="nav-text-3">
                        <small class="nav-text-4">HOT</small>
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="" style="margin-left: 300px;">
                  <div class=" position-relative">
                    <i class="bi bi-search me-3 svg-icons"></i>
                    <i class="bi bi-heart me-3 svg-icons">
                      <div class="badge-1">
                        <small class="badge-icon-1">0</small>
                      </div>
                    </i>
                    <i class="bi bi-person me-3 fs-5 svg-icons"></i>
                    <i class="bi bi-bag svg-icons">
                      <div class="badge-2">
                        <small class="badge-icon-1">0</small>
                      </div>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div class="slider-box">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="assets/image/header-logo-one.webp" class="d-block w-100" alt="...">
              <div class="container header-text ">
                <div class="row">
                  <div class="col-5">
                    <div class="">
                      <p class="header-text-1">ONLINE EXCLUSIVE</p>
                      <h1 class="header-text-2">Tea, Herbal Tea And Spicesof Excellent Quality</h1>
                      <p class="header-text-3 mt-4">Best Furniture for your house.</p>
                      <button class="mt-4 header-btn">View Collection<i
                          class="fa-solid fa-arrow-right ms-2"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="assets/image/header-logo-two.webp" class="d-block w-100" alt="...">
              <div class="container header-text ">
                <div class="row">
                  <div class="col-5">
                    <div class="">
                      <p class="header-text-1">ONLINE EXCLUSIVE</p>
                      <h1 class="header-text-2">Tea, Herbal Tea And Spicesof Excellent Quality</h1>
                      <p class="header-text-3 mt-4">Best Furniture for your house.</p>
                      <button class="mt-4 header-btn">View Collection<i
                          class="fa-solid fa-arrow-right ms-2"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="hoverbtn" class="show">
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <div class="btn-sm-1">
                <i class="fa-sharp fa-solid fa-angle-left fs-4 text-black"></i>
              </div>
              <span class="visually-hidden"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <div class="btn-sm-2">
                <i class="fa-sharp fa-solid fa-angle-right text-black fs-4"></i>
              </div>
              <span class="visually-hidden"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section>
    <div class="container mt-5 pt-5">
      <div class="row mt-4 pt-2">
        <div class="col-6">
          <div>
            <img src="assets/image/body-logo.webp" class="w-100" alt="">
          </div>
        </div>
        <div class="col-5 ms-4">
          <div class="mt-5 pt-4">
            <img src="assets/image/logo.webp" alt="">
          </div>
          <div class="mt-4">
            <h1 class="sec-box-1">Health Benefits Of Drinking Tea Regularly</h1>
            <p class="sec-box-2 mt-4">We create custom organic tea blends, handcrafted using only the finest organic
              ingredients designed to deliver unique flavor experiences, preserve their health benefits, and deliver
              them fresh to you.</p>
            <div style="margin-top: 53px;">
              <button class="sec-box-btn ">All locations<i class="fa-solid fa-arrow-right ms-2"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row mt-5 pt-5">
        <div class="col box-body-margin">
          <h6 class="text-center box-body-1">
            SPECIALTY TEAS
          </h6>
          <h1 class="text-center box-body-2 mt-3">
            A Thoughtful Gift Of <br> Organic Tea
          </h1>
        </div>

        <div class="row">
          <div class="col mt-5 ">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row ms-2">
                    <div class="col-3 position-relative"  v-for="(item,index) in getdata" :key="index">
                      <div class="box scroller"  >
                        <img class="above-image" :src="item.image" alt="">
                        <div>
                          <div class="mt-4 textbox ">
                            <h6 class="cart-text-1 text-center">{{item.title}}</h6>
                            <h6 class="cart-text-2 text-center mt-0">{{item.description}}</h6>
                            <div class="text-center cart-text-3">
                              <i class="fa-solid fa-star opacity-75 text-warning"></i>
                              <i class="fa-solid fa-star opacity-75 text-warning"></i>
                              <i class="fa-solid fa-star opacity-75 text-warning"></i>
                              <i class="fa-solid fa-star opacity-75 text-warning"></i>
                              <i class="fa-solid fa-star opacity-75 text-warning"></i>
                            </div>
                            <p class="cart-text-4 text-center mt-1">${{item.price}}</p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container " style="margin-top: 215px;">
      <div class="row">
        <div class="col position-relative">
          <div class="d-flex">
            <div class="img-1">
            <img src="assets/image/big-logo-1.webp" class="w-100" alt="">
              <h6 class="img1-text-1">Green Tea Producing</h6>
            </div>
            <div class="position-relative">
              <img src="assets/image/big-logo-2.webp" class="w-100" alt="">
              <h6 class="img1-text-2">Green Tea Refining</h6>
            </div>
          </div>

          <div class="d-flex">
            <div class="img-1">
            <img src="assets/image/big-logo-3.webp" class="w-100" alt="">
              <h6 class="img1-text-1">Private Label Service</h6>
            </div>
            <div class="position-relative">
              <img src="assets/image/big-logo-4.webp" class="w-100" alt="">
              <h6 class="img1-text-3">Exporting Service</h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col mt-5 pt-5">
          <div>
            <h6 class="text-center slide-text-1">FEATURED PRODUCTS</h6>
            <h1 class="text-center slide-text-2 mt-3">Discover The Magic Of Tea</h1>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-3 position-relative mt-4" v-for="(item,index) in postdata" :key="index">
          <div class="box ">
            <img class="image" :src="item.image" alt="">
            <div>
              <div class="body-icon-box d-flex image-hide animate__animated animate__bounce  ">
                <div class="ms-1">
                  <i class="fa-sharp fa-solid fa-eye body-icons margin-only box-hover">
                    <div>
                      <small class="hover-text add ">
                        <small class="rotate-triangle"></small>
                        QUICK VIEW</small>
                    </div>
                  </i>
                </div>
                <div class="">
                  <i class="fa-solid fa-cart-shopping body-icons margin-only size box-hover">
                    <div>
                      <small class="hover-text add ">
                        <small class="rotate-triangle"></small>
                        ADD TO CART</small>
                    </div>
                  </i>
                </div>
                <div>
                  <i class="fa-solid fa-compress body-icons margin-only size-1 box-hover">
                    <div>
                      <small class="hover-text add  ">
                        <small class="rotate-triangle"></small>
                        QUICK VIEW</small>
                    </div>
                  </i>
                </div>
                <div>
                  <i class="fa-regular fa-heart body-icons margin-only size-2 box-hover">
                    <div>
                      <small class="hover-text  add ">
                        <small class="rotate-triangle"></small>
                        ADD TO WISHLIST</small>
                    </div>
                  </i>
                </div>
              </div>

              <div class="mt-4">
                <h6 class="cart-text-1 text-center">{{item.title}}</h6>
                <h6 class="cart-text-2 text-center mt-0">{{item.description}}</h6>
                <div class="text-center cart-text-3">
                  <i class="fa-solid fa-star opacity-75 text-warning"></i>
                  <i class="fa-solid fa-star opacity-75 text-warning"></i>
                  <i class="fa-solid fa-star opacity-75 text-warning"></i>
                  <i class="fa-solid fa-star opacity-75 text-warning"></i>
                  <i class="fa-solid fa-star opacity-25"></i>
                </div>
                <p class="cart-text-4 text-center mt-1">{{item.price}}</p>
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  </section>

  <section>
    <div class="container" style="margin-top: 123px;">
      <div class="row">
        <div class="col-6">
          <div style="margin-bottom: 15px;" >
            <h6 class="ft-above-text-1">OUR TEA HOUSE</h6>
            <h1 class="ft-above-text-2">Our Traditional Teas</h1>
          </div>

          <div style="margin-top: 23px;" v-for="(item,index) in saledata" :key="index">
            <div class="d-flex">
              <h6 class="ft-above-text-3">{{item.title}}</h6>
              <p class="line"></p>
              <small class="ft-above-text-4">${{item.price}}</small>
            </div>
            <h6 class="ft-above-text-5">{{item.description}}</h6>
          </div>

        </div>
        <div class="col-6">
          <div>
            <img src="assets/image/ft.webp" class="w-100" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col mt-5 pt-5">
          <div>
            <h6 class="text-center box-body-1">OUR TEA HOUSE</h6>
            <h6 class="text-center box-body-2 mt-2 pt-1">Loose Leaf Tea,</h6>
            <h6 class="text-center box-body-2">Tea Caddies & Gifts - Tea Specialist</h6>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-3">
          <div>
            <img src="assets/image/ft-1.webp" class="" alt="">
          </div>
        </div>
        <div class="col-3 ms-5 ">
          <div>
            <img src="assets/image/ft-2.webp" class="" alt="">
          </div>
        </div>
        <div class="col-5 ms-5 pt-4">
          <div class="mt-5 pt-4 ms-4 ps-4">
            <h1 class="sec-box-3">Tea Fit For Everyone</h1>
            <p class="sec-box-4 mt-4 pt-1">Shopio offers the highest quality hand-picked, full-leaf teas from the finest
              tea gardens and estates. From tea beginners to avid tea drinkers, our selection of rare teas, signature
              blends, and fun flavors in loose tea, tea sachets, and convenient tea bags are perfect for everyone.</p>
            <div>
              <button class="sec-box-btn mt-5">All locations<i class="fa-solid fa-arrow-right ms-2"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col">

          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col">
                    <h6 class="text-center ft-first-text-1">WHAT OUR CUSTOMER SAY!</h6>
                    <h1 class="text-center ft-first-text-2 mt-4 pt-1">“Enjoyed perfect cappucino as I start walk on high
                    </h1>
                    <h1 class="text-center ft-first-text-3">line path. Banana Bread was very tasty and</h1>
                    <h1 class="text-center ft-first-text-4">service Impeccable! ”</h1>
                    <div class="d-flex position-relative ps-box mt-4 pt-2 ">
                      <div class="badge"><svg xmlns="http://www.w3.org/2000/svg"  style="margin-top: 16px !important;" width="25" height="19"
                          viewBox="0 0 25 19" fill="none">
                          <path
                            d="M19.3179 7.57715C19.5958 7.57715 19.8625 7.62031 20.128 7.65965C20.042 7.3652 19.9535 7.06566 19.8114 6.79659C19.6693 6.40568 19.4475 6.0668 19.2269 5.72538C19.0424 5.35605 18.7172 5.10601 18.4779 4.78998C18.2274 4.48283 17.8859 4.27849 17.6154 4.02338C17.35 3.75685 17.0023 3.62358 16.7256 3.43574C16.4365 3.26693 16.1847 3.08036 15.9155 2.99152L15.2438 2.70975L14.653 2.45972L15.2575 0L16.0015 0.182765C16.2395 0.243687 16.5299 0.314762 16.8602 0.399799C17.1979 0.463259 17.5581 0.637141 17.9594 0.795791C18.3557 0.976018 18.8144 1.09786 19.2406 1.38724C19.6693 1.66393 20.1641 1.89492 20.6003 2.26553C21.0228 2.64756 21.5325 2.97882 21.9089 3.46493C22.3202 3.9193 22.7265 4.39653 23.0418 4.93975C23.407 5.45758 23.655 6.02618 23.9167 6.58844C24.1535 7.1507 24.3442 7.72565 24.5 8.2841C24.7953 9.40354 24.9274 10.4671 24.9785 11.3772C25.0209 12.2884 24.996 13.0462 24.9436 13.5945C24.9249 13.8534 24.89 14.1047 24.8651 14.2786L24.834 14.4918L24.8016 14.4842C24.5799 15.5387 24.0696 16.5077 23.3297 17.2792C22.5899 18.0507 21.6506 18.5931 20.6207 18.8437C19.5908 19.0942 18.5122 19.0428 17.5098 18.6952C16.5074 18.3476 15.6221 17.7181 14.9564 16.8795C14.2906 16.0409 13.8715 15.0275 13.7477 13.9566C13.6238 12.8856 13.8003 11.8008 14.2565 10.8276C14.7128 9.85447 15.4303 9.03276 16.326 8.45754C17.2217 7.88231 18.259 7.57708 19.3179 7.57715V7.57715ZM5.60868 7.57715C5.88661 7.57715 6.15331 7.62031 6.41877 7.65965C6.33278 7.3652 6.24429 7.06566 6.10221 6.79659C5.96014 6.40568 5.7383 6.0668 5.5177 5.72538C5.33325 5.35605 5.00797 5.10601 4.76868 4.78998C4.51818 4.48283 4.1767 4.27849 3.90625 4.02338C3.64079 3.75685 3.29308 3.62358 3.0164 3.43574C2.72726 3.26693 2.47551 3.08036 2.20631 2.99152L1.53456 2.70975L0.943819 2.45972L1.54827 0L2.29231 0.182765C2.53035 0.243687 2.82073 0.314762 3.151 0.399799C3.48874 0.463259 3.84892 0.637141 4.25023 0.795791C4.6453 0.977288 5.10518 1.09786 5.53141 1.38851C5.96014 1.6652 6.45491 1.89619 6.89112 2.2668C7.31361 2.64883 7.82334 2.98009 8.19972 3.46493C8.611 3.9193 9.01729 4.39653 9.3326 4.93975C9.69776 5.45758 9.94577 6.02618 10.2075 6.58844C10.4443 7.1507 10.635 7.72565 10.7908 8.2841C11.0861 9.40354 11.2182 10.4671 11.2693 11.3772C11.3117 12.2884 11.2868 13.0462 11.2344 13.5945C11.2157 13.8534 11.1808 14.1047 11.1559 14.2786L11.1248 14.4918L11.0924 14.4842C10.8707 15.5387 10.3604 16.5077 9.62054 17.2792C8.88067 18.0507 7.94144 18.5931 6.91151 18.8437C5.88158 19.0942 4.80303 19.0428 3.80062 18.6952C2.79822 18.3476 1.91293 17.7181 1.24716 16.8795C0.581385 16.0409 0.162337 15.0275 0.0384916 13.9566C-0.0853537 12.8856 0.091063 11.8008 0.547334 10.8276C1.0036 9.85447 1.72108 9.03276 2.61677 8.45754C3.51247 7.88231 4.54977 7.57708 5.60868 7.57715V7.57715Z"
                            fill="white"></path>
                        </svg></div>
                      <div><img src="assets/image/schawgyi.jpeg" class="iconsever" alt=""></div>
                      <div class="mt-1">
                        <h5 class="ps-text-1">Gu Gu</h5>
                        <h6 class="ps-text-2">Yangon, BURMA</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col">
                    <h6 class="text-center ft-first-text-1">WHAT OUR CUSTOMER SAY!</h6>
                    <h1 class="text-center ft-first-text-2 mt-4 pt-1">“Enjoyed perfect cappucino as I start walk on high
                    </h1>
                    <h1 class="text-center ft-first-text-3">line path. Banana Bread was very tasty and</h1>
                    <h1 class="text-center ft-first-text-4">service Impeccable! ”</h1>
                    <div class="d-flex position-relative ps-box mt-4 pt-2">
                      <div class="badge"><svg xmlns="http://www.w3.org/2000/svg"  style="margin-top: 16px !important;" width="25" height="19"
                          viewBox="0 0 25 19" fill="none">
                          <path
                            d="M19.3179 7.57715C19.5958 7.57715 19.8625 7.62031 20.128 7.65965C20.042 7.3652 19.9535 7.06566 19.8114 6.79659C19.6693 6.40568 19.4475 6.0668 19.2269 5.72538C19.0424 5.35605 18.7172 5.10601 18.4779 4.78998C18.2274 4.48283 17.8859 4.27849 17.6154 4.02338C17.35 3.75685 17.0023 3.62358 16.7256 3.43574C16.4365 3.26693 16.1847 3.08036 15.9155 2.99152L15.2438 2.70975L14.653 2.45972L15.2575 0L16.0015 0.182765C16.2395 0.243687 16.5299 0.314762 16.8602 0.399799C17.1979 0.463259 17.5581 0.637141 17.9594 0.795791C18.3557 0.976018 18.8144 1.09786 19.2406 1.38724C19.6693 1.66393 20.1641 1.89492 20.6003 2.26553C21.0228 2.64756 21.5325 2.97882 21.9089 3.46493C22.3202 3.9193 22.7265 4.39653 23.0418 4.93975C23.407 5.45758 23.655 6.02618 23.9167 6.58844C24.1535 7.1507 24.3442 7.72565 24.5 8.2841C24.7953 9.40354 24.9274 10.4671 24.9785 11.3772C25.0209 12.2884 24.996 13.0462 24.9436 13.5945C24.9249 13.8534 24.89 14.1047 24.8651 14.2786L24.834 14.4918L24.8016 14.4842C24.5799 15.5387 24.0696 16.5077 23.3297 17.2792C22.5899 18.0507 21.6506 18.5931 20.6207 18.8437C19.5908 19.0942 18.5122 19.0428 17.5098 18.6952C16.5074 18.3476 15.6221 17.7181 14.9564 16.8795C14.2906 16.0409 13.8715 15.0275 13.7477 13.9566C13.6238 12.8856 13.8003 11.8008 14.2565 10.8276C14.7128 9.85447 15.4303 9.03276 16.326 8.45754C17.2217 7.88231 18.259 7.57708 19.3179 7.57715V7.57715ZM5.60868 7.57715C5.88661 7.57715 6.15331 7.62031 6.41877 7.65965C6.33278 7.3652 6.24429 7.06566 6.10221 6.79659C5.96014 6.40568 5.7383 6.0668 5.5177 5.72538C5.33325 5.35605 5.00797 5.10601 4.76868 4.78998C4.51818 4.48283 4.1767 4.27849 3.90625 4.02338C3.64079 3.75685 3.29308 3.62358 3.0164 3.43574C2.72726 3.26693 2.47551 3.08036 2.20631 2.99152L1.53456 2.70975L0.943819 2.45972L1.54827 0L2.29231 0.182765C2.53035 0.243687 2.82073 0.314762 3.151 0.399799C3.48874 0.463259 3.84892 0.637141 4.25023 0.795791C4.6453 0.977288 5.10518 1.09786 5.53141 1.38851C5.96014 1.6652 6.45491 1.89619 6.89112 2.2668C7.31361 2.64883 7.82334 2.98009 8.19972 3.46493C8.611 3.9193 9.01729 4.39653 9.3326 4.93975C9.69776 5.45758 9.94577 6.02618 10.2075 6.58844C10.4443 7.1507 10.635 7.72565 10.7908 8.2841C11.0861 9.40354 11.2182 10.4671 11.2693 11.3772C11.3117 12.2884 11.2868 13.0462 11.2344 13.5945C11.2157 13.8534 11.1808 14.1047 11.1559 14.2786L11.1248 14.4918L11.0924 14.4842C10.8707 15.5387 10.3604 16.5077 9.62054 17.2792C8.88067 18.0507 7.94144 18.5931 6.91151 18.8437C5.88158 19.0942 4.80303 19.0428 3.80062 18.6952C2.79822 18.3476 1.91293 17.7181 1.24716 16.8795C0.581385 16.0409 0.162337 15.0275 0.0384916 13.9566C-0.0853537 12.8856 0.091063 11.8008 0.547334 10.8276C1.0036 9.85447 1.72108 9.03276 2.61677 8.45754C3.51247 7.88231 4.54977 7.57708 5.60868 7.57715V7.57715Z"
                            fill="white"></path>
                        </svg></div>
                      <div><img src="assets/image/human.webp" class="schawgyi" alt=""></div>
                      <div class="mt-1">
                        <h5 class="ps-text-1">ALENA DOE</h5>
                        <h6 class="ps-text-2">Boston, LA</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <div class="box-only">
                <i class="fa-sharp fa-solid fa-angle-left color-only"></i>
              </div>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <div class="box-only">
                <i class="fa-sharp fa-solid fa-angle-right color-only"></i>
              </div>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container" style="margin-top: 175px;">
      <div class="row">
        <div class="col-3">
          <div>
            <img src="assets/image/header.jpeg" alt="">
            <h6 class="first-1">8 (844) 880 - 33388</h6>
            <h6 class="first-2">Demo@demo.com</h6>
          </div>
        </div>

        <div class="col-2">
          <div>
            <h5 class="first-3"> USEFUL LINKS</h5>
            <span class="first-4 d-block mt-2">Legal & Privacy</span>
            <span class="first-4 d-block">Contact</span>
            <span class="first-4 d-block">Gift Card</span>
            <span class="first-4 d-block">Customer Service</span>
            <span class="first-4">My Account</span>
          </div>
        </div>

        <div class="col-2">
          <div>
            <h5 class="first-3">MY ACCOUNT</h5>
            <span class="first-4 d-block mt-2">My Profile</span>
            <span class="first-4 d-block ">My Order History</span>
            <span class="first-4 d-block ">My Wish List</span>
            <span class="first-4 d-block ">Order Tracking</span>
            <span class="first-4 d-block ">Shopping Cart</span>
          </div>
        </div>

        <div class="col-2">
          <div>
            <h5 class="first-3">COMPANY</h5>
            <span class="first-4 d-block mt-2">About Us</span>
            <span class="first-4 d-block ">Careers</span>
            <span class="first-4 d-block ">Blog</span>
            <span class="first-4 d-block ">Affiliate</span>
            <span class="first-4 d-block ">Contact Us</span>
          </div>
        </div>

        <div class="col-3">
          <div>
            <h5 class="first-3">CONNECT WITH US</h5>
          </div>
          <div class="d-flex mt-3">
            <div class="bs-icon">
              <i class="bi bi-facebook bs-icon-margin text-black  "></i>
            </div>
            <div class="bs-icon ms-3">
              <i class="bi bi-twitter bs-icon-margin text-black "></i>
            </div>
            <div class="bs-icon ms-3">
              <i class="bi bi-pinterest bs-icon-margin text-black "></i>
            </div> 
            <div class="bs-icon ms-3">
              <i class="bi bi-instagram bs-icon-margin text-black "></i>
            </div>
          </div>
          <div class="mt-3 mb-3">
            <h5 class="first-3 ">PAYMENT</h5>
          </div>
          <div>
            <img src="assets/image/card.webp" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>

    <footer>
      <div class="container mt-5 pt-3 mb-5 pb-2">
        <div class="d-flex justify-content-between">
          <div class="">
            <h6 class="ft-1">Copyright © 2022 <span class="color">Drink</span> . All rights reserved</h6>
          </div>
          <div>
            <h6 class="ft-1">Designed by <span class="color"> Drink.</span></h6>
          </div>
        </div>
      </div>
    </footer>

</template>
<script src="../assets/js/HomePage.js"></script>

