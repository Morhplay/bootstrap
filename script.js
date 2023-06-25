$(document).ready(function () {


    let data = [
        { image: "./images/bg1.jpg", discount: "50%", amt: 1000, title: "snacks" },
        { image: "./images/bg3.jpg", discount: "50%", amt: 5000, title: "Bag" },
        { image: "./images/bg2.jpg", discount: "50%", amt: 10000, title: "Shoe" },
        { image: "./images/bg3.jpg", discount: "50%", amt: 5000, title: "Bag" },
        { image: "./images/bg3.jpg", discount: "50%", amt: 5000, title: "Bag" }

    ]

    function payment (amt){
        let handler = PaystackPop.setup({
            key: 'pk_test_cd2a82b9ac7e0cdbbc1ca62c201284ea97894a04', // Replace with your public key
            email: "text@gmail.com",
            amount: amt * 100,
            ref: '' + Math.floor((Math.random() * 1000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            // label: "Optional string that replaces customer email"
            onClose: function () {
                alert('Window closed.');
            },
            callback: function (response) {
                let message = 'Payment complete! Reference: ' + response.reference;
                alert(message);
            }
        });

        handler.openIframe()
    }








    data.map((item) => {
        let firstdiv = document.createElement("div")
        firstdiv.setAttribute("class", "col-md-4 col-12")

        let seconddiv = document.createElement("div")
        seconddiv.setAttribute("class", "card")
        firstdiv.append(seconddiv)


        let image = document.createElement("img")
        image.setAttribute("class", "card-img-top")
        image.setAttribute("src", "./images/bg1.jpg")
        seconddiv.append(image)

        let span = document.createElement("span")
        span.setAttribute("class", "badge rounded-pill text-bg-primary")
        span.innerHTML = item.discount
        seconddiv.append(span)

        let card = document.createElement("div")
        card.setAttribute("class", "card-body")
        seconddiv.append(card)

        let title = document.createElement("h4")
        title.setAttribute("class", "card-title")
        title.innerHTML = item.title
        card.append(title)


        let ctext = document.createElement("p")
        ctext.setAttribute("class", "card-text")
        ctext.innerHTML = item.amt
        card.append(ctext)

        let divbutton = document.createElement("div")
        divbutton.setAttribute("class", "card-footer")
        seconddiv.append(divbutton)



        let button = document.createElement("button")
        button.setAttribute("class", "w-100 btn btn-danger")
        divbutton.append(button)

        button.onclick = function () {
            payment(item.amt);
        }

        let iclass = document.createElement("i")
        iclass.setAttribute("class", "fa-solid fa-shopping-cart")
        button.append(iclass)


        document.querySelector(".row").appendChild(firstdiv)

    })



})