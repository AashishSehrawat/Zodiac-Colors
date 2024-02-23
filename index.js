const zodiac = document.getElementById("zodiac");

const body = document.getElementsByTagName("body")[0];

const backgroundColorChange = ()=>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor="#fc0303";
            break;
        case "tarus":
            body.style.backgroundColor="blue";
            break;
        case "gemini":
            body.style.backgroundColor="#82E88C";
            break;
        case "cancer":
            body.style.backgroundColor="#FF6666";
            break;
        case "leo":
            body.style.backgroundColor="#99FFFF";
            break;
        case "virgo":
            body.style.backgroundColor="#0000FF";
            break;
        case "labra":
            body.style.backgroundColor="#CC0066";
            break;
        case "scorpio":
            body.style.backgroundColor="#66FFFF";
            break;
        case "sagittarius":
            body.style.backgroundColor="#660000";
            break;
        case "aquarius":
            body.style.backgroundColor="#9933FF";
            break;
        case "capricorn":
            body.style.backgroundColor="#E5CCFF";
            break;
        case "pisces":
            body.style.backgroundColor="#FF8000";
            break;
        default:
            body.style.backgroundColor="white";
            break;
    }
}

