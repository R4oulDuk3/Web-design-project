<template>
    <div>
      <div class="footer-basic notprintable">
        <footer>
            <div class="social"><a href="#"><i class="lab la-instagram"></i></a><a href="#"><i class="lab la-snapchat"></i></a><a href="#"><i class="lab la-twitter"></i></a><a href="#"><i class="lab la-facebook-f"></i></a></div>
            <p class="copyright">Copyright Marina i Gavrilo, Odsek za softversko inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu</p>
        </footer>
    </div>
    </div>
</template>


<style>
.footer-basic {
  padding:40px 0;
  background-color:whitesmoke;
  color:#4b4c4d;
  
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:25px;
}

.footer-basic .social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid darkgray;
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color: black;
  margin-bottom:0;
}

/* Credit to https://epicbootstrap.com/snippets/footer-basic */

</style>