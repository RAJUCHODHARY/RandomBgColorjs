let inputs=document.querySelector('#inputs');
     let btn =document.querySelector('#btn');

     //randomcolorgenret program  one
     btn.addEventListener('click',()=>{
        let color="#";
        let allowed='0123456789abcdef';
        for(let i=0;i<6;i++){
            const rendomChar=allowed[Math.floor(Math.random()*allowed.length)]
            color+=rendomChar;
        }
        inputs.value=color;
        document.body.style.backgroundColor=color;
     })






     //randomcolorgenret program  tow
        
            
        //    btn.addEventListener('click',()=>{ 
        //     let randoms=Math.floor(Math.random()*956);
            
        //     let colors= "#"+randoms.toString(16);
        //     document.body.style.backgroundColor=colors;
        //     inputs.value=`${colors}`;
            
        // })



     //randomcolorgenret program  three


    //    const arr=["pink","red","blue","yellow","purple","green","aqua","violet"];
    //     btn.addEventListener('click',()=>{
    //      const colorindex=parseInt(Math.random()*arr.length);
    //      document.body.style.backgroundColor=arr[colorindex]
    //      inputs.value=arr[colorindex];
    //     })

        
       
       