class Newsletter {


    formContainer = $('#newsletter-form-container');
    successModal = $('#newsletter-confirmation-message-container');
    emailContainer = $('.email-container');
    emailError = false;


    userMail;

    constructor() {
        this.listeners();
        this.successModal.hide(); 

        // rscxtest
        // this.testSuccess();

        console.log('Newsletter 1.0');
    }

    listeners() {
        $('#newsletter-submit-btn').on('click', this.sendFormRequest.bind(this));
        $('#newsletter-confirmation-message .newsletter-btn').on('click', this.closeSuccessModal.bind(this));
        this.desactivateEnterOnInput();
    }

    openSuccessModal() {
        $('#newsletter-form-container').hide();
        $('#newsletter-confirmation-message-container').show();
    }

    sendFormRequest() {


        const userMailHTML = $('#newsletter-email-address');
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(userMailHTML.val())) {
            this.emailContainer.addClass('error');
            this.emailError = true;
            return false;
        }

        this.userMail = userMailHTML.val();

        if (this.emailError) {
            $(this.emailContainer.removeClass('error'));
            this.emailError = false;
        }

        this.setupSuccessModal();

        this.formContainer.hide();
        this.successModal.show();

        userMailHTML.val('');

    }


    setupSuccessModal() {
        $('#newsletter-user-email-address').html(this.userMail);
    }

    closeSuccessModal() {
        this.successModal.hide();
        this.formContainer.show();
    }

    desactivateEnterOnInput(){
        $('#newsletter-email-address').on('keypress', e => {
            if(e.which == 13){
                this.sendFormRequest();
                return false;
            }
            
        } )
    }


    //rscxtest
    testSuccess(){
        this.formContainer.hide();
        this.successModal.show();
    }
}

export default Newsletter;