$(function() {
  function animationStart() {
    $('#container').addClass('fin');
  }
  function texts1() {
    $('#text-show').addClass('shoyt1');
  }
  function hand1() {
    $('#hand-hide').addClass('showH1');
  }
  function dolarsign1() {
    $('#coin-sign').addClass('dollar-show');
  }
  function wintext() {
      $('#win-text').addClass('win-show');
  }
  function dls5() {
        $('#text-5').addClass('show-5d');
    }
  function coindls5() {
    $('#coindls5').addClass('coindls5-show');
  }
  function coinsign2() {
      $('#coin-sign2').addClass('coin-sign2-show');
  }
  function textplay() {
      $('#textplay').addClass('textplay-show');
  }
  function token() {
      $('#token').addClass('token-show');
  }
  function handcoin() {
      $('#handcoin').addClass('handcoin-show');
  }
  function dolarsign2() {
      $('#dolarsign2').addClass('dolarsign2-show');
  }
  function losetext() {
      $('#lose-text').addClass('lose-text-show');
  }
  function playone() {
      $('#playone').addClass('playone-show');
  }
  function playtwo() {
      $('#playtwo').addClass('playtwo-show');
  }
  function circulo1() {
      $('#circ-1').addClass('play1');
  }
  function circulo2() {
      $('#circ-2').addClass('play2');
  }
  function circulo3() {
      $('#circ-3').addClass('play3');
  }
  function circulo8() {
      $('#circ-8').addClass('play8');
  }
  function circulo6() {
      $('#circ-6').addClass('play6');
  }
  function circulo7() {
      $('#circ-7').addClass('play7');
  }
  function circulo5() {
      $('#circ-5').addClass('play5');
  }
  function circulo4() {
      $('#circ-4').addClass('play4');
  }
  function circuloimg() {
      $('#image-ani').addClass('playImg');
  }
  function bills() {
      $('.cls-7').addClass('cls-7-show');
  }

  $(window).scroll(function() {
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    var aas=true;
    var size=$( window ).width();
    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    if(elementScrolled('#cog')||size<=1025) {
        if(aas==true) {
          aas=false;
          setTimeout(animationStart, 250);
          setTimeout(circulo1, 500);
          setTimeout(texts1, 700);
          setTimeout(circulo2, 500);
          setTimeout(hand1, 1400);
          setTimeout(dolarsign1, 1400);
          setTimeout(wintext, 1400);
          setTimeout(circulo3, 750);
          setTimeout(dls5, 1700);
          setTimeout(coindls5, 1700);
          setTimeout(coinsign2, 1700);
          setTimeout(coinsign2, 1700);
          setTimeout(circulo8, 1000);
          setTimeout(textplay, 2000);
          setTimeout(circulo6, 1500);
          setTimeout(token, 2300);
          setTimeout(dolarsign2, 2300);
          setTimeout(losetext, 2300);
          setTimeout(circulo7, 1750);
          setTimeout(playone, 2500);
          setTimeout(playtwo, 2500);
          setTimeout(handcoin, 2500);
          setTimeout(circulo5, 2000);
          setTimeout(bills, 2700);
          setTimeout(circulo4, 2250);
          setTimeout(circuloimg, 2500);
        }
      }
  });
});
