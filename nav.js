
const navItems = [  
 
    { href: './index.html', text: 'Home'},
        { href: './internetArt.html', text: 'Internet Art'},
    { href: './blogs.html', text: 'Blogs'},
    { href: './contact.html', text: 'Contact' },   

];

window.addEventListener('DOMContentLoaded', (event) => {
    rendeMenu();
});

// create elements

const navElem = document.createElement("nav");
navElem.className = "menu";
const navList = document.createElement("ol");


//run the Rendermenu function
const rendeMenu = () => {
    const pathPrefix=window.location.pathname==="/WSOA4175A_2006780/"?'.':'..'
    const navBar = document.querySelector(".menu-item");

    for (let i = 0; i < navItems.length; i++) {

        let navItem = document.createElement("li");
        navItem.className = "menu-item";
        let navLink = document.createElement("a");
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;
        navItem.appendChild(navLink);


        //if subitems exists , then render them.
        let subItems = navItems[i].subItems;

        if (!!subItems && !!subItems.length) { 
            let subList = document.createElement("ol");
            subItems.forEach(subItem => {
                let subnavItem = document.createElement("li");
                let subnavLink = document.createElement("a");
                subnavItem.className = "menu-item";
                subList.className = "sub-menu";
               
                subnavLink.href = subItem.href;
                subnavLink.innerHTML = subItem.text;
                subnavItem.appendChild(subnavLink);
                subList.appendChild(subnavItem);
            });

            navItem.appendChild(subList);
        }
        // Add anchor to list item, and list item to list

        navList.appendChild(navItem);
        navElem.appendChild(navList);
    }
}

// Add list to body (or anywhere else)
window.onload = function () {
    document.body.appendChild(navElem);
}


class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <head>
        <link rel="stylesheet" href="./CSS/footer.css">
        </head>
        <svg id="circle-line">
	<rect width="100%" height="20" fill="url('#fill3')"></rect>
   <pattern x="0" y="-10" width="20" height="20" id="fill3" patternUnits="userSpaceOnUse">
      <circle cx="3" cy="3" r="3" fill="#03A062"></circle>
   </pattern>
</svg>
<div class="way">
   <div class="pacman">
      <svg class="pacman-tp">
         <path d="M90.4,45.2c0,0.1-90.4,0.1-90.4,0C0,20.2,20.2,0,45.2,0S90.4,20.2,90.4,45.2z" fill="#EC833F"/>
      </svg>
      <svg class="pacman-btm">
         <path d="M0,0c0-0.1,90.1-0.1,90.1,0c0,24.9-20.2,45-45,45S0,24.9,0,0z" fill="#EC833F"/>
      </svg>
   </div>
</div>
        `
    }
}
customElements.define('my-footer', myFooter)
