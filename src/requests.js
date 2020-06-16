
// const getPuzzle= async (wordCount)=>{
    
//     const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//         if (response.status ===200){
//             const data= await response.json()
//             return data.puzzle
//         }
//         else{
//             throw new Error('unabe to fetch')
//         }
//     }


const getPuzzle = async ()=> {
    const response =await fetch('https://restcountries.eu/rest/v2/all')
        if (response.status ===200 ){
            const data= await response.json()
            return data[Math.floor(Math.random()*data.length)]
        }
        else{
            throw new Error('unabe to fetch')
        }
 
}


const getgeoLocation = async () =>{
    const response = await fetch('http://ipinfo.io/json?token=6a09ad2b3fc623')
        if(response.status===200){
            return response.json()
        }
        else{
            throw new Error(`unable to fetch`)
        }
    }

const getCurrency = async (countryCode) =>{
    const response =await fetch('https://restcountries.eu/rest/v2/all')
    if (response.status ===200){
        data = await response.json()
        return data.find((country)=> country.alpha2Code ===countryCode)
    }

    else{
        throw new Error(`unable to fetch`)
    }
}

export { getCurrency,getgeoLocation,getPuzzle as default }