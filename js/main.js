$(function () {
    const smothScrollTo = function (event) {
        event.preventDefault()
        const target = $(this).attr('href')
        const distanceToTarget = $(target).offset().top

        $('html, body').animate({
            scrollTop: distanceToTarget + 'px'
        }, 800)
    }

    const activeSmothScrollTo = (selector) => {
        $(selector).click(smothScrollTo)
    }

    activeSmothScrollTo('a[href*=panel-about]')
    activeSmothScrollTo('a[href*=panel-speakers]')
    activeSmothScrollTo('a[href*=panel-form]')
})