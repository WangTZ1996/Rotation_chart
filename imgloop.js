
    var list = document.getElementsByClassName("list")[0];
    var img = document.getElementsByTagName("img")[0];
    var width = list.offsetWidth;
    var timer;
    var count = 0;
    var n = 1;

     function next(){
     	timer = setInterval(function(){
    	list.style.left = parseInt(list.style.left)-13 +"px";
    	count += 1;
    	if (count >=40){
    	clearInterval(timer);
    	count = 0;
             }
         },20);
     }

     function prev(){
     	timer = setInterval(function(){
    	list.style.left = parseInt(list.style.left) +13 +"px";
    	count += 1;
    	if (count >=40){
    	clearInterval(timer);
    	count = 0;
             }
         },20);
     }

    setInterval(function(){
     	next();
     	n+=1;
     	if(n==4){
     		list.style.left = 0+"px";
     		n = 1;
     	}
     },2000);



    

    

    



