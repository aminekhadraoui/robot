function textToSpeech() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;
    
    const english = voices.filter(e => e.lang === 'en-US');
    const voice = english && english.length > 0 ? english[0] : voices[0];
    const utter = new SpeechSynthesisUtterance();
    utter.rate = 0.5;
    utter.pitch = 0.5;
    
    /*if(document.getElementById("tex").value === "hi"){
    	utter.text = 'Hello Guys, my name is tamara fuck you amine';
    }if(document.getElementById("tex").value === "how are you"){
        utter.text = 'good thank you';
    }if(document.getElementById("tex").value === "good morning my name is afef khadraoui"){
        utter.text = 'Hi ,afef ,khadraoui ,how are you';
    }if(document.getElementById("tex").value === "good morning my name is ichraf"){
        utter.text = 'Hi ,ichraf ,how are you';
    }if(document.getElementById("tex").value === "good morning my name is soufiane"){
        utter.text = 'Hi ,soufiane,how are you';
    }*/
 var vid = document.getElementById("vid"); 
    switch (document.getElementById("tex").value){
        case "hi" :
        utter.text = 'Hello Guys,so my name is mazembi';
        break;
        case "funny fact about you":
        utter.text = 'm, m, m, m, m ,If I send you my ugly selfies, our friendship is real.'
        break;
        case "how are you" :
        utter.text = 'fine why you ask';
        break;
        case "what do you think about seif" : 
        utter.text = 'its my true love to be honest'; 
        break;
        case "if seif got into a problem whould you help him" : 
        utter.text = "seif, We are best friends. Always remember seif that if you fall, I will pick you up...after I finish laughing";
        break; 
        case "mazembi its a country not a name" : 
        utter.text = "its not your business and stop sending me message asshole";
        break;  
        case "tamara":
        utter.text = "she is, my first, love, sorry, youssef, for this but, im just a robot";
         document.getElementById("love").innerHTML = "<img src=\"lov.gif\" width=\"100px\" height=\"100px\" style=\"padding:0 40% 0 40%;\">"
        // vid.play();
        break;
        case "can you show us":
        utter.text = "Okay, malek look";
        vid.innerHTML = "<video id=\"myVideo\" controls autoplay><source src=\"1.webm\" type=\"video/webm\"></video>";
        vid.webkitRequestFullscreen();
        
        
        break;
        default :
        utter.text = "i dont care";
    }

    utter.voice = voice;
    
    window.speechSynthesis.speak(utter);

}
