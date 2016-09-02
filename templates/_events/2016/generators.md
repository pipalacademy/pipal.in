---

title:
  Generators Inside Out

event_type:
  Workshop

dates:
  September 18, 2016

schedule: |
  September 18, 2016 (Sunday)
  9:00 AM to 4:00 PM

description: |
  Generators inside out is an one-day hands-on workshop that provides in-depth introduction to generators in Python.
  
  Using lot of examples and exercises, this workshop introduces the idea of generators in depth with emphasis on the new style of programming that generators makes possible. We'll also see how to build a cooperative multi-threading library using generators and explore the new async and await constructs of Python 3.

city:
  Bangalore
  
venue: |
  The Energy & Resources Institute
  4th Main, 2nd Cross
  Domlur, 2nd Stage
  Bangalore, Karnataka

map:
  #

trainer: /trainers/anand

course: generators

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
          itemCollection: '4928fee6-6885-11e6-988a-1f0239bee852',
          paymentDesc: 'Python Generators'
        });
        
      }).fail(function(response) {
        $('#boxoffice-widget p').html('Unable to connect. Please try again.');
      });
    });
  </script>

---
