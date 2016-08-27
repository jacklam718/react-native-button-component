jQuery(document).ready(function($) {
  var $githubLink = $('.github-link');
  var $component = $('.component');
  var $footer = $('.footer-section');

  var $introTitle = $component.find('.component-intro-title');
  var $introButtons = $component.find('.component-intro-buttons');
  var $introDescription = $component.find('.component-intro-description');

  var $watchDetailButton = $component.find('.watch-detail');
  var $closeDetailButton = $component.find('.close-component-demo');


  //on desktop, switch from component intro div to component demo div
  $watchDetailButton.on('click', function(event) {
    event.preventDefault();
    ($component.find('.is-component-demo')[0]) ? closeComponentDetail(): showComponentDetail();
  });

  //on desktop, switch from component demo div to component intro div
  $closeDetailButton.on('click', function() {
    event.preventDefault();
    closeComponentDetail();
  });


  function showComponentDetail() {
    //detect the CSS media query using .component-intro::before content value
    var mq = window.getComputedStyle(document.querySelector('.component-intro'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
    if (mq == 'mobile') {
      $('body,html').animate({
        'scrollTop': $($(this).attr('href')).offset().top
      }, 200);
    } else {
      IntroElemWithAnimOnShow();
      $component.addClass('is-component-demo').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        $githubLink.hide();
        $footer.hide();
        $closeDetailButton.removeAttr('hidden');
      });
    }
  }

  function closeComponentDetail() {
    $component.removeClass('is-component-demo');
    $githubLink.show();
    $footer.show();
    $closeDetailButton.attr('hidden', true);

    introElemWithAnimOnClose();
  }


  function IntroElemWithAnimOnShow() {
    $introTitle.addClass('animated fadeOutLeft');
    $introButtons.addClass('animated fadeOutLeft');
    $introDescription.addClass('animated fadeOutLeft');
  }

  function introElemWithAnimOnClose() {
    function replaceClass($elem, oldClass, newClass) {
      $elem.removeClass('animated ' + oldClass);
      $elem.addClass('animated ' + newClass);
    }

    replaceClass($introTitle, 'fadeOutLeft', 'fadeInLeft')
    replaceClass($introButtons, 'fadeOutLeft', 'fadeInLeft');
    replaceClass($introDescription, 'fadeOutLeft', 'fadeInLeft');
  }
});
