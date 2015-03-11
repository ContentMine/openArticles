/**
 * Highwire OpenURL
 *
 * Copyright (c) HighWire Press, Inc
 * This software is open-source licensed under the GNU Public License Version 2
 * or later. The full license is available in the LICENSE.TXT file at the root
 * of this repository.
 */

(function ($) {
  Drupal.behaviors.highwire_openurl = { attach: function (context, settings) {
    if ($('.cit-ref-sprinkles-open-url').length > 0) {
      // Get the insitutional OpenURL branding data
      $.getJSON(
        Drupal.settings.basePath + 'highwire/openurl_branding/' + Drupal.settings.highwire.nid,
        function(data){
          if(data){
            // Add to Drupal.settings in case we have another use for it
            Drupal.settings.highwireOpenurl = data;

            // Not all journals have OpenURL implementations
            if (data.base_url === null) {
              $('.cit-ref-sprinkles-open-url').hide();
            } else {
              // Update each link to show institutional branding
              $('.cit-ref-sprinkles-open-url').each(function(){
                $(this).once('insertImage',function(){
                  var branding = Drupal.settings.highwireOpenurl;

                  $(this).attr('href', $(this).attr('href').replace("{openurl}", Drupal.settings.basePath + 'highwire/openurl'));
                  var openurl_link = $(this).attr('href') + '&redirect_url=' + branding.base_url;
                  openurl_link = decodeURIComponent(openurl_link.replace(/\+/g,  " "));
                  $(this).attr('href', decodeURIComponent(openurl_link));
                  $(this).text(branding.link_text);
                  if(branding.image){
                    $(this).prepend('<img src="' + branding.image + '"/>');
                  }
                });
              });
            }
          }
        }
      );
    }
  }}
})(jQuery);
;
