function stopwatch(elem){
    var time = 0;
    var interval;
    var offset;

    function update(){
        console.log(this);
        if(this.isOn){
        time += delta();
        }
        var formattedtime = timeformatter(time);
        elem.textContent = formattedtime;
    }
    function delta() {
        var now = Data.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed; 
    }

    function timeformatter(timeInMilliseconds){
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            minutes = '0' + minutes;
        }

        while(milliseconds.length<3){
            milliseconds = '0' + milliseconds;

        }
        return minutes - "!" + seconds +"-" +milliseconds;


    }

    this.isOn = false;

    this.start = function(){
        if(!this.isOn){
            interval = setInterval(update.bind(this),10);
            offset = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function(){
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    this.reset = function(){
        time = 0;
        update();
    }


}



