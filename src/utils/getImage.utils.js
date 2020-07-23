
export const getCurrentImage = async () => {
    try {

         const result = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`, {
               method: 'GET',
               headers: {
                 accept: 'application/json',
                  'Content-type': 'application/json; charset=UTF-8',
               },
         })

         return result.data
        
    } catch (error) {
        return error.response
    }
}
