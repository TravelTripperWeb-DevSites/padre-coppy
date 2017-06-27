$(function() {
  var body = $('body');
  var sidebar = $('.booking-widget');
  var iframe = sidebar.find("iframe");
  var iframeURL = iframe.data('url')
  var closeButton = $('.booking-widget_close');
  var showButtons = $('[show-booking-widget]');

  // Show booking sidebar events
  $.each(showButtons, function(i, item) {
    $(item).on('click', function(e) {
      e.preventDefault();

      if (!sidebar.hasClass('-show')) {
        body.addClass('overflow');
        sidebar.addClass('-show');
      }
    });
  });

  // Close sidebar event
  closeButton.on('click', function() {
    body.removeClass('overflow');
    sidebar.removeClass('-show');
  });

  // View Special Rates
  var specialRates = $('.booking-widget_special-rates');
  var specialRatesTitle = specialRates.find('.booking-widget_special-rates_title');
  var specialRatesContent = specialRates.find('.booking-widget_special-rates_content');

  specialRatesTitle.on('click', function() {
    $(this).toggleClass('-show');
    specialRatesContent.stop().slideToggle(400);
  });



  // TODO
  $(document).on('click.acord', '.booking-widget_accord_toggler', function() {
    var $this = $(this);

    $this.toggleClass('-show');

    $this
      .siblings('.booking-widget_accord_content')
      .stop()
      .slideToggle(200);
  });
});
