---

title:
  Python Decorators Demystified

active: true  

event_type:
  Online Workshop

published: true

dates:
  October 22 & 23, 2016

time:
  9:00 AM - 11:30 AM IST

schedule: |
  October 22 & 23, 2016 <br>
  9AM - 11:30 AM IST

brief:
  Learn function programming concepts to build libraries and frameworks with beautiful APIs.

description: |
  Decorators are one of the elegant features of the Python programming language. They are heavily used in modern libraries and frameworks to create elegant APIs. 
  
  This workshop introduces Python decorators starting from the functional programming concepts to writing practical decorators using lot of examples and exercises. 
  
  At the end of the workshop, you'll be able to:
  - understand how decorators work
  - appreciate how decorators are applied in the libraries and frameworks that you use
  - build beautiful abstractions using decorators
  - improve code readability and reusability using techniques learnt

prerequisites: |
  - Ability to write functions in Python
  - Good knowledge of basic data types in Python (int, str, lists, tuples)
  - Exposure to classes in Python
  - Experience of using modules from Python standard library

outline: |
  
  ### Day 1
  
  - Introduction to Functions in Python
  - Functions that take functions as arguments
  - Functions returning functions
  - Introduction to Decorators
  
  ### Day 2
  - Decorators that take arguments
  - Decorator Patterns
  - Building a simple web framework using decorators


trainer: /trainers/anand

course: /courses/advanced-python

tickets_embed: |
  <div id="boxoffice-widget" style="padding-top: 0px;"><p class="text-center regular">Loading...</p></div>

  <script type="text/javascript">
    $(function(){
      //Boxoffice widget
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
          itemCollection: 'e49c6d99-819e-11e6-a34f-6fc4a1ee2543',
          paymentDesc: 'Python Decorators Online Workshop'
        });

      }).fail(function(response) {
        $('#boxoffice-widget p').html('Unable to connect. Please try again.');
      });
    });
  </script>

---
