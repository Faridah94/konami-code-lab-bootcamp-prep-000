if (window.addEventListener) {
    var index = 0;
    var konami = [38,38,40,40,37,39,37,39,66,65,13];

    window.addEventListener("keydown", function(e){
        if (e.keyCode === konami[index])
        {
            index++; //valid key at the valid point

            if (index == konami.length)
            {
                alert("Correct");
            } else {
                alert("Keep going");
            }
        } else {
            // incorrect code restart
            index = 0;
            alert("Wrong"); 
        }
   });
}

//init();