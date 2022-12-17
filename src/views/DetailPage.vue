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
          <div class="logo1 justify-content-center d-flex">
            <h6 class="size-text text-center" @click="gotohome()">Home</h6>
            <h6 class="size-text text-center ms-3" v-for="(item,index) in onlydata" :key="index">
              <span style="margin-right: 13px">/</span>{{item.cartdescription}}
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container box-card-effect animate__animated animate__slideInDown"
      v-if="seen"
    >
      <div class="row justify-content-center">
        <div class="col-9" v-for="(thing, index) in shopcard" :key="index">
          <div class="shop-status shadow-sm mb-0">
            <h6 class="text-center tx-1">
              <i class="bi bi-check-lg me-3 fs-6"></i>Product successfully added
              to your shopping cart
            </h6>
          </div>
          <div class="shadow-sm bg-white">
            <div class="row mt-2">
              <div class="col-6 d-flex b-only">
                <img
                  :src="thing.image"
                  class="card-image ms-4 mb-4 mt-4"
                  alt=""
                />
                <h6 class="card-q mt-3 ms-4 ps-3 pt-4">
                  Quantity : <span class="ms-2">{{ countdata }}</span>
                </h6>
              </div>
              <div class="col-6">
                <div>
                  <h6 class="tx-2 mt-4 ms-0">
                    There is {{ countdata }} item in your cart.
                  </h6>
                  <div class="row mt-3">
                    <div class="col d-flex justify-content-between">
                      <h6 class="tx-3">Subtotal:</h6>
                      <h6 class="tx-3 pe-4">
                        ${{
                          Number(
                            thing.price * countdata + taxes + delivery
                          ).toFixed(2)
                        }}
                      </h6>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col d-flex justify-content-between">
                      <h6 class="tx-4">Price</h6>
                      <h6 class="tx-4 pe-4">
                        ${{ Number(thing.price * countdata).toFixed(2) }}
                      </h6>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col d-flex justify-content-between">
                      <h6 class="tx-3">Delivery</h6>
                      <h6 class="tx-3 pe-4">
                        ${{ Number(delivery).toFixed(2) }}
                      </h6>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col d-flex justify-content-between">
                      <h6 class="tx-4">Taxes:</h6>
                      <h6 class="tx-3 pe-4">${{ Number(taxes).toFixed(2) }}</h6>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col d-flex">
                      <button class="btn-card-1" @click="seen = !seen">
                        Continue Shopping
                        <p class="underline"></p>
                      </button>
                      <button
                        class="btn-card-2 ms-3"
                        @click="gotocart(thing.cartid)"
                      >
                        <i class="bi bi-check-lg me-3 fs-6"></i>Proceed To
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row" v-for="(data, index) in onlydata" :key="index">
        <div class="col-6" style="margin-top: 60px">
          <div>
            <img :src="data.image" class="large-image-size" alt="" />
          </div>
        </div>
        <div class="col-6" style="margin-top: 60px">
          <div v-if="data.statusid == 1" class="box-condition">
            <h6 class="tt-tt-12">{{ data.condition }}</h6>
          </div>
          <div v-if="data.statusid == 2" class="box-condition border-danger">
            <h6 class="tt-tt-12 text-danger">{{ data.condition }}</h6>
          </div>
          <div class="mt-3">
            <h1 class="tt-tt-1">{{ data.cartdescription }}</h1>
          </div>
          <div class="d-flex pt-1 mb-3">
            <h1 class="tt-tt-2">
              BRAND : <span class="tt-tt-3">{{ data.brandname }}</span>
            </h1>
            <h1 class="tt-tt-2 ms-4">
              CATEGORY : <span class="tt-tt-3">{{ data.categorytitle }}</span>
            </h1>
          </div>
          <p class="line-through"></p>
          <div class="pb-2">
            <h1 class="tt-tt-4">
              ${{ Number(data.price * countdata).toFixed(2) }}
            </h1>
            <p class="tt-tt-5 mt-4">
              Vector graphic, format: svg. Download for personal, private and
              non-commercial use.
            </p>
          </div>
          <div class="line-border">
            <div class="d-flex">
              <div class="border-calc d-flex">
                <button class="border-0 bg-white ms-2" @click="minus()">
                  <i class="bi bi-dash-lg"></i>
                </button>
                <h6 class="widthonly mx-3">{{ countdata }}</h6>
                <button class="border-0 bg-white" @click="plus()">
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
              <div class="ms-4 ps-2" v-if="data.statusid == 2">
                <button
                  class="btn-tt opacity-25"
                  @click="boxhover(data.cartid)"
                  disabled
                >
                  ADD TO CART
                </button>
              </div>
              <div class="ms-4 ps-2" v-if="data.statusid == 1">
                <button class="btn-tt" @click="boxhover(data.cartid)">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div class="d-flex mt-4">
              <h6 class="tt-tt-6">
                <i class="bi bi-heart fs-6 me-2"></i>Add To Wishlist
              </h6>
              <h6 class="tt-tt-6 ms-4 ps-1">
                <i class="bi fs-6 bi-arrow-left-right me-2"></i> Add To Compare
              </h6>
            </div>
          </div>
          <div class="mt-4">
            <div class="text-start cart-text-3 mt-2">
              <i class="fa-solid fa-star text-warning opacity-75"></i>
              <i class="fa-solid fa-star text-warning opacity-75"></i>
              <i class="fa-solid fa-star text-warning opacity-75"></i>
              <i class="fa-solid fa-star text-warning opacity-75"></i>
              <i class="fa-solid fa-star text-warning opacity-75"></i>
              <span class="ms-3">|</span>
              <i class="bi bi-pencil ms-3 fs-6"
                ><span class="ms-2 tt-tt-7">Write a review</span></i
              >
            </div>
          </div>
          <div class="d-flex my-3">
            <div class="d-flex">
              <i class="bi bi-facebook" style="color: #2f55a4"></i>
              <h6 class="tt-tt-8 mt-1 ms-2">Share</h6>
            </div>
            <div class="d-flex ms-3">
              <i class="bi bi-twitter" style="color: #00b9ff"></i>
              <h6 class="tt-tt-8 mt-1 ms-2">Tweet</h6>
            </div>
            <div class="d-flex ms-3" style="color: #dd0e1a">
              <i class="bi bi-pinterest"></i>
              <h6 class="tt-tt-8 mt-1 ms-2">Pinterest</h6>
            </div>
          </div>
          <div>
            <div class="d-flex text-decoration-underline text-color">
              <i class="bi bi-bounding-box"></i>
              <h6 class="tt-tt-9 mt-1 ms-2">Size Guide</h6>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <div class="border-ff">
                  <h6 class="mb-0 tt-tt-10">Security policy</h6>
                  <h6 class="mb-0 tt-tt-11">
                    (edit with the Customer Reassurance module)
                  </h6>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="border-ff">
                  <h6 class="mb-0 tt-tt-10">Delivery policy</h6>
                  <h6 class="mb-0 tt-tt-11">
                    (edit with the Customer Reassurance module)
                  </h6>
                </div>
              </div>
              <div class="col-12 mt-3">
                <div class="border-ff">
                  <h6 class="mb-0 tt-tt-10">Return policy</h6>
                  <h6 class="mb-0 tt-tt-11">
                    (edit with the Customer Reassurance module)
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5 pt-5">
      <div class="">
        <h6 class="text-center mb-0 tt-tt-13">RELATED PRODUCTS</h6>
        <p class="text-center tt-tt-14 mt-2">
          ( 16 other products in the same category )
        </p>
      </div>
      <div class="row">
        <div class="col mt-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-inner">
              <div class="carousel-item active hidden-image">
                <div class="row ms-2">
                  <div
                    class="col-3 position-relative"
                    v-for="(item, index) in cartdata"
                    :key="index"
                  >
                    <div class="scroller">
                      <img
                        class="above-image border"
                        @click="getid(item.id)"
                        :src="item.image"
                        alt=""
                      />
                      <div>
                        <div class="mt-4 textbox">
                          <h6 class="cart-text-1 text-center">
                            {{ item.title }}
                          </h6>
                          <h6 class="cart-text-2 text-center mt-0">
                            {{ item.description }}
                          </h6>
                          <div class="text-center cart-text-3">
                            <i
                              class="fa-solid fa-star opacity-75 text-warning"
                            ></i>
                            <i
                              class="fa-solid fa-star opacity-75 text-warning"
                            ></i>
                            <i
                              class="fa-solid fa-star opacity-75 text-warning"
                            ></i>
                            <i
                              class="fa-solid fa-star opacity-75 text-warning"
                            ></i>
                            <i
                              class="fa-solid fa-star opacity-75 text-warning"
                            ></i>
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

<script src="../assets/js/detailpage.js"></script>
