<template>
  <div>
    <nav>
      <div class="" id="imageslider ">
        <div class="container">
          <div class="nav-barp position-relative">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid mt-3">
                <a class="navbar-brand" href="#"
                  ><img src="../../public/assets/image/header.jpeg"
                /></a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-5">
                    <li class="nav-item">
                      <a class="nav-link effect" @click="gotohome()">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-4 effect" @click="nextshop()"
                        >Shop
                        <div class="dd-2">
                          <p class="sharp1"></p>
                          <div class="mt-4 ms-4 pt-2">
                            <div class="row">
                              <div class="col-3">
                                <h6 class="dd-text-2 ms-1">WINES</h6>
                                <h6
                                  class="dd-text-3 ms-1"
                                  style="margin-top: 30px"
                                >
                                  Champagnes
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Half Bottles
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Red Wines</h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Rose Wines</h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Sparkling</h6>
                              </div>
                              <div class="col-3">
                                <h6 class="dd-text-2 ms-1">COFFEE</h6>
                                <h6
                                  class="dd-text-3 ms-1"
                                  style="margin-top: 30px"
                                >
                                  Expresso
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Royal Beans</h6>
                              </div>
                              <div class="col-3">
                                <h6 class="dd-text-2 ms-1">TEA</h6>
                                <h6
                                  class="dd-text-3 ms-1"
                                  style="margin-top: 30px"
                                >
                                  Rings
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Earings</h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Necklace</h6>
                              </div>
                              <div class="col-3">
                                <div class="image">
                                  <img
                                    src="../../public/assets/image/coffee.jpeg"
                                    class="coffee"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <i
                          class="fa-sharp fa-solid fa-angle-down icon-size ms-2"
                        ></i
                      ></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-4 effect" @click="gotoproduct()"
                        >Product
                        <div class="dd-3">
                          <p class="sharp2"></p>
                          <div class="mt-3 ms-4 pt-2">
                            <div class="row">
                              <div class="col-4">
                                <div class="d-flex">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h1.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Convivio Dining Table
                                    </h6>
                                    <h6 class="text-dd-5 ms-3">
                                      <del style="color: #999" class="me-1"
                                        >$23.90</del
                                      >
                                      $19.12
                                    </h6>
                                  </div>
                                </div>
                                <div class="d-flex mt-3">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h2.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Megan Maple Chair
                                    </h6>
                                    <h6 class="text-dd-5 ms-3">
                                      <del style="color: #999" class="me-1"
                                        >$35.90</del
                                      >
                                      $28.72
                                    </h6>
                                  </div>
                                </div>
                                <div class="d-flex mt-3">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h3.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Gabriel Console Table
                                    </h6>
                                    <h6 class="text-dd-5 ms-3">$29.00</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="d-flex">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h4.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Creme Brulee Coffee
                                    </h6>
                                    <h6 class="text-dd-5 ms-3">$18.90</h6>
                                  </div>
                                </div>
                                <div class="d-flex mt-3">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h5.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Decaf Espresso Roast Coffee
                                    </h6>
                                    <h6 class="text-dd-5 ms-3">$18.90</h6>
                                  </div>
                                </div>
                                <div class="d-flex mt-3">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h6.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Decaf House Blend Coffee
                                    </h6>
                                    <h6 class="text-dd-5 ms-3">$18.90</h6>
                                  </div>
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="d-flex">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h7.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Mountain fox notebook
                                    </h6>
                                    <h6 class="text-dd-5 ms-3">$12.90</h6>
                                  </div>
                                </div>
                                <div class="d-flex mt-3">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h8.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Brown bear notebook
                                    </h6>
                                    <h6 class="text-dd-5 ms-3">$12.90</h6>
                                  </div>
                                </div>
                                <div class="d-flex mt-3">
                                  <div>
                                    <img
                                      src="../../public/assets/image/h9.jpeg"
                                      class="header-image"
                                      alt=""
                                    />
                                  </div>
                                  <div>
                                    <h6 class="text-dd-4 mt-3 ms-3">
                                      Hummingbird notebook
                                    </h6>
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
                        <i
                          class="fa-sharp fa-solid fa-angle-down icon-size ms-2"
                        ></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-4" @click="gotoblog()">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-4 effect" @click="gotopage()"
                        >Pages
                        <div class="dd-4">
                          <p class="sharp3"></p>
                          <div class="mt-4 ms-4 pt-2">
                            <div class="row">
                              <div class="col-3">
                                <h6 class="dd-text-2 ms-1">
                                  PRODUCT PAGE STYLES
                                </h6>
                                <h6
                                  class="dd-text-3 ms-1"
                                  style="margin-top: 30px"
                                >
                                  Product Thumbs Bottom
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Thumbs Left
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Thumbs Right
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product No Thumbs
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product No Thumbs Fullwidth
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product No Thumbs Center
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Image Gallery
                                </h6>
                              </div>
                              <div class="col-3">
                                <h6 class="dd-text-2 ms-1">PRODUCT CATEGORY</h6>
                                <h6
                                  class="dd-text-3 ms-1"
                                  style="margin-top: 30px"
                                >
                                  Product Style 01
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 02
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 03
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 04
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 05
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 06
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 07
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 08
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 09
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 10
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 11
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Product Style 12
                                </h6>
                              </div>
                              <div class="col-3">
                                <h6 class="dd-text-2 ms-1">PAGES</h6>
                                <h6
                                  class="dd-text-3 ms-1"
                                  style="margin-top: 30px"
                                >
                                  Delivery
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Legal Notice
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Secure Payment
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Sitmap</h6>
                                <h6 class="dd-text-3 ms-1 mt-2">About Us</h6>
                                <h6 class="dd-text-3 ms-1 mt-2">
                                  Terms And Conditions Of Use
                                </h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Our Stores</h6>
                                <h6 class="dd-text-3 ms-1 mt-2">Contact Us</h6>
                                <h6 class="dd-text-3 ms-1 mt-2">FAQs</h6>
                              </div>
                              <div class="col-3">
                                <div class="image">
                                  <img
                                    src="../../public/assets/image/final.webp"
                                    class="final"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <i
                          class="fa-sharp fa-solid fa-angle-down icon-size ms-2"
                        ></i
                      ></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-4" @click="gotohot()"
                        >Hot Deals
                        <div class="nav-text-3">
                          <small class="nav-text-4">HOT</small>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div class="" style="margin-left: 300px">
                    <div class="position-relative">
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
      </div>
    </nav>

    <div>
      <div class="logo1">
        <img
          src="../../public/assets/image/shop-header.webp"
          class="w-100 logo1"
          alt=""
        />
      </div>
    </div>

    <div class="container-fluid home-box">
      <div class="row">
        <div class="col">
          <div class="logo1 d-flex justify-content-center">
            <h6 class="size-text text-center" @click="gotohome()">Home</h6>
            <h6 class="size-text text-center ms-3">
              <span style="margin-right: 13px">/</span> About us
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5 pt-3">
      <div class="row">
        <div class="col-12 position-relative">
          <img
            src="../../public/assets/image/main.webp"
            class="main-image"
            alt=""
          />
          <div class="main-box">
            <h6 class="text-center f-1">WHO WE ARE</h6>
            <h6 class="w-10 text-center f-2">
              Top 10 Direct Selling Companies <br />
              In The World
            </h6>
            <p class="text-center f-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut <br />
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 80px">
      <div class="row">
        <div class="col-4">
          <div>
            <h6 class="f-4">OUR MISSION</h6>
            <h1 class="f-5">Innovation And Simplicity</h1>
            <p class="f-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p class="f-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <button class="f-7" style="margin-top: 35px">
              Get Started<i class="bi bi-arrow-right ms-2 f-icon"></i>
            </button>
          </div>
        </div>
        <div class="col-4">
          <div style="margin-top: 110px">
            <div class="d-flex">
              <div class="position-relative">
                <p class="circle-bg"></p>
                <img
                  src="../../public/assets/image/c1.png"
                  class="i-1"
                  alt=""
                />
              </div>
              <div>
                <h6 class="f-8 mt-4 ms-4 mb-0">Verified professionals</h6>
                <h6 class="f-9 ms-4 mt-1">
                  Cur tantas regiones barbaum pedibus obiit
                </h6>
              </div>
            </div>
            <div class="d-flex mt-4 pt-0">
              <div class="position-relative">
                <p class="circle-bg1"></p>
                <img
                  src="../../public/assets/image/thumb.png"
                  class="i-1"
                  alt=""
                />
              </div>
              <div>
                <h6 class="f-8 mt-4 ms-4 mb-0">Reliable & Fully Insured</h6>
                <h6 class="f-9 ms-4 mt-1">
                  Ut enim ad minim veniam, quis nostrud <br />
                  exercitation
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div style="margin-top: 110px">
            <div class="d-flex">
              <div class="position-relative">
                <p class="circle-bg2"></p>
                <img
                  src="../../public/assets/image/shield.png"
                  class="i-1"
                  alt=""
                />
              </div>
              <div>
                <h6 class="f-8 mt-4 ms-4 mb-0">Trusted & Experienced</h6>
                <h6 class="f-9 ms-4 mt-1">
                  Excepteur sint occaecat cupidatat non proident
                </h6>
              </div>
            </div>
            <div class="d-flex mt-4 pt-0">
              <div class="position-relative">
                <p class="circle-bg3"></p>
                <img
                  src="../../public/assets/image/world.png"
                  class="i-1"
                  alt=""
                />
              </div>
              <div>
                <h6 class="f-8 mt-4 ms-4 mb-0">Money-back guarantee</h6>
                <h6 class="f-9 ms-4 mt-1">
                  Duis aute irure dolor in repre dolore magna
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="count-back">
      <div class="row">
        <div class="col-3">
          <h1 class="f-12">415 <span class="f-12-1">+</span></h1>
          <h6 class="f-11">PRODUCTS SOLD</h6>
        </div>
        <div class="col-3">
          <h1 class="f-13">210 <span class="f-12-1">+</span></h1>
          <h6 class="f-14">SALES ON FIRST MONTH</h6>
        </div>
        <div class="col-3">
          <h1 class="f-15">150 <span class="f-12-1">+</span></h1>
          <h6 class="f-16">LOCAL BRANDS</h6>
        </div>
        <div class="col-3">
          <h1 class="f-17">
            365<span class="f-12-1" style="margin-left: 14px">+</span>
          </h1>
          <h6 class="f-18">CUSTOMER SERVED</h6>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 80px">
      <div class="row">
        <div class="col-6">
          <img
            src="../../public/assets/image/main-1.webp"
            class="main-1-img"
            alt=""
          />
        </div>
        <div class="col-6 mt-5">
          <div class="mt-5">
            <h6 class="f-4">WHAT WE DO</h6>
            <h1 class="f-5">
              Provide Fashionable <br />
              Andqualifed Products
            </h1>
            <p class="f-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              <br />
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              <br />
              unde omnis iste natus error sit voluptatem accusantium <br />
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              <br />
              illo inventore veritatis.
            </p>
            <button class="f-7" style="margin-top: 35px">
              Visit Our Store <i class="bi bi-arrow-right ms-2 f-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 200px">
      <div class="row">
        <div class="col-4">
          <div>
            <h6 class="f-4">WHAT WE DO</h6>
            <h1 class="f-5">
              Most Valuable <br />
              Brands Are <br />
              Available
            </h1>
          </div>
        </div>
        <div class="col-2">
          <img
            src="../../public/assets/image/pp-1.jpeg"
            class="opacity-75 d-block"
            alt=""
          />
          <img
            src="../../public/assets/image/pp-5.jpeg"
            class="opacity-75 mt-3"
            alt=""
          />
        </div>
        <div class="col-2">
          <img
            src="../../public/assets/image/pp-2.jpeg"
            class="opacity-75 d-block"
            alt=""
          />
          <img
            src="../../public/assets/image/pp-6.jpeg"
            class="opacity-75 mt-3"
            alt=""
          />
        </div>
        <div class="col-2">
          <img
            src="../../public/assets/image/pp-3.jpeg"
            class="opacity-75 d-block"
            alt=""
          />
          <img
            src="../../public/assets/image/pp-7.jpeg"
            class="opacity-75 mt-3"
            alt=""
          />
        </div>
        <div class="col-2">
          <img
            src="../../public/assets/image/pp-4.jpeg"
            class="opacity-75 d-block"
            alt=""
          />
          <img
            src="../../public/assets/image/pp-8.jpeg"
            class="opacity-75 mt-3"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 90px">
      <div class="row">
        <div class="col-4">
          <div class="ms-4 cart-1">
            <img src="../../public/assets/image/h-1.png" alt="" />
            <h6 class="ct-1">Bruce Jones</h6>
            <h6 class="ct-2">Boston, LA</h6>
            <h1 class="ct-3 mt-3 mb-0">“Excellent Work”</h1>
            <div class="ms-1">
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
            </div>
            <p class="ct-5 mt-4">
              I Am Very Impressed With Shopio. They <br />
              Provide My Company With A Product Of <br />
              Superb Quality At A Great Cost. We Look <br />
              Forward To A Long And Prosperous <br />
              Relationship.
            </p>
          </div>
        </div>
        <div class="col-4">
          <div class="ms-4 cart-2">
            <img src="../../public/assets/image/h-2.png" alt="" />
            <h6 class="ct-1">Matt Doe</h6>
            <h6 class="ct-2">Boston, LA</h6>
            <h1 class="ct-3 mt-3 mb-0">“Highly Recommended”</h1>
            <div class="ms-1">
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
            </div>
            <p class="ct-5 mt-4">
              I Was Highly Impressed With Technical <br />
              Support's Efforts, And Their Immediate <br />
              Response In Getting New Software Out To <br />
              Me. We Look Forward To A Long And <br />
              Prosperous Relationship.
            </p>
          </div>
        </div>
        <div class="col-4">
          <div class="ms-4 cart-3">
            <img src="../../public/assets/image/h-3.png" alt="" />
            <h6 class="ct-1">Tony Shark</h6>
            <h6 class="ct-2">Boston, LA</h6>
            <h1 class="ct-3 mt-3 mb-0">“Fast, Quality Service”</h1>
            <div class="ms-1">
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
              <i class="bi bi-star ct-4"></i>
            </div>
            <p class="ct-5 mt-4">
              I Am Very Impressed With Shopio. Thank You For Your Prompt Reply!
              I Like Dealing <br />
              With You Guys In That You Are Prompt, <br />
              Helpful And Professional And Your Gear <b></b> Has Always Worked
              As Advertised.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container-fluid"
      style="background-color: #333; margin-top: 180px"
    >
      <div class="container">
        <div class="row" style="padding: 100px 0">
          <div class="col-2">
            <h6 class="f1 text-white">USEFUL LINKS</h6>
            <h6 class="f2 mb-0 mt-4 pt-2">Legal & Privacy</h6>
            <h6 class="f2 mb-0">Contact</h6>
            <h6 class="f2 mb-0">Gift Card</h6>
            <h6 class="f2 mb-0">Customer Service</h6>
            <h6 class="f2">My Account</h6>
          </div>
          <div class="col-2 mt-5 pt-2">
            <h6 class="f2 mb-0">Abouts Us</h6>
            <h6 class="f2 mb-0">Careers</h6>
            <h6 class="f2 mb-0">Blog</h6>
            <h6 class="f2 mb-0">Affiliate Card</h6>
            <h6 class="f2 mb-0">Contact Us</h6>
          </div>
          <div class="col-5">
            <h6 class="text-center f3">STAY CAFFEINATED</h6>
            <p class="text-center f4">
              GET THE LATEST INFORMATION <br />
              AND SPECIAL OFFERS
            </p>
            <div class="d-flex">
              <input
                type="text"
                class="form-control w-75 d-block mx-auto mt-2"
                style="border-radius: 0"
                placeholder="Enter your email..."
              />
              <button class="btn-ft mt-2">Subscribe</button>
            </div>
            <div>
              <div></div>
              <div class="d-flex justify-content-center mt-4 pt-3">
                <div class="bs-icon1">
                  <i class="bi bi-facebook text-white bs-icon-margin"></i>
                </div>
                <div class="bs-icon1 ms-3">
                  <i class="bi bi-twitter text-white bs-icon-margin"></i>
                </div>
                <div class="bs-icon1 ms-3">
                  <i class="bi bi-pinterest text-white bs-icon-margin"></i>
                </div>
                <div class="bs-icon1 ms-3">
                  <i class="bi bi-instagram text-white bs-icon-margin"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <h6 class="f1 text-end text-white">GET IN TOUCH</h6>
            <div>
              <h5 class="f6 text-end mt-4 pt-2">890 - 876 -876</h5>
              <h6 class="f7 text-end">demo@demo.com</h6>
            </div>
            <div class="mt-4 pt-2">
              <h6 class="f7 text-end">
                Mon - Sat: <small class="f8"> 7.00am - 8.00pm</small>
              </h6>
              <h6 class="f7 text-end">
                Sun: <small class="f8">9.00am - 10.00pm</small>
              </h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="ft-line"></p>
            <h6 class="ft9 text-center text-white">
              Copyright © 2022 <span class="color">Drink</span> . All rights
              reserved
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../assets/js/aboutpage.js"></script>
