const plantemplate = document.createElement('template');
plantemplate.innerHTML = `
    <style>
        .pay-plan{
            box-shadow: rgb(255 255 255) 0px 0px 0px 0px, rgb(0 0 0 / 30%) 0px 0px 8px;
            border-radius: 10px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: calc(100% + 100px);
            position: relative;
        }
        .pay-plan.active_plan{
            border-radius: 0px 0px 10px 10px;
        }
        .active_plan:before{
            box-sizing: border-box;
            background: rgb(0, 0, 0);
            color: rgb(255, 255, 255);
            content: 'YOUR CURRENT PLAN';
            padding: 8px 16px;
            position: absolute;
            left: 0px;
            bottom: 100%;
            width: 100%;
            border-radius: 8px 8px 0px 0px;
            text-align: left;
            text-transform: uppercase;
        }
        span.prepay{
            margin-bottom: 15px;
            border: 1px solid rgb(46, 119, 208);
            padding: 5px 10px;
            border-radius: 5px;
            color: rgb(46, 119, 208);
            font-weight: bold;
            font-size: 14px;
        }
        h5.name{
            font-size: 24px;
            font-weight: bold;
            line-height: 24px;
            margin: 0px 0px 5px;
            padding: 0px;
            letter-spacing: 0.25px;
        }
        p.price,
        p.account{
            display: block;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            margin: 0px 0px 2px;
            color: #222326;
        }
        p.account{
            margin-bottom: 20px;
        }
        hr{
            width: 100%;
            margin: 0;
        }
        ul{
            list-style: none;
            padding: 0;
            margin-top: 20px;
        }
        ul li{
            display: flex;
            margin-bottom: 5px;
        }
        .svg-box{
            display: inline-block;
            color: rgb(0, 0, 0);
            padding: 0px 10px 0px 0px;
        }
        svg{
            stroke-width: 1pt;
        }
        ul li p{
            line-height: 22px;
            list-style: none;
            margin: 0px;
            padding: 0px;
            font-size: 16px;
            color: rgb(34, 35, 38);
        }
        .black_btn{
            display: inline-block;
            margin: 40px 0;
            font-size: 14px;
            line-height: 1;
            border-radius: 50px;
            padding: 17px 48px;
            color: var(--white);
            background-color: rgb(25, 20, 20);
            border: 2px solid rgb(25, 20, 20) !important;
            transition-duration: .3s;
            border-width: 0;
            letter-spacing: 2px;
            text-transform: uppercase;
            white-space: normal;
            border-radius: 50px;
            font-weight: 700;
            cursor: pointer;
        }
        .black_btn:hover{
            transform: scale(1.04);
            background-color: rgb(83, 79, 79);
        }
        a.black_btn{
            text-align: center;
            text-decoration: none;
            position: absolute;
            bottom: 60px;
            left: 15px;
            right: 15px;
        }
        p{
            margin-top: auto;
            margin-bottom: 40px;
            color: rgb(83, 83, 83);
            font-size: 13px;
            line-height: 16px;
            font-weight: 400;
            text-align: left;
        }
        p a{
            color: rgb(83, 83, 83);
            text-decoration: underline;
        }
    </style>
    <div class="pay-plan">
        <span class="prepay"></span>
        <h5 class="name"></h5>
        <p class="price"></p>
        <p class="account"></p>
        <hr>
        <ul>
            <li>
                <div class="svg-box">
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="">
                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                    </svg>
                </div>
                <p class="o"></p>
            </li>
            <li>
                <div class="svg-box">
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="">
                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                    </svg>
                </div>
                <p class="t"></p>
            </li>
            <li>
                <div class="svg-box">
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="">
                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                    </svg>
                </div>
                <p class="th"></p>
            </li>
            <li>
                <div class="svg-box">
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="">
                        <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" fill="none" stroke="#181818"></polyline>
                    </svg>
                </div>
                <p class="f"></p>
            </li>
        </ul>   
        <a class="black_btn" href="">START USING</a>
         <p><small><a href="">*Terms and conditions</a> apply.</small></p>
    </div>
`;

class payPlan extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(plantemplate.content.cloneNode(true));

    console.log(this.getAttribute('active'));
    if(this.getAttribute('active') == "true"){
        this.shadowRoot.querySelector(".pay-plan").className += " active_plan";
    }

    let attribute = ["prepay","name","price","account","list-1","list-2","list-3","list-4","btntext","smalltesxt"];
    let element = ["span.prepay",".name",".price",".account","ul li p.o","ul li p.t","ul li p.th","ul li p.f",".black_btn","small"];

    for(let i=0; i<attribute.length; i++){
        if(attribute[i] == "list-1" || attribute[i] == "list-2"|| attribute[i] == "list-3"|| attribute[i] == "list-4"){
            if(this.getAttribute(`${attribute[i]}`) == ""){
                this.shadowRoot.querySelector(`${element[i]}`).parentNode.parentNode.removeChild(this.shadowRoot.querySelector(`${element[i]}`).parentNode);
            }else{
                this.shadowRoot.querySelector(`${element[i]}`).innerText = this.getAttribute(`${attribute[i]}`);
            }
        }else{
            if(this.getAttribute(`${attribute[i]}`) == ""){
                this.shadowRoot.querySelector(`${element[i]}`).remove();
            }else{
                this.shadowRoot.querySelector(`${element[i]}`).innerText = this.getAttribute(`${attribute[i]}`);
            }
        }
    }
    //Ne yaptığımdan tam olarak emin değilim ama oldu.
  }
}

window.customElements.define('pay-plan', payPlan);