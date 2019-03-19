$(document).ready(function () {
    // sprites
    svg4everybody({});
    //svg background
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
    // link to section
    function scrollToSection() {
        jQuery('.menu__list a').click(function(){  
          //Toggle Class
          jQuery(".active").removeClass("active");      
          jQuery(this).closest('li').addClass("active");
          var theClass = jQuery(this).attr("class");
          jQuery('.'+theClass).parent('li').addClass('active');
          //Animate
          jQuery('html, body').stop().animate({
              scrollTop: jQuery( jQuery(this).attr('href') ).offset().top - 160
          }, 400);
          return false;
        });
        $('.scrollTop a').scrollTop();
      }
      scrollToSection();
});