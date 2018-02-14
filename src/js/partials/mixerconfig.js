var mixer = mixitup('.portfolio__gallery', {
        animation: {
            animateResizeTargets: true,
            effectsIn: 'fade translateY(-100%)',
            effectsOut: 'fade translateY(100%)',
            reverseOut: true,
            nudge: false // Disable nudging to create a carousel-like effect
        },
        selectors: {
            target: '.portfolio__item',
            control: '.portfolio__tag'
        },
        classNames: {
            block: '',
            elementFilter: '',
            modifierActive: 'button_state_active'
        }
    });
