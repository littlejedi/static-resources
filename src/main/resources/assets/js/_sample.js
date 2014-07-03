/* Javascript for presentation panel */
/* You may delete this */

var isHidden = false;

jQuery('#layout-style option:first-child').attr('selected', true);
jQuery('#header-style option:first-child').attr('selected', true);
jQuery('#header-type option:first-child').attr('selected', true);

jQuery('.options-toggle').on('click', function() {
    if (isHidden) {
        jQuery('.options-panel').removeClass('options-hidden');
        jQuery('.options-panel').addClass('options-shown');

        isHidden = false;
    }
    else {
        jQuery('.options-panel').removeClass('options-shown');
        jQuery('.options-panel').addClass('options-hidden');

        isHidden = true;
    }
});

jQuery('#header-style').change(function() {
    var value = jQuery(this).val();
    var header = jQuery('header');

    if (value == 'corporate') {
        header.addClass('corporate-header');
    }
    else {
        header.removeClass('corporate-header');
    }
});

jQuery('#header-type').change(function() {
    var value = jQuery(this).val();
    var header = jQuery('#header-container');

    if (value == 'normal') {
        header.removeClass('navbar-fixed-top');
        header.addClass('navbar-normal-top');
    }
    else {
        header.removeClass('navbar-normal-top');
        header.addClass('navbar-fixed-top');
    }
});

jQuery('#layout-style').change(function() {
    var value = jQuery(this).val();
    var layout = jQuery('#main');

    if (value == 'boxed') {
        layout.removeClass('wide');
        layout.addClass('boxed');
    }
    else {
        layout.removeClass('boxed');
        layout.addClass('wide');
    }
});

jQuery('.pattern-sample').on('click', function() {
    var patternFile = jQuery(this).attr('data-sample');

    jQuery('body').css({
        backgroundImage: 'url(styles/patterns/' + patternFile + ')'
    });
});