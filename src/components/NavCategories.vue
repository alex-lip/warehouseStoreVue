<template>
  <div class="navCategories pl-5">
    <div class="dropdown">
      <button class="dropbtn">Bearings</button>
      <div class="dropdown-content">
        <a href="#">Ball Bearings</a>
        <a href="#">Roller Bearings</a>
        <a href="#">Mounted Bearings</a>
        <a href="#">Thrust Bearings</a>
        <a href="#">Insert Bearings</a>
        <a href="#">Spherical Plain Bearings</a>
        <a href="#">Sleeve Bearings</a>
        <a href="#">Rod End Bearings</a>
        <a href="#">Bearing Tools</a>
        <a href="#">Bearing Accessories</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Sprockets</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Roller Chain</button>
      <div class="dropdown-content">
        <a href="#">ANSI Roller Chain</a>
        <a href="#">ANSI Roller Chain Links</a>
        <a href="#">Heavy Duty Roller Chain</a>
        <a href="#">Heavy Duty Roller Chain Links</a>
        <a href="#">Stainless Steel Roller Chain</a>
        <a href="#">Stainless Steel Roller Chain Links</a>
        <a href="#">Conveyor Chain</a>
        <a href="#">Metric Roller Chain</a>
        <a href="#">Metric Roller Chain Links</a>
        <a href="#">Chain Tools</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">V-Belts</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Pulleys</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Shaft Couplings</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Electric Motors</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Gearboxes</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Oil Seals</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
/* Navbar Categories */
.navCategories {
  background-color: #02203c;
  width: 100%;
}

/* Dropdown Button */
.dropbtn {
  background-color: #02203c;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  width: 300px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #626ee3;
}
</style>
