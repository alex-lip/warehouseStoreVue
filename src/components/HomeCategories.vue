<template>
  <div class="container-fluid bg-light">
    <div class="row product-group pb-2">
      <div class="col-md-5">
        <h2 class="m-2 ml-4">Bearings</h2>
        <img
          src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
          alt="Tapered Roller Bearings"
          width="400px"
          class="ml-5"
        />
      </div>
      <div class="col-md-7">
        <div class="row">
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
                src="https://pixy.org/src/479/thumbs350/4794045.jpg"
              
              alt="Ball Bearing"
              height="100px"
            />
            <p>Ball Bearings</p>
          </div>
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
              src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
              alt="Roller Bearings"
              width="120px"
            />
            <p>Roller Bearings</p>
          </div>
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
              src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
              alt="Mounted Bearings"
              width="120px"
            />
            <p>Mounted Bearings</p>
          </div>
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
              src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
              alt="Tapered Roller Bearings"
              width="120px"
            />
            <p>Thrust Bearings</p>
          </div>
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
              src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
              alt="Tapered Roller Bearings"
              width="100px"
            />
            <p>Spherical Plain Bearings</p>
          </div>
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
              src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
              alt="Tapered Roller Bearings"
              width="120px"
            />
            <p>Sleeve Bearings</p>
          </div>
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
              src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
              alt="Tapered Roller Bearings"
              width="120px"
            />
            <p>Rod End Bearings</p>
          </div>
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
              src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
              alt="Tapered Roller Bearings"
              width="120px"
            />
            <p>Bearing Tools</p>
          </div>
          <div
            class="product-box d-flex justify-content-start align-items-center col-md-3 col-sm-5 col-5"
          >
            <img
              src="https://1m28fbq9etc1rj5ga1fu0k61-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/TS-etched.png"
              alt="Tapered Roller Bearings"
              width="120px"
            />
            <p>Bearing Accessories</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end mr-5 bg-light">
        <p>See All Bearings<i id="seeAll" class="fas fa-angle-right pl-2"></i></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.product-box {
  height: 144px;
  background-color: #fff;
  margin: 10px;
  box-sizing: border-box;
  flex-direction: column;
  padding: 16px;
}

.product-box:hover {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  color: var(--secondary-color);
}

.product-box p {
  font-size: 14px;
}

#seeAll {
    color: #000;
}
</style>
