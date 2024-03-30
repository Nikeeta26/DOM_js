
/************getElementsByClassName************* */
let s = document.getElementsByClassName("oldImg");
for(let i=0;i<s.length;i++)
{
//console.dir(s[i]);
    s[i].src="assets/spiderman_img.png" ;
console.log(`value of image no. ${i} is change`);
}

/***************getElementsById*******************/
let i = document.getElementById("mainImg");
console.log(i);

/****************getElementsByTagName*************** */
let p = document.getElementsByTagName("p")[0].innerText="abc";
console.log(p);

/***************querySelector********************/
console.dir(document.querySelector("h1"));//tagname

console.log(document.querySelector("#mainImg"));

console.dir(document.querySelector(".box a"));

console.log(document.querySelectorAll('.images .oldImg'));
/***********************innerText************ */
let para = document.querySelector("#description");
console.log(para.innerText="asdfghjklwertyuiopxcvbnm,sdfghjkertyui");


/*******************innerHTML******************** */
let par = document.querySelector("#description");
console.log(para.innerHTML="asdfghjklwertyuiopxcvbnm,sdfghjkertyui");

/***********************textConten*********************** */
let pa = document.querySelector("#description");
console.log(para.textContent="asdfghjklwertyuiopxcvbnm,sdfghjkertyui");

/********************getElements and setElements************ */
let g = document.querySelector(".images");
console.log(g.getAttribute('class'));
console.log(g.setAttribute('class','nikeeta'));
console.log(g);

/******************manipulating style**************** */
let n=document.querySelector("h1");
console.log(n.style.backgroundColor="pink");

let links = document.querySelectorAll(".box a");
for(let i of links)
{
    i.style.color="red";
}
// for(let i=0; i<links.length; i++)
// {
// links[i].style.color="pink";

// }
let m=document.querySelector('h1');
console.log(m.classList.add("image"));//add

console.log(m.classList.remove("image"));//remove

console.log(m.classList.contains("image"));


console.log(m.classList.toggle("image"));

console.log(m.classList.toggle("new"));

console.log(m.classList.toggle("new"));

let b=document.querySelector(".box");
console.log(b.classList.toggle("bgcolor"));


/****************Navigation********** */
let h4=document.querySelector("h4");
console.log(h4.parentElement);

let box = document.querySelector(".box");
console.log(box.children);

let ul=document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

let im=document.querySelector("img")
im.previousElementSibling.style.color="yellow";
/********************adding elemntes***************88 */
let add=document.createElement('p');
console.log(add.innerText="hi i am nikeeta kaudare...............");
let boxx = document.querySelector(".box");
boxx.appendChild(add);
add.append("nikeeta kaudare ");

add.prepend("hiiiiiiiiiiiiiiiiiiiiiiii");

let bttn = document.createElement('button');
bttn.innerHTML = "new button";
let Para = document.querySelector('p');
Para.insertAdjacentElement('afterend',bttn);
bttn.append('click on');

/****************remove************ */
let body = document.querySelector('body');
//body.removeChild(bttn);

bttn.remove();
add.remove();




