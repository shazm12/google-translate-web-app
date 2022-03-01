

const sourceAns = document.getElementById("sourceAns");
const targetAns = document.getElementById("targetAns");



async function Translate() {
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;
    const text = document.getElementById("Text").value;
    const url = "http://localhost:3000/translate";

    console.log(sourceLang, targetLang, text);
    $.post("http://localhost:3000/translate", 
    {
        sourceLang: sourceLang,
        targetLang: targetLang,
        text: text
    },
    function (data, status) {
        sourceAns.innerHTML = `${text}`;
        targetAns.innerHTML = `${data[0].trans}`
        console.log(data[0]);
    })
    

}