function Location(){
    const successCallback = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      };
      
      const errorCallback = (error) => {
        console.log(error);
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      

    return(
        <div>
            <p>Positional data</p>
        </div>

        
    );
}

export default Location;