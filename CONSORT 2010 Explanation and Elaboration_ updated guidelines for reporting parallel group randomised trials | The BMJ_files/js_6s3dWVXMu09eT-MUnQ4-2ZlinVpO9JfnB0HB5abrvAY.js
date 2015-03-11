/**
 * Highwire AT Symbol
 *
 * Copyright (c) 2010-2011 Board of Trustees, Leland Stanford Jr. University
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
(function ($) {
  Drupal.behaviors.myCustomJS = {
    attach: function(context, settings) {
      $('.highwire-markup .em-addr', context).each(function() {
        var replaced = $(this).html().replace('\{at\}','@');
        var replaced = "<a href='mailto:" + replaced + "'>" + replaced + "</a>";
        $(this).html(replaced);
      });
    }
  };
})(jQuery);
;
/**
 * Highwire Article References pop up
 *
 * Copyright (c) 2010-2011 Board of Trustees, Leland Stanford Jr. University
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
(function ($) {
  Drupal.behaviors.articleRefPopup = {
    attach: function(context, settings) {
      $('a.xref-bibr, a.xref-ref', context).once('article-ref-popup', function() {

        if( $('a' + $(this).attr('href')).length )  {
          $(this).attr('rel', $(this).attr('href') + "~.ref-cit");

          $(this).cluetip({
            onActivate: function(event) {
              // Disable for mobile
              var activate = true;
              if (Drupal.highwireResponsive) {
                var currentLayout = Drupal.highwireResponsive.getCurrentLayout();
                activate = currentLayout !== 'mobile' ? true : false;
              }
              return activate;
            },
            local: true,
            showTitle: false,
            width: '650px',
            hideLocal: false,
            sticky: true,
            mouseOutClose: 'both',
            closePosition: 'none',
            dropShadow: false,
            cluetipClass: 'article-ref-popup'
          });
        }
        else {
          $(this).addClass( "hw-no-refrence");
        }

      });
    }
  };
})(jQuery);
;
/**
 * Highwire AT Symbol
 *
 * Copyright (c) 2010-2011 Board of Trustees, Leland Stanford Jr. University
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
(function ($) {
  Drupal.behaviors.highwireTablesMarkupProcessor = {
    attach: function(context, settings) {
      $('a.table-expand-inline', context).once('highwireTablesMarkupProcessor', function() {
        $(this, context).each(function() {
          var $caption, captionHTML;
          var self = this;
          var toggle = true;

          // find the tables those does not have captions :)
          $(self, context).each(function(){
            var $caption_temp;
            $caption_temp = $(self).closest('.table');

            if($caption_temp.find('.table-caption').length == 0) {
              $caption_temp.append( "<div class='table-caption'> &nbsp;</div>" );
              Drupal.attachBehaviors($caption_temp[0]);
            }
          });

          $(self).click(function(event) {
            event.preventDefault();
            if (toggle) {
              toggle = false;
              $(self).closest('.table').addClass('table-expand-inline');
              $caption = $(self).closest('.table').find('.table-caption');
              captionHTML = $caption.html();
              $caption.load($(this).data('table-url'), function () {
                $(self).html('Collapse inline');
                Drupal.attachBehaviors($caption[0]);
              });
            }
            else {
            	$(self).closest('.table').removeClass('table-expand-inline');
              $caption.html(captionHTML);
              toggle = true;
              $(self).html('View inline');
            }
          });
        });
        /**
         * Added this colorbox calling function as AJAX tabs naigation holds
         * poping up data into model
         */
        $('a.table-expand-popup', context).each(function() {
          cbsettings = $.extend(settings.colorbox, {title: false});
          $(this).colorbox(cbsettings);
        });
      });
    }
  };

  // Attach drupal behaviors to colorbox loading
  $(document).bind('cbox_complete', function() {
    if (colorbox) {
      Drupal.attachBehaviors($(colorbox)[0]);
    }
  });
})(jQuery);
;
/**
 * Highwire Author Affiliates
 *
 * Copyright (c) 2010-2011 Board of Trustees, Leland Stanford Jr. University
 * This software is open-source licensed under the GNU Public License Version 2 or later
 * The full license is available in the LICENSE.TXT file at the root of this repository
 */
 (function ($) {
  Drupal.behaviors.bmjAuthorAffiliatesMarkupProcessor = {
    attach: function (context, settings) {
      $('.article .contributors:last ol.affiliation-list', context).once('bmjAuthorAffiliatesMarkupProcessor', function() {
        $(this).hide();
        $('<ol class="affiliation-list-reveal"><a href="#" class="view-more">Author affiliations</a></ol>').insertBefore($(this));
        $('.article .contributors:last ol.affiliation-list-reveal').click(function() {
          $(this).next('ol.affiliation-list').toggle();
          return false;
        });
      });

      /**
       * script to enable affiliation jump
       * this is closed couple with above code
       */
      $('a.xref-aff', context).once('bmjAuthorAffiliatesMarkupProcessor', function() {
        $(this).click(function() {
          var $affiliation_list;
          $affiliation_list = $('.article .contributors:last ol.affiliation-list-reveal').next('ol.affiliation-list');
          var display = $affiliation_list.css('display');
          if (display == 'none') {
            $affiliation_list.show();
          }
        });
      });
    }
  };
})(jQuery);
;
