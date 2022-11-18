// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'rpp';