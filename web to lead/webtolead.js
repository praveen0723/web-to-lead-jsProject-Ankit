function beforesubmit () {
    let outputdate = document.querySelector( ".outputdate" );
    let inputdate = document.querySelector( ".inputdate" );
    console.log( "variable:", inputdate.value );
    let formattedDate = new Date( inputdate.value ).toLocaleDateString( "en-IN" );
    outputdate.value = formattedDate;
    console.log("variable:", outputdate.value);
}
