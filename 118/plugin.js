(function ($) {
    $.fn.targetBlank = function () {
        var target = $(this).attr('target');
        var arraytarget = ['_blank', '_self', '_parent', '_top'];

        if (target == undefined || target == '' || jQuery.inArray(target, arraytarget) == false) {

            $(this).attr('target', '_blank');

        }

    }
})(jQuery);
