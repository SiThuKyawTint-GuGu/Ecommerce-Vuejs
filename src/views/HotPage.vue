<template>
  <div>
    <nav>
      <div class="" id="imageslider ">
        <div class="container">
          <div class="nav-barp position-relative">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid mt-3">
                <a class="navbar-brand" href="#"
                  ><img src="assets/image/header.jpeg"
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
                                    src="assets/image/coffee.jpeg"
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
                                      src="assets/image/h1.jpeg"
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
                                      src="assets/image/h2.jpeg"
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
                                      src="assets/image/h3.jpeg"
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
                                      src="assets/image/h4.jpeg"
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
                                      src="assets/image/h5.jpeg"
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
                                      src="assets/image/h6.jpeg"
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
                                      src="assets/image/h7.jpeg"
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
                                      src="assets/image/h8.jpeg"
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
                                      src="assets/image/h9.jpeg"
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
                                    src="assets/image/final.webp"
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
      <div class="">
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
              <span style="margin-right: 13px">/</span>Prices Drop
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-3 mt-3">
          <div class="box-border mt-4">
            <h6 class="tt1">Home</h6>
            <ul class="list-unstyled">
              <li>
                <div class="d-flex justify-content-between effect">
                  <div class="d-flex">
                    <p class="dott"></p>
                    <h6 @click="getdata()" class="tt2">All</h6>
                  </div>
                  <di>
                    <i class="bi bi-plus svg-plus"></i>
                  </di>
                </div>
              </li>
              <li >
                <div @click="searchcategoryid(item.category_id)" v-for="(item,index) in categorydata" :key="index" class="d-flex justify-content-between effect">
                  <div class="d-flex">
                    <p class="dott"></p>
                    <h6 class="tt2">{{item.title}}</h6>
                  </div>
                  <di>
                    <i class="bi bi-plus svg-plus"></i>
                  </di>
                </div>
              </li>
            </ul>
          </div>
          <p class="li-line"></p>
        </div>

        <div class="col-9">
          <div class="row mt-3 pt-4 ps-2">
            <h5 class="tt55">Prices Drop</h5>
          </div>
          <div class="size-box22">
            <button class="border-0 bg-white" @click="statuscondition()">
              <i class="bi bi-list-columns"></i>
            </button>
            <button class="border-0 bg-white ms-1" @click="statuscheck()">
              <i class="bi bi-list-ul" style="color: #666"></i>
            </button>
          </div>

          <div class="mt-4 pt-2 w-25">
            <div class="d-flex search-box search-size">
              <div>
                <h6 class="ht-1">Sort by:</h6>
              </div>
              <div>
                <select v-if="multipledata.length === 0" disabled name="" @change="getselectdata()" class="selectform" v-model="selectdata" id="">
                  <option value="">Choose Option...</option>
                  <option value="1">Name ,A to Z</option>
                  <option value="2">Name ,Z to A</option>
                  <option value="3">High to Low</option>
                  <option value="4">Low to Hight</option>
                </select>
                <select v-else name="" @change="getselectdata()" class="selectform" v-model="selectdata" id="">
                  <option value="">Choose Option...</option>
                  <option value="1">Name ,A to Z</option>
                  <option value="2">Name ,Z to A</option>
                  <option value="3">High to Low</option>
                  <option value="4">Low to Hight</option>
                </select>
              </div>
            </div>
            <p class="line-bottom"></p>
          </div>

          <div class="row">
            <div
              v-if="showStatus == true"
              class="animate__animated animate__fadeInUp"
            >
              <div
                class="col-9 position-relative p-above"
                v-for="(item, index) in gethotdata"
                :key="index"
              >
                <div class="box1 d-flex">
                  <div>
                    <img
                      class="image-card border image-resize1"
                      @click="getid(item.id)"
                      :src="item.image"
                      alt=""
                    />
                    <div class="body-icon-box1 image-hide">
                      <div class="textbox1 d-flex">
                        <div class="ms-1">
                          <i
                            class="fa-sharp fa-solid fa-eye body-icons margin-only box-hover"
                          >
                            <div>
                              <small class="hover-text add">
                                <small class="rotate-triangle"></small>
                                QUICK VIEW</small
                              >
                            </div>
                          </i>
                        </div>
                        <div class="">
                          <i
                            class="fa-solid fa-cart-shopping body-icons margin-only size box-hover"
                          >
                            <div>
                              <small class="hover-text add">
                                <small class="rotate-triangle"></small>
                                ADD TO CART</small
                              >
                            </div>
                          </i>
                        </div>
                        <div>
                          <i
                            class="fa-solid fa-compress body-icons margin-only size-1 box-hover"
                          >
                            <div>
                              <small class="hover-text add">
                                <small class="rotate-triangle"></small>
                                ADD TO COMPARE</small
                              >
                            </div>
                          </i>
                        </div>
                        <div>
                          <i
                            class="fa-regular fa-heart body-icons margin-only size-2 box-hover"
                          >
                            <div>
                              <small class="hover-text fw-bold add">
                                <small class="rotate-triangle"></small>
                                ADD TO WISHLIST</small
                              >
                            </div>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="text-box-1">
                    <h6 class="cart-text-1 text-start" style="font-size: 11px">
                      {{ item.title }}
                    </h6>
                    <h6
                      class="cart-text-2 text-start mt-0"
                      style="font-size: 14px"
                    >
                      {{ item.description }}
                    </h6>
                    <div class="text-start cart-text-3 mt-2">
                      <i class="fa-solid fa-star text-warning opacity-75"></i>
                      <i class="fa-solid fa-star text-warning opacity-75"></i>
                      <i class="fa-solid fa-star text-warning opacity-75"></i>
                      <i class="fa-solid fa-star text-warning opacity-75"></i>
                      <i class="fa-solid fa-star text-warning opacity-75"></i>
                    </div>
                    <p
                      class="cart-text-4 text-start mt-1"
                      style="font-size: 16px; font-weight: 500"
                    >
                      <del style="color: #999" class="me-2"
                        >${{ Number(item.price + 100) * 2 }}</del
                      >
                      ${{ item.price }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="gethotdata.length === 0" class="col mt-4">
            <div class="a-border d-flex" role="alert">
              <i class="bi bi-exclamation-triangle-fill me-1 ms-2"></i>
              <h6 class="alert-text mt-1 ms-2">
                Sorry, We are update data, please come back later!!!
              </h6>
            </div>
          </div>
            <div
              v-else
              class="col-4 position-relative mt-4"
              v-for="(item, index) in gethotdata"
              :key="index"
            >
              <div class="box">
                <img
                  class="image-card border image-resize"
                  @click="getid(item.id)"
                  :src="item.image"
                  alt=""
                />
                <div>
                  <div
                    class="body-icon-box image-hide animate__animated animate__bounce"
                  >
                    <div class="textbox1 d-flex">
                      <div class="ms-1">
                        <i
                          class="fa-sharp fa-solid fa-eye body-icons margin-only box-hover"
                        >
                          <div>
                            <small class="hover-text add">
                              <small class="rotate-triangle"></small>
                              QUICK VIEW</small
                            >
                          </div>
                        </i>
                      </div>
                      <div class="">
                        <i
                          class="fa-solid fa-cart-shopping body-icons margin-only size box-hover"
                        >
                          <div>
                            <small class="hover-text add">
                              <small class="rotate-triangle"></small>
                              ADD TO CART</small
                            >
                          </div>
                        </i>
                      </div>
                      <div>
                        <i
                          class="fa-solid fa-compress body-icons margin-only size-1 box-hover"
                        >
                          <div>
                            <small class="hover-text add">
                              <small class="rotate-triangle"></small>
                              ADD TO COMPARE</small
                            >
                          </div>
                        </i>
                      </div>
                      <div>
                        <i
                          class="fa-regular fa-heart body-icons margin-only size-2 box-hover"
                        >
                          <div>
                            <small class="hover-text fw-bold add">
                              <small class="rotate-triangle"></small>
                              ADD TO WISHLIST</small
                            >
                          </div>
                        </i>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <h6 class="cart-text-1 text-center">{{ item.title }}</h6>
                    <h6 class="cart-text-2 text-center mt-0">
                      {{ item.description }}
                    </h6>
                    <div class="text-center cart-text-3">
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                    </div>
                    <p class="cart-text-4 text-center mt-1">
                      ${{ item.price }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

<script src="../assets/js/hotpage.js"></script>