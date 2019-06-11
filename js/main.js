$(document).ready(function() {
  
    // Scroll animation, when click items in navigation bar, page scroll to related section
    $('.basicimgs').scrollClass({
        delay: 10,
        threshold: 50, 
        offsetTop: 80, 
        callback: function () { 
          console.log('Callback fired!');
        }
    });


    $("#basic").click(function(){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".winebasic").offset().top},
            'slow');
    });

    $("#region").click(function(){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".region").offset().top},
            'slow');
    });

    $("#pair").click(function(){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(".foodpairing").offset().top},
            'slow');
    });

    $("#contact").click(function(){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $("footer").offset().top},
            'slow');
    });

    $("#home").click(function(){
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $("body").offset().top},
            'slow');
    });




    // Popup pages and close, by clicking pictures the detail page will pop up
    $("#term,#term-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-terminology-popup")
    });

    $("#type,#type-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-type-popup");
    });

    $("#label,#label-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-label-popup")
        $('iframe').attr("src","https://www.youtube.com/embed/FhtxEenSPCc");
    });

    $("#beef,#beef-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-popup-beef");
    });

    $("#chicken,#chicken-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-popup-chicken");
    });

    $("#seafood,#seafood-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-popup-seafood");
    });

    $("#vege,#vege-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-popup-vege");
    });

    $("#noodle,#noodle-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-popup-noodle");
    });

    $("#dessert,#dessert-popup a").click(function(event){
        event.preventDefault();
        $("body").toggleClass("show-popup-dessert");
    });


    $('.menu-bar').click(function(){
        $('ul').toggleClass('show');
    });

    //when close the page, the video from "label/package" section will be stoped
    $("#label-popup a").click(function(event){
        event.preventDefault();
        $('iframe').attr("src","");
        // $('#video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });



    //click pictures to show detail of different wines in first section "Wine basic" second part "variety/types"
    $('.detail').click(function(){
        let type = $(this).attr('id');
        
        switch(type){
            case "riesling":
            $('#heading').html("Riesling");
            $('#description').html("Always very high in acid, when made as a table wine Rieslings can be harmoniously sweet (sweet and sour) or dry (very acidic). The wine is polarizing because some people find dry styles too acidic and sweet styles too cloying, but sweetness is always a wine making decision and not inherent to the grape.");
            $('#taste').html('Taste: Citrus (kefir lime, lemon juice) and stone-fruit (white peach, nectarine) always feature prominently, although there are also usually floral and sweet herbal elements as well.');
            $('#alternative').html('Alternative wine are (1)Moscato: Less acidic with a much more aggressively floral flavor profile. (2)Torrontés: Related to Moscato, but always in a dry style, more full-bodied and bitter');
            break;

            case "pinotGris":
            $('#heading').html("Pinot Gris");
            $('#description').html("Pinot Gris is a dry light-bodied white grape that is planted heavily in Italy, but also in France and Germany. Wines are light to middle-weight and easy drinking, often with some bitter flavor on the palate (bitter almond, quinine)");
            $('#taste').html("Taste: Delicate citrus (lime water, orange zest)  and pomaceous fruits (apple skin, pear sauce), white floral notes, and cheese rind (from lees usage)");
            $('#alternative').html("Alternative wine are (1)Soave: The grape is Garganega, but often more bruised and oxidized apple-y character, still relatively bitter. (2)Melon: The grape is Melon de Bourgogne, and the wine region is called Muscadet in France. It’s often much higher in acidity, but with heavy lees and relatively neutral flavor.[2]");
            break;

            case "sauBlanc":
            $('#heading').html("Sauvignon Blanc");
            $('#description').html("Sauvignon Blanc is a dry white grape first widely planted in France. Wines are tart, typically with herbal, “green” fruit flavors.");
            $('#taste').html("Taste: Aggressively-citrus-driven (grapefruit pith), with some exotic fruits (honeydew melon, passion fruit, kiwi) and always an herbaceous quality (grass, mint, green pepper)");
            $('#alternative').html("Alternative wine are (1)Vermentino: from Italy is less herbaceous, but with more appealing, bitter flavors (bitter almond). (2)Verdejo: from Spain is almost identical, although sometimes fuller in body.[2]");
            break;

            case "Char":
            $('#heading').html("Chardonnay");
            $('#description').html("Chardonnay is a dry full-bodied white wine that was planted in large quantities for the first time in France. When oak-aged, Chardonnay will have spicy, bourbon-y notes. Unoaked wines are lighter and zesty with apple and citrus flavors. Chardonnay is the white grape of Burgundy.");
            $('#taste').html("Taste: Yellow citrus (Meyer lemon), yellow pomaceous fruits (like yellow pear and apple), tropical fruits (banana, pineapple), and often a touch of butterscotch, vanilla or toasted caramel notes from oak");
            $('#alternative').html("Alternative wine are (1)Sémillon: More middle weight, although often with oak as well, more citrus and herbal aromatics. (2)Viognier: Often richer in body, with lots of perfumed, floral-driven aromatics when oaked. Unoaked Viognier are lighter and more zesty.[2]");
            break;

            case "pinotNoir":
            $('#heading').html("Pinot Noir");
            $('#description').html("Pinot Noir is a dry, light-bodied red that was first widely planted in France. The wines typically have higher acidity and soft a soft, smooth, low-tannin finish.");
            $('#taste').html("Taste: Very red fruited (cherry, cranberry) and red-floral (rose), often with appealing vegetal notes of beet, rhubarb, or mushroom");
            $('#alternative').html("Alternative wine are (1)Gamay: Lighter, juicier, more floral, with subtle herbal notes on the finish. Look for wines labeled “Beaujolais” from France. (2)Schiava: (Italy) A rare find from Trentino-Alto Adige with candied cherry, rose hip, and allspice notes.[2]");
            break;

            case "zinfandel":
            $('#heading').html("Zinfandel");
            $('#description').html("Zinfandel (aka Primitivo) is a medium-bodied red wine that originated in Croatia. Wines are fruit-forward and spicy with a medium length finish. Zinfandel is a red grape that may be better known in its pink variation, White Zinfandel.");
            $('#taste').html("Taste: A broad, exotic array of fruits from stone (overripe nectarine), to red (raspberry, sour cherry), to blue (plum, blueberry), to black (blackberry, boysenberry), Asian 5 Spice Powder, Sweet Tobacco");
            $('#alternative').html("Alternative wine are (1)Grenache: More middle-weight and red-fruited flavors, with the meaty and peppery qualities you get with Syrah. (2)Tempranillo: (Spain) Tempranillo has more savory cherry notes, as well as lower alcohol and body.[2]");
            break;

            case "syrah":
            $('#heading').html("Syrah");
            $('#description').html("Syrah (aka Shiraz) is a full-bodied red wine that’s heavily planted in the Rhône Valley in France and Australia. The wines have intense fruit flavors and medium-weight tannins. Syrah is commonly blended with Grenache and Mourvèdre to create the red Rhône blend. The wine often has a meaty (beef broth, jerky) quality.");
            $('#taste').html("Taste: Blueberry, plum, tobacco, cured meat, black pepper, violet");
            $('#alternative').html("Alternative wine are (1)Malbec: (Argentina) More black-fruited, often with more aggressive oak usage, less meaty, but with more coffee and chocolate flavors. (2)Petite Sirah: (United States) This grape has no genetic relation to Syrah, but has even more aggressive tannin and a fuller body.[2]");
            break;

            case "cabSauv":
            $('#heading').html("Cabernet Sauvigion");
            $('#description').html(" Cabernet Sauvignon is a full-bodied red grape first heavily planted in the Bordeaux region. Today, it’s the most popular wine variety in the world! Wines are full-bodied with bold tannins and a long persistent finish driven mostly by the higher levels of alcohol and tannin that often accompany these wines.");
            $('#taste').html("Taste: Black Cherry, Black Currant, Baking Spices, and Cedar (from oak)");
            $('#alternative').html("Alternative wine are (1)Merlot: Middle weight, lower in tannins (smoother), with a more red-fruited flavor profile. (2)Cabernet Franc:  Light to middle weight, with higher acid and more savory flavors, one of Cabernet Sauvignon’s parent grapes.[2]");
            break;

        }
        
    });

});