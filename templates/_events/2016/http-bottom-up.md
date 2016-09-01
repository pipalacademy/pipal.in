---

title:
  HTTP Bottom Up

event_type:
  Workshop

dates:
  September 16 & 17, 2016 (Friday & Saturday)

schedule: |
  September 18, 2016 (Sunday)
  9:00 AM to 4:00 PM

description: |
  HTTP Bottom Up is a two-day hands-on workshop to explore everything that happens behind the scenes of your favorite web framework.
  
  This workshop explores building web applications starting all the way from bare sockets, without using any framework. Even though this is not the most production way to build web applications, this exercise will give a chance to observe and understand everything that happens behind the scenes of any web application.
  
  After the course, the participants will be in a better position to architect web applications and reason about their performance and scaliabity.
  
  The workshop uses Python 3 for all the examples and exercises.

city:
  Bangalore
  
venue: |
  The Energy & Resources Institute
  4th Main, 2nd Cross
  Domlur, 2nd Stage
  Bangalore, Karnataka

map:
  #

trainer: anand

course: http-bottom-up

tickets_embed: |
  <div id="boxoffice-widget" style="padding-top: 0px;"><p class="text-center regular">Loading...</p></div>
  <script type="text/javascript">
    $(function(){
      // Boxoffice widget
      var boxofficeUrl = "https://boxoffice.hasgeek.com";
      $.get({
        url: boxofficeUrl+"/api/1/boxoffice.js",
        crossDomain: true
      }).done(function(data) {
        var boxofficeScript = document.createElement('script');
        boxofficeScript.innerHTML = data.script;
        document.getElementsByTagName('body')[0].appendChild(boxofficeScript);
        window.Boxoffice.init({
          org: 'Pipal Academy',
          razorpayBanner: 'https://pipal.in/static/images/dummy-logo.png',
          itemCollection: '176580a1-6885-11e6-871c-253c1946f3fe',
          paymentDesc: 'HTTP Bottom Up'
        });
        
      }).fail(function(response) {
        $('#boxoffice-widget p').html('Unable to connect. Please try again.');
      });
    });
  </script>

---
