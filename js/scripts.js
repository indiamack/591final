$(function(){
  console.log('scripts loaded');

  var yearSection = document.getElementById('content');
  var textSection = document.getElementById('text');


  var a1 = "<div class='pop'>" + "<h3>Population</h3>" + "<h1>525</h1>" + "</div>"
  var a2 = "<p>Aurora was a stereotypical coastal town in eastern North Carolina: small, agricultural and isolated. But due to the rising industrialization and mechanization of farming, the coming decade would begin draining its population as farm workers moved on in search of jobs. The few young people who finished high school -- 22% overall and only 6% of people of color -- also left to find better employment opportunities.</p>"
  var b1 = "<div class='pop'>" + "<h3>Population</h3>" + "<h1>671</h1>" + "</div>" + "<div class='popp'>" +"<h3>Projected Population</h3>" + "<h1>1000</h1>" + "</div>";
  var b2 = "<p>Phosphate deposits discovered in the 1950s offered a new economic beacon for declining Aurora. A phosphate mine operated by Texas Gulf opened in 1964 and turned the tide, leading to a rise in population. Town residents and officials hoped this facet of their economy would draw in new transportation projects to better connect Aurora to the rest of the state, including a railroad, bridge across the river and new deep water channel. A land development plan from 1967 summarized the hopes pinned on the mine: “In all probability, the success or failure of this new industry will be the greatest determinant in Aurora’s future growth picture.” But by 1974, expectations had fallen short and tensions rose as the mine announced an expansion much closer to town than many residents were comfortable with.</p>"
  var c1 = "<div class='pop'>" + "<h3>Population</h3>" + "<h1>673</h1>" + "</div>" + "<div class='popp'>" + "<h3>Projected Population</h3>" + "<h1>2000</h1>"+ "</div>";
  var c2 = "<p>The transportation projects promised to Aurora never came and new employment opportunities at the mine slowed, leaving the town far short of its projected population growth of 2000. Despite this, the town still supports more businesses downtown than expected with a furniture store, six beauty shops, an auto parts store, five gas stations, three hardware stores, two grocery stores and three clothing stores. In the meantime, the phosphate mine, now operated by North Carolina Phosphate Company, greatly expanded. Built before existing environmental protection laws, it became the second largest landowner in the county with 65,000 acres of land and third biggest producer of sulfate waste in the country with 3.5 million tons every year.</p>"
  var d1 = "<div class='pop'>" + "<h3>Population</h3>" + "<h1>512</h1>" + "</div>" + "<div class='popp'>" + "<h3>Projected Population</h3>" + "<h1>1000</h1>"+ "</div>";
  var d2 = "<p>Today, Aurora falls short of a 1976 predicted population of 1000. The businesses it boasted only a couple decades ago have fallen away, leaving one gas station and the nearest grocery store a 40-minute drive. The only open business downtown is a fossil museum, proudly displaying the ancient shark teeth pulled out of the phosphate mine. The mine has grown to several times the size of Aurora itself, now visible from graveyards and no longer tucked away out of sight.</p>"



   $('#hover1').on({
       mouseenter: function(){
        $('#main').css({'background-image':'url("img/1950.png")'});
        yearSection.innerHTML = a1;
        textSection.innerHTML = a2;
        console.log('plz work');
       }

     });

     $('#hover2').on({
         mouseenter: function(){
          $('#main').css({'background-image':'url("img/1974.png")'});
          yearSection.innerHTML = b1;
          textSection.innerHTML = b2;
          console.log('plz work');
         }

       });

       $('#hover3').on({
           mouseenter: function(){
            $('#main').css({'background-image':'url("img/1993.png")'});
            yearSection.innerHTML = c1;
            textSection.innerHTML = c2;
            console.log('plz work');
           }

         });

         $('#hover4').on({
             mouseenter: function(){
              $('#main').css({'background-image':'url("img/2019.png")'});
              yearSection.innerHTML = d1;
              textSection.innerHTML = d2;
              console.log('plz work');
             }

           });

    $('#footer>h3').on({
          click: function(){
            $('#footer').css({"background-color": "#9C9B7A", "height": "300px"});
            $('#source').css({"display":"block"});
        }


           });

}); // end
