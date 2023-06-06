function GetSHA256ofJSON (input){
    crypto.createHash('sha256').update(JSON.stringify(input)).digest('hex')
    return( 
        <></>
    )
};
export default GetSHA256ofJSON;