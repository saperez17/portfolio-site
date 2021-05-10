


ScrollOut({
    targets:['.hero-title, .fade, .skill-title, .frontend,  .profile-img, .presentation-container, .about-title, .fade1, .fade2, .fade3']
  });

hamburguerHandler = $("#burguer");
hamburguesMenu = $("#nav-links");
hamburguerHandler.click(()=>{
    hamburguerHandler.toggleClass("is-active");
    hamburguesMenu.toggleClass("is-active");
})

const tabsLi = $(".background-tabs ul li");
const divContent = $("#tab-content > div");

tabsLi.each((idx, tab)=>{
    $(tab).on("click",(e)=>{
        tabsLi.removeClass("is-active");
        $(e.currentTarget).addClass("is-active");
        const target = e.currentTarget.dataset['target'];
        
        divContent.each((idx, element)=>{
            const el = $(element)
            if(el.attr("id")==target){
                el.removeClass("is-hidden")
            }else{
                el.addClass("is-hidden")
            }
        })
    })
})

$('#submit_form_btn').click(async()=>{
    const newMessage = {
        fullname: $('input[name="fullname"]')[0].value,
        email: $('input[name="email"]')[0].value,
        content: $('textarea[name="content"]')[0].value
    };
    const res = await axios.post('http://127.0.0.1:9000/message', newMessage);
    $('.modal').addClass('is-active')
    $(window).click(()=>$('.modal').removeClass('is-active'))
})

$('#close_modal_btn').click(()=>{
    $('.modal').removeClass('is-active')
})