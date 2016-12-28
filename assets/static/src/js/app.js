$(document).ready(function(){

  //set a min height of the text box based on the content that's in it.
  //what is the height of outline?
  console.log($('.white-inner-container').height());

  //pull height of text to the height of its sibling img.
  // var innerContainerImgHeightLandscape = $(".white-inner-container img.landscape").height();
  // var parentsLandscape = $(".white-inner-container img.landscape")
  //                         .parents(".white-inner-container");
  // var whiteContainerPaddingLandscape = parentsLandscape.find(".white-container-padding");
  // whiteContainerPaddingLandscape.css('height', innerContainerImgHeightLandscape);

  // var innerContainerImgHeightPortfolio = $(".white-inner-container img.portfolio").height();
  // var parentsPortfolio = $(".white-inner-container img.portfolio")
  //                           .parents(".white-inner-container");
  // var whiteContainerPaddingPortfolio = parentsPortfolio.find(".white-container-padding");
  //  whiteContainerPaddingPortfolio.css('height', innerContainerImgHeightPortfolio);

  //visbox hover stuff
  $(".vis-box").hover(function(){
    var thisVisGroup = $(this).children('.description-group');
    (thisVisGroup).toggleClass('shown');
  });

});