 myInputElement.addEventListener('paste', event => {     
    // clipboard (não era um texto ou valor simples)     
    if (event.clipboardData.files && event.clipboardData.files.length) {         
           event.preventDefault()    
           event.stopPropagation()         
        sendFiles(event.clipboardData.files)     } })


        function sendFiles (filesList) {     let content = ''          
             Array.from(filesList).forEach(file => {        
             console.log(file)         
             if (file.type.match(/^image\//)) {            
             content += `<img src='${URL.createObjectURL(file)}'>`       
            } else {                       
             content += `<iframe src='${URL.createObjectURL(file)}'></iframe>`         }     })          
             let div = document.createElement('div')     
             div.innerHTML = content     
             document.body.appendChild(div) } 



















   // você pode tratar outros tipos de arquivos, como vídeos ou áudios             
            // para este exemplo, vamos  jogar o arquivo em um iframe  




        // usamos o filesList 
        // cancelamos o comportamento padrão do navegador   
        // escutamos o evento de "colar"
        // se haviam arquivos no 