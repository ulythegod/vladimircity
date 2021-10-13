window.onload = function(){
    function getPictureId() {
        var urlString = window.location.href;
        var url = new URL(urlString);
        var picId = url.searchParams.get("pic");

        return picId;
    }

    function setPicture(picId) {
        var src = "";

        switch (picId) {
            case "1":
                src = "images/item1full.jpg"
                break;
            case "2":
                src = "images/item2full.jpg"
                break;
            case "3":
                src = "images/item3full.jpg"
                break;
        }

        document.getElementById("picture").src = src;
    }

    function changeSeason(seasonName) {
        var src1 = "";
        var src2 = "";
        var src3 = "";
        var main = "";
        
        switch (seasonName) {
            case "winter":                
                break;
            case "spring":                
                break;
            case "summer":                
                break;
            case "fall":                
                break;
        }
    }

    var selectSeason = document.getElementsByClassName("js-select-season")[0];

    selectSeason.onchange = function() {
        var seasonValue = this.value;
        if (seasonValue != null) {

        }
    };

    var picId = getPictureId();
    
    if (picId) {
        setPicture(picId);
    }
};