 $(document).ready(function() {

    /* Animations on scroll*/
    
     $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%'
    });
    
});

var listener = function () {
  var highlightedItems = document.querySelectorAll(".faq-container");

  highlightedItems.forEach(function(userItem, index) {
    userItem.addEventListener('click', function () {
      var node = document.querySelector(`.faq-content-${index}`).previousSibling
      if (document.querySelector(`.faq-content-${index}`).style.display == 'block') {
        document.querySelector(`.faq-content-${index}`).style.display = 'none'

        node.childNodes[1].classList.add('ion-ios-arrow-down')
        node.childNodes[1].classList.remove('ion-ios-arrow-up')
  
      } else {
        document.querySelector(`.faq-content-${index}`).style.display = 'block'

        node.childNodes[1].classList.add('ion-ios-arrow-up')
        node.childNodes[1].classList.remove('ion-ios-arrow-down')
      };
    })
  });
}

var faqs = document.querySelectorAll('.contact-feature');

faqs.forEach(function (item, index) {
  item.addEventListener('click', function(e) {
    var targetText = e.target.textContent;
    console.log(targetText);
    var questions = getQuestions(targetText)
    document.querySelector('.about-publications').innerHTML = getInnerHTML(targetText, questions)
    document.querySelector('.add-faq-content').innerHTML = getMobileInnerHTML(targetText, questions)
    if($(window).width() < 480) {
      modal.style.display = 'block'
    }else{
      modal.style.display = 'none'
    }
    listener()
    
  })
})

var getQuestions = function (type) {

  if (type === 'Basics') {
    return [
      'How do I change my password ?',
      'How do I sign up ?',
      'Can I remove a post ?',
      'How do reviews work ?'
    ]
  } else if (type === 'Mobile') {
    return [
      'How does syncing work ?',
      'How do I upload files from my phone or tablet ?',
      'How do I link to a file or folder ?'
    ]
  } else if (type === 'Account') {
    return [
      'How do I change my password ?',
      'How do I delete my account ?',
      'How do I change my account settings ?',
      'I forgot my password.How do I reset it ?'
    ]
  } else if (type === 'Payments') {
    return [
      'Can I have an invoice for my subscription ?',
      'Why did my credit card or PayPal payment fail ?',
      'Why does my bank statement show multiple charges for one upgrade ?'
    ]
  } else if (type === 'Privacy') {
    return [
      'Can I specify my own private key ?',
      'My files are missing! How do I get them back ?',
      'How can I access my account data ?',
      'How can I control if other search engines can link to my profile ?'
    ]
  } else if (type === 'Delivery') {
    return [
      'What should I do if my order hasn\'t been delivered yet ?',
      'How can I find your international delivery information ?',
      'Who takes care of shipping ?',
      'How do returns or refunds work ?',
      'How do I use shipping profiles ?',
      'How does your UK Next Day Delivery service work ?',
      'How does your Next Day Delivery service work ?',
      'When will my order arrive ?',
      'When will my order ship ?'
    ]
  }

}

var getInnerHTML = function (headingText, questions) {
  return `<div class="row heading-publication">
  <h5 id="publications">${headingText}</h5>
  </div>
  
  <div class="publication-box js--wp-4">

    ${questions.map( (question,index) => 
      `<div class="faq-container"><ul><li>${question}</li><i class="ion-ios-arrow-down icon-small"></i><div class="clearfix"></div></ul><h5 class="faq-content-${index}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>`
    ).join('')}
    
    </div>`
}

document.querySelector('.about-publications').innerHTML = getInnerHTML('Basics', getQuestions('Basics'))
listener();


var getMobileInnerHTML = function (headingText, questions) {
  return `
    <div>
      <h4>${headingText}</h4>
    </div>
    ${questions.map((question, index) =>
      `<div class="publication-box-mobile">
        <div>
            <ul>
                <li>${question}</li>
            </ul>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        </div>
        </div>`
    ).join('')}`
}


  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      
    }
  }