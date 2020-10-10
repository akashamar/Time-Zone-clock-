//Clock
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
//Digital Clock
const hour = document.querySelector('.dh');
const minut = document.querySelector('.dm');
const sec = document.querySelector('.ds');
//time zone
const timeZone = document.querySelector('.timezone');
//date
const date = document.querySelector('.date');
const calender=()=>{
    let d = new Date();

    d = d.toString()
    d = d.split(" ")
    d = d.slice(0,4)
    let r = ''
    for (let letter of d){
        r += letter + " ";
    }

    date.innerHTML = r;
}

//clock
const setClock=()=>{
    let day = new Date(); 
    let ss = (day.getSeconds()) / 60;
    let mm = (ss+day.getMinutes()) / 60;
    let hh = (mm+day.getHours()) / 12;
    
    setRotation(sc,ss);
    setRotation(mn,mm);
    setRotation(hr,hh);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotate',rotationRatio * 360)
}

//Digital Clock
const digClock=()=>{
    let day = new Date();
    let hhh = day.getHours();
    let mmm = day.getMinutes();
    let sss = day.getSeconds();
    // let ddd = day.getDay();
    if(hhh < 10){
        hhh = '0' + hhh;
    }
    if(mmm < 10){
        mmm = '0' + mmm;
    }
    if(sss < 10){
        sss = '0' + sss;
    }

    hour.innerHTML = hhh;
    minut.innerHTML = mmm;
    sec.innerHTML = sss;
    
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotate',rotationRatio * 360)
}

const zoneDig = (timeChange) =>{
    let day = new Date();

    let offset = day.getTimezoneOffset();
    day.setMinutes(day.getMinutes()+offset);

    day.setMinutes(day.getMinutes()+timeChange);

    let hhh = day.getHours();
    let mmm = day.getMinutes();
    let sss = day.getSeconds();

    if(hhh < 10){
        hhh = '0' + hhh;
    }
    if(mmm < 10){
        mmm = '0' + mmm;
    }
    if(sss < 10){
        sss = '0' + sss;
    }

    hour.innerHTML = hhh;
    minut.innerHTML = mmm;
    sec.innerHTML = sss;
}

const zoneCalender=(timeChange)=>{
    let day = new Date();

    let offset = day.getTimezoneOffset();
    day.setMinutes(day.getMinutes()+offset);

    day.setMinutes(day.getMinutes()+timeChange);

    day = day.toString()
    day = day.split(" ")
    day = day.slice(0,4)
    let r = ''
    for (let letter of day){
        r += letter + " ";
    }

    date.innerHTML = r;
}

let allInervals = []
//time zone
const changeCountry=(e)=>{

    allInervals.forEach(clearInterval);

    clearInterval(setint);
    clearInterval(setint2);
    clearInterval(setint3);

    const zoneClock=(timeChange)=>{
        let day = new Date();

        let offset = day.getTimezoneOffset();
        day.setMinutes(day.getMinutes()+offset);

        day.setMinutes(day.getMinutes()+ timeChange);

        let ss = (day.getSeconds()) / 60;
        let mm = (ss+day.getMinutes()) / 60;
        let hh = (mm+day.getHours()) / 12;    

        setRotation(sc,ss);
        setRotation(mn,mm);
        setRotation(hr,hh);
    }





    switch(e.target.value){
        case "01":
        // india
        let timeChange01 = 5.5*60            
        zoneDig(timeChange01);
        zoneClock(timeChange01);
        zoneCalender(timeChange01);
        let tci01 =setInterval(()=>zoneClock(timeChange01),1000);
        let tci02 = setInterval(()=>zoneDig(timeChange01),1000);
        let tci03 =setInterval(()=>zoneCalender(timeChange01),1000);

        allInervals.push(tci01,tci02,tci03);
        break;

        case "1":
            // afg

            let  timeChange = 4.5*60            
            zoneDig(timeChange);
            zoneClock(timeChange);
            zoneCalender(timeChange);
            let tcA1=setInterval(()=>zoneClock(timeChange),1000);
            let tcA2=setInterval(()=>zoneDig(timeChange),1000);
            let tcA3=setInterval(()=>zoneCalender(timeChange),1000);

            allInervals.push(tcA1,tcA2,tcA3);
            break;

        case "2":
            // aus
            let timeChange1 = 10*60            
            zoneDig(timeChange1);
            zoneClock(timeChange1);
            zoneCalender(timeChange1);
            let tcAu1 =setInterval(()=>zoneClock(timeChange1),1000);
            let tcAu2 = setInterval(()=>zoneDig(timeChange1),1000);
            let tcAu3 =setInterval(()=>zoneCalender(timeChange1),1000);

            allInervals.push(tcAu1,tcAu2,tcAu3);
            break;

        case "3":
            // bang
            let timeChange2 = 6*60            
            zoneDig(timeChange2);
            zoneClock(timeChange2);
            zoneCalender(timeChange2);
            let tcb1 =setInterval(()=>zoneClock(timeChange2),1000);
            let tcb2 = setInterval(()=>zoneDig(timeChange2),1000);
            let tcb3 =setInterval(()=>zoneCalender(timeChange2),1000);

            allInervals.push(tcb1,tcb2,tcb3);
            break;

        case "4":
            // brazil
            let timeChange3 = -3*60            
            zoneDig(timeChange3);
            zoneClock(timeChange3);
            zoneCalender(timeChange3);
            let tcbr1 =setInterval(()=>zoneClock(timeChange3),1000);
            let tcbr2 = setInterval(()=>zoneDig(timeChange3),1000);
            let tcbr3 =setInterval(()=>zoneCalender(timeChange3),1000);

            allInervals.push(tcbr1,tcbr2,tcbr3);
            break;

        case "5":
            // brunei
            let timeChange4 = 8*60            
            zoneDig(timeChange4);
            zoneClock(timeChange4);
            zoneCalender(timeChange4);
            let tcbru1 =setInterval(()=>zoneClock(timeChange4),1000);
            let tcbru2 = setInterval(()=>zoneDig(timeChange4),1000);
            let tcbru3 =setInterval(()=>zoneCalender(timeChange4),1000);

            allInervals.push(tcbru1,tcbru2,tcbru3);
            break;

        case "6":
            // china
            let timeChange5 = 8*60            
            zoneDig(timeChange5);
            zoneClock(timeChange5);
            zoneCalender(timeChange5);
            let tcc1 =setInterval(()=>zoneClock(timeChange5),1000);
            let tcc2 = setInterval(()=>zoneDig(timeChange5),1000);
            let tcc3 =setInterval(()=>zoneCalender(timeChange5),1000);

            allInervals.push(tcc1,tcc2,tcc3);
            break;
        
        case "7":
            // colombia
            let timeChange6 = -5*60            
            zoneDig(timeChange6);
            zoneClock(timeChange6);
            zoneCalender(timeChange6);
            let tccb1 =setInterval(()=>zoneClock(timeChange6),1000);
            let tccb2 = setInterval(()=>zoneDig(timeChange6),1000);
            let tccb3 =setInterval(()=>zoneCalender(timeChange6),1000);

            allInervals.push(tccb1,tccb2,tccb3);
            break;

        case "8":
        // finland
        let timeChange7 = 3*60            
        zoneDig(timeChange7);
        zoneClock(timeChange7);
        zoneCalender(timeChange7);
        let tcf1 =setInterval(()=>zoneClock(timeChange7),1000);
        let tcf2 = setInterval(()=>zoneDig(timeChange7),1000);
        let tcf3 =setInterval(()=>zoneCalender(timeChange7),1000);

        allInervals.push(tcf1,tcf2,tcf3);
        break;

        case "9":
            // germany
            let timeChange8 = 2*60            
            zoneDig(timeChange8);
            zoneClock(timeChange8);
            zoneCalender(timeChange8);
            let tcg1 =setInterval(()=>zoneClock(timeChange8),1000);
            let tcg2 = setInterval(()=>zoneDig(timeChange8),1000);
            let tcg3 =setInterval(()=>zoneCalender(timeChange8),1000);

            allInervals.push(tcg1,tcg2,tcg3);
            break;

        case "10":
        // hong kong
        let timeChange9 = 8*60            
        zoneDig(timeChange9);
        zoneClock(timeChange9);
        zoneCalender(timeChange9);
        let tch1 =setInterval(()=>zoneClock(timeChange9),1000);
        let tch2 = setInterval(()=>zoneDig(timeChange9),1000);
        let tch3 =setInterval(()=>zoneCalender(timeChange9),1000);

        allInervals.push(tch1,tch2,tch3);
        break;

        case "11":
        // india
        let timeChange10 = 5.5*60            
        zoneDig(timeChange10);
        zoneClock(timeChange10);
        zoneCalender(timeChange10);
        let tci1 =setInterval(()=>zoneClock(timeChange10),1000);
        let tci2 = setInterval(()=>zoneDig(timeChange10),1000);
        let tci3 =setInterval(()=>zoneCalender(timeChange10),1000);

        allInervals.push(tci1,tci2,tci3);
        break;

        case "12":
        // indones
        let timeChange11 = 7*60            
        zoneDig(timeChange11);
        zoneClock(timeChange11);
        zoneCalender(timeChange11);
        let tcid1 =setInterval(()=>zoneClock(timeChange11),1000);
        let tcid2 = setInterval(()=>zoneDig(timeChange11),1000);
        let tcid3 =setInterval(()=>zoneCalender(timeChange11),1000);

        allInervals.push(tcid1,tcid2,tcid3);
        break;

        case "13":
        // iran
        let timeChange12 = 3.5*60            
        zoneDig(timeChange12);
        zoneClock(timeChange12);
        zoneCalender(timeChange12);
        let tcir1 =setInterval(()=>zoneClock(timeChange12),1000);
        let tcir2 = setInterval(()=>zoneDig(timeChange12),1000);
        let tcir3 =setInterval(()=>zoneCalender(timeChange12),1000);

        allInervals.push(tcir1,tcir2,tcir3);
        break;

        case "14":
        // iraq
        let timeChange13 = 3*60            
        zoneDig(timeChange13);
        zoneClock(timeChange13);
        zoneCalender(timeChange13);
        let tcira1 =setInterval(()=>zoneClock(timeChange13),1000);
        let tcira2 = setInterval(()=>zoneDig(timeChange13),1000);
        let tcira3 =setInterval(()=>zoneCalender(timeChange13),1000);

        allInervals.push(tcira1,tcira2,tcira3);
        break;

        case "15":
        // israel
        let timeChange14 = 3*60            
        zoneDig(timeChange14);
        zoneClock(timeChange14);
        zoneCalender(timeChange14);
        let tcis1 =setInterval(()=>zoneClock(timeChange14),1000);
        let tcis2 = setInterval(()=>zoneDig(timeChange14),1000);
        let tcis3 =setInterval(()=>zoneCalender(timeChange14),1000);

        allInervals.push(tcis1,tcis2,tcis3);
        break;

        case "16":
        // italy
        let timeChange15 = 2*60            
        zoneDig(timeChange15);
        zoneClock(timeChange15);
        zoneCalender(timeChange15);
        let tcit1 =setInterval(()=>zoneClock(timeChange15),1000);
        let tcit2 = setInterval(()=>zoneDig(timeChange15),1000);
        let tcit3 =setInterval(()=>zoneCalender(timeChange15),1000);

        allInervals.push(tcit1,tcit2,tcit3);
        break;

        case "17":
        // jamaika
        let timeChange16 = -5*60            
        zoneDig(timeChange16);
        zoneClock(timeChange16);
        zoneCalender(timeChange16);
        let tcj1 =setInterval(()=>zoneClock(timeChange16),1000);
        let tcj2 = setInterval(()=>zoneDig(timeChange16),1000);
        let tcj3 =setInterval(()=>zoneCalender(timeChange16),1000);

        allInervals.push(tcj1,tcj2,tcj3);
        break;

        case "18":
        // japan
        let timeChange17 = 9*60            
        zoneDig(timeChange17);
        zoneClock(timeChange17);
        zoneCalender(timeChange17);
        let tcja1 =setInterval(()=>zoneClock(timeChange17),1000);
        let tcja2 = setInterval(()=>zoneDig(timeChange17),1000);
        let tcja3 =setInterval(()=>zoneCalender(timeChange17),1000);

        allInervals.push(tcja1,tcja2,tcja3);
        break;

        case "19":
        // kenya
        let timeChange18 = 3*60            
        zoneDig(timeChange18);
        zoneClock(timeChange18);
        zoneCalender(timeChange18);
        let tck1 =setInterval(()=>zoneClock(timeChange18),1000);
        let tck2 = setInterval(()=>zoneDig(timeChange18),1000);
        let tck3 =setInterval(()=>zoneCalender(timeChange18),1000);

        allInervals.push(tck1,tck2,tck3);
        break;

        case "20":
        // mixico
        let timeChange19 = -5*60            
        zoneDig(timeChange19);
        zoneClock(timeChange19);
        zoneCalender(timeChange19);
        let tcm1 =setInterval(()=>zoneClock(timeChange19),1000);
        let tcm2 = setInterval(()=>zoneDig(timeChange19),1000);
        let tcm3 =setInterval(()=>zoneCalender(timeChange19),1000);

        allInervals.push(tcm1,tcm2,tcm3);
        break;

        case "21":
        // mongolia
        let timeChange20 = 8*60            
        zoneDig(timeChange20);
        zoneClock(timeChange20);
        zoneCalender(timeChange20);
        let tcmo1 =setInterval(()=>zoneClock(timeChange20),1000);
        let tcmo2 = setInterval(()=>zoneDig(timeChange20),1000);
        let tcmo3 =setInterval(()=>zoneCalender(timeChange20),1000);

        allInervals.push(tcmo1,tcmo2,tcmo3);
        break;

        case "22":
        // mynmar
        let timeChange21 = 6.5*60            
        zoneDig(timeChange21);
        zoneClock(timeChange21);
        zoneCalender(timeChange21);
        let tcmy1 =setInterval(()=>zoneClock(timeChange21),1000);
        let tcmy2 = setInterval(()=>zoneDig(timeChange21),1000);
        let tcmy3 =setInterval(()=>zoneCalender(timeChange21),1000);

        allInervals.push(tcmy1,tcmy2,tcmy3);
        break;

        case "23":
        // nepal
        let timeChange22 = 5.75*60            
        zoneDig(timeChange22);
        zoneClock(timeChange22);
        zoneCalender(timeChange22);
        let tcn1 =setInterval(()=>zoneClock(timeChange22),1000);
        let tcn2 = setInterval(()=>zoneDig(timeChange22),1000);
        let tcn3 =setInterval(()=>zoneCalender(timeChange22),1000);

        allInervals.push(tcn1,tcn2,tcn3);
        break;

        case "24":
        // netherland
        let timeChange24 = 2*60            
        zoneDig(timeChange24);
        zoneClock(timeChange24);
        zoneCalender(timeChange24);
        let tcne1 =setInterval(()=>zoneClock(timeChange24),1000);
        let tcne2 = setInterval(()=>zoneDig(timeChange24),1000);
        let tcne3 =setInterval(()=>zoneCalender(timeChange24),1000);

        allInervals.push(tchne1,tcne2,tcne3);
        break;

        case "25":
        // nigeria
        let timeChange25 = 1*60            
        zoneDig(timeChange25);
        zoneClock(timeChange25);
        zoneCalender(timeChange25);
        let tcni1 =setInterval(()=>zoneClock(timeChange25),1000);
        let tcni2 = setInterval(()=>zoneDig(timeChange25),1000);
        let tcni3 =setInterval(()=>zoneCalender(timeChange25),1000);

        allInervals.push(tcni1,tcni2,tcni3);
        break;

        case "26":
        // pakistan
        let timeChange26 = 5*60            
        zoneDig(timeChange26);
        zoneClock(timeChange26);
        zoneCalender(timeChange26);
        let tcp1 =setInterval(()=>zoneClock(timeChange26),1000);
        let tcp2 = setInterval(()=>zoneDig(timeChange26),1000);
        let tcp3 =setInterval(()=>zoneCalender(timeChange26),1000);

        allInervals.push(tcp1,tcp2,tcp3);
        break;

        case "27":
        // panama
        let timeChange27 = -5*60            
        zoneDig(timeChange27);
        zoneClock(timeChange27);
        zoneCalender(timeChange27);
        let tcpa1 =setInterval(()=>zoneClock(timeChange27),1000);
        let tcpa2 = setInterval(()=>zoneDig(timeChange27),1000);
        let tcpa3 =setInterval(()=>zoneCalender(timeChange27),1000);

        allInervals.push(tcpa1,tcpa2,tcpa3);
        break;

        case "28":
        // phillipins
        let timeChange28 = 8*60            
        zoneDig(timeChange28);
        zoneClock(timeChange28);
        zoneCalender(timeChange28);
        let tcph1 =setInterval(()=>zoneClock(timeChange28),1000);
        let tcph2 = setInterval(()=>zoneDig(timeChange28),1000);
        let tcph3 =setInterval(()=>zoneCalender(timeChange28),1000);

        allInervals.push(tcph1,tcph2,tcph3);
        break;

        case "29":
        // poland
        let timeChange29 = 2*60            
        zoneDig(timeChange29);
        zoneClock(timeChange29);
        zoneCalender(timeChange29);
        let tcpo1 =setInterval(()=>zoneClock(timeChange29),1000);
        let tcpo2 = setInterval(()=>zoneDig(timeChange29),1000);
        let tcpo3 =setInterval(()=>zoneCalender(timeChange29),1000);

        allInervals.push(tcpo1,tcpo2,tcpo3);
        break;

        case "30":
        // russia
        let timeChange30 = 3*60            
        zoneDig(timeChange30);
        zoneClock(timeChange30);
        zoneCalender(timeChange30);
        let tcr1 =setInterval(()=>zoneClock(timeChange30),1000);
        let tcr2 = setInterval(()=>zoneDig(timeChange30),1000);
        let tcr3 =setInterval(()=>zoneCalender(timeChange30),1000);

        allInervals.push(tcr1,tcr2,tcr3);
        break;

        case "31":
        // saint martin
        let timeChange31 = -4*60            
        zoneDig(timeChange31);
        zoneClock(timeChange31);
        zoneCalender(timeChange31);
        let tcs1 =setInterval(()=>zoneClock(timeChange31),1000);
        let tcs2 = setInterval(()=>zoneDig(timeChange31),1000);
        let tcs3 =setInterval(()=>zoneCalender(timeChange31),1000);

        allInervals.push(tcs1,tcs2,tcs3);
        break;

        case "32":
        // singapore
        let timeChange32 = 8*60            
        zoneDig(timeChange32);
        zoneClock(timeChange32);
        zoneCalender(timeChange32);
        let tcsi1 =setInterval(()=>zoneClock(timeChange32),1000);
        let tcsi2 = setInterval(()=>zoneDig(timeChange32),1000);
        let tcsi3 =setInterval(()=>zoneCalender(timeChange32),1000);

        allInervals.push(tcsi1,tcsi2,tcsi3);
        break;

        case "33":
        // south africa
        let timeChange33 = 2*60            
        zoneDig(timeChange33);
        zoneClock(timeChange33);
        zoneCalender(timeChange33);
        let tcso1 =setInterval(()=>zoneClock(timeChange33),1000);
        let tcso2 = setInterval(()=>zoneDig(timeChange33),1000);
        let tcso3 =setInterval(()=>zoneCalender(timeChange33),1000);

        allInervals.push(tcso1,tcso2,tcso3);
        break;

        case "34":
        // south korea
        let timeChange34 = 9*60            
        zoneDig(timeChange34);
        zoneClock(timeChange34);
        zoneCalender(timeChange34);
        let tcsou1 =setInterval(()=>zoneClock(timeChange34),1000);
        let tcsou2 = setInterval(()=>zoneDig(timeChange34),1000);
        let tcsou3 =setInterval(()=>zoneCalender(timeChange34),1000);

        allInervals.push(tcsou1,tcsou2,tcsou3);
        break;

        case "35":
        //spain
        let timeChange35 = 2*60            
        zoneDig(timeChange35);
        zoneClock(timeChange35);
        zoneCalender(timeChange35);
        let tcsp1 =setInterval(()=>zoneClock(timeChange35),1000);
        let tcsp2 = setInterval(()=>zoneDig(timeChange35),1000);
        let tcsp3 =setInterval(()=>zoneCalender(timeChange35),1000);

        allInervals.push(tcsp1,tcsp2,tcsp3);
        break;

        case "36":
        // swizerland
        let timeChange36 = 2*60            
        zoneDig(timeChange36);
        zoneClock(timeChange36);
        zoneCalender(timeChange36);
        let tcsw1 =setInterval(()=>zoneClock(timeChange36),1000);
        let tcsw2 = setInterval(()=>zoneDig(timeChange36),1000);
        let tcsw3 =setInterval(()=>zoneCalender(timeChange36),1000);

        allInervals.push(tcsw1,tcsw2,tcsw3);
        break;

        case "37":
        //thailand
        let timeChange37 = 7*60            
        zoneDig(timeChange37);
        zoneClock(timeChange37);
        zoneCalender(timeChange37);
        let tct1 =setInterval(()=>zoneClock(timeChange37),1000);
        let tct2 = setInterval(()=>zoneDig(timeChange37),1000);
        let tct3 =setInterval(()=>zoneCalender(timeChange37),1000);

        allInervals.push(tct1,tct2,tct3);
        break;

        case "38":
        //ukraine
        let timeChange38 = 3*60            
        zoneDig(timeChange38);
        zoneClock(timeChange38);
        zoneCalender(timeChange38);
        let tcu1 =setInterval(()=>zoneClock(timeChange38),1000);
        let tcu2 = setInterval(()=>zoneDig(timeChange38),1000);
        let tcu3 =setInterval(()=>zoneCalender(timeChange38),1000);

        allInervals.push(tcu1,tcu2,tcu3);
        break;

        case "39":
        // united kingdom
        let timeChange39 = 1*60            
        zoneDig(timeChange39);
        zoneClock(timeChange39);
        zoneCalender(timeChange39);
        let tcun1 =setInterval(()=>zoneClock(timeChange39),1000);
        let tcun2 = setInterval(()=>zoneDig(timeChange39),1000);
        let tcun3 =setInterval(()=>zoneCalender(timeChange39),1000);

        allInervals.push(tcun1,tcun2,tcun3);
        break;

        case "40":
        // vetnam
        let timeChange40 = 7*60            
        zoneDig(timeChange40);
        zoneClock(timeChange40);
        zoneCalender(timeChange40);
        let tcv1 =setInterval(()=>zoneClock(timeChange40),1000);
        let tcv2 = setInterval(()=>zoneDig(timeChange40),1000);
        let tcv3 =setInterval(()=>zoneCalender(timeChange40),1000);

        allInervals.push(tcv1,tcv2,tcv3);
        break;

        case "41":
        // zimbabwe
        let timeChange41 = 2*60            
        zoneDig(timeChange41);
        zoneClock(timeChange41);
        zoneCalender(timeChange41);
        let tcz1 =setInterval(()=>zoneClock(timeChange41),1000);
        let tcz2 = setInterval(()=>zoneDig(timeChange41),1000);
        let tcz3 =setInterval(()=>zoneCalender(timeChange41),1000);

        allInervals.push(tcz1,tcz2,tcz3);
        break;
    }  



}

timeZone.addEventListener('click',changeCountry);

digClock();
setClock();
calender();
let setint=setInterval(setClock,1000);
let setint2=setInterval(digClock,1000);
let setint3=setInterval(calender,1000);