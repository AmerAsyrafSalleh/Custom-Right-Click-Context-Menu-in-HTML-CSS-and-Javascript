const contextMenu = document.querySelector(".wrapper");
shareMenu = contextMenu.querySelector(".share-menu");

document.addEventListener
(
    "contextmenu", e =>
    {
        e.preventDefault(); //preventing default context menu of the browser

        let x = e.offsetX, y = e.offsetY,
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = contextMenu.offsetWidth,
        cmHeight = contextMenu.offsetHeight;

        //If x is greater than window width - contextMenu width - shareMenu width, then show the share menu to the left. Else, show it to the right.
        if (x > (winWidth - cmWidth - shareMenu.offsetWidth))
        {
            shareMenu.style.left = "-200px";
        }
        else
        {
            shareMenu.style.left = "";
            shareMenu.style.right = "-200px";
        }

        //If x is greater than window width - contextMenu width then set the x value to window width - contextMenu width else set x to the offsetX. Similarly, to y. 
        x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
        y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

        contextMenu.style.left = `${x}px`;
        contextMenu.style.top = `${y}px`;
        contextMenu.style.visibility = "visible";
    }
);

//Hide the context menu on document click
document.addEventListener("click", () => contextMenu.style.visibility = "hidden");