  $('.header-slider').coreSlider({
        sliderSelector: '.header-slider_list',                    // List selector (all items are inside this container)
        viewportSelector: '.header-slider_viewport',              // Viewport selector
        itemSelector: '.header-slider_item',
        controlNavSelector: '.header-slider_control-nav',         // Control navigation container selector (inside will be created dots items)
        controlNavItemSelector: 'header-slider_control-nav-item',
        controlNavEnabled: true
  });

  $('.feature-slider').coreSlider({
        sliderSelector: '.feature-slider_list',                    // List selector (all items are inside this container)
        viewportSelector: '.feature-slider_viewport',              // Viewport selector
        itemSelector: '.feature-slider_item',
        controlNavSelector: '.feature-slider_control-nav',         // Control navigation container selector (inside will be created dots items)
        controlNavItemSelector: 'feature-slider_control-nav-item',
        activeClass: 'feature-slider_control-nav-item_active',
        controlNavEnabled: true
  });
