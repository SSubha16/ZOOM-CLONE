let IS_PROD = true ;

const server = IS_PROD ?
      "https://my-zoom-clone-app.onrender.com"       
         :
      "http://localhost:8000"
    


export default server;