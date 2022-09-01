export function lengthCheck(name){
    const inputName = name
    console.log(inputName)
    const pattern = /^[a-z]{6,}$/
    let result = pattern.test(inputName)
    console.log(result)
    if(result){
        return ("passed")
    }
    else{
        return("failed")
    }

}

