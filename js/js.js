function ChangeColor1(t)
{
    if( t == '1' ){       
        document.getElementById('here').className = "img1";       
    }else if( t == '2' ) {
        document.getElementById('here').className = "img2";
    };
};

function ChangeColor2(r)
{
    if( r == '3' ){       
        document.getElementById('here2').className = "img3";       
    }else if( r == '4' ) {
        document.getElementById('here2').className = "img4";
    };
};

function ChangeColor3(e)
{
    if( e == '5' ){       
        document.getElementById('here3').className = "img5";       
    }else if( e == '6' ) {
        document.getElementById('here3').className = "img6";
    }else if( e == '7' ) {
        document.getElementById('here3').className = "img7";
    }else if( e == '8' ) {
        document.getElementById('here3').className = "img8";
    };
};
// sec02이미지

var acc = document.getElementsByClassName("accordion");
            var i;
            
            for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                  panel.style.maxHeight = null;
                } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
                } 
              });
            }
// sec02 탭바



  // Call & init
  $(document).ready(function(){
    $('.ba-slider').each(function(){
        var cur = $(this);
        // Adjust the slider
        var width = cur.width()+'px';
        cur.find('.resize img').css('width', width);
        // Bind dragging events
        drags(cur.find('.handle'), cur.find('.resize'), cur);
    });
    });

    // Update sliders on resize. 
    // Because we all do this: i.imgur.com/YkbaV.gif
    $(window).resize(function(){
    $('.ba-slider').each(function(){
        var cur = $(this);
        var width = cur.width()+'px';
        cur.find('.resize img').css('width', width);
    });
    });

    function drags(dragElement, resizeElement, container) {
        
    // Initialize the dragging event on mousedown.
    dragElement.on('mousedown touchstart', function(e) {
        
        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');
        
        // Check if it's a mouse or touch event and pass along the correct value
        var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
        
        // Get the initial position
        var dragWidth = dragElement.outerWidth(),
            posX = dragElement.offset().left + dragWidth - startX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth();
    
        // Set limits
        minLeft = containerOffset + 10;
        maxLeft = containerOffset + containerWidth - dragWidth - 10;
        
        // Calculate the dragging distance on mousemove.
        dragElement.parents().on("mousemove touchmove", function(e) {
            
        // Check if it's a mouse or touch event and pass along the correct value
        var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
        
        leftValue = moveX + posX - dragWidth;
        
        // Prevent going off limits
        if ( leftValue < minLeft) {
            leftValue = minLeft;
        } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
        }
        
        // Translate the handle's left value to masked divs width.
        widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
                
        // Set the new values for the slider and the handle. 
        // Bind mouseup events to stop dragging.
        $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
        $('.resizable').css('width', widthValue);
        }).on('mouseup touchend touchcancel', function(){
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
        });
        e.preventDefault();
    }).on('mouseup touchend touchcancel', function(e){
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
    }
// sec03 daily

$(function(){
    setInterval(function(){
        $(".slide-img").delay("2500");
        $(".slide-img").animate({
            marginTop: "-410px"
        }, "500");
        $(".slide-img").delay("2500");
        $(".slide-img").animate({
            marginTop: "-810px"
        }, "500");

        $(".slide-img").delay("2500");
        $(".slide-img").animate({
            marginTop: "0"
        }, "500");
    });
});




// section04 modal

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// section05 tab


AOS.init();
// aos js