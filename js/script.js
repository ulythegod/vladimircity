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

    var picId = getPictureId();
    
    if (picId) {
        setPicture(picId);
    }
};