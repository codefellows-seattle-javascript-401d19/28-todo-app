function autoBind(reactComponent) {
  // let memberFunctions = Object.getOwnPropertyNames(reactComponent.prototype);
  
  // reactComponent.forEach(element => {
  //   console.log(element);
  // });
  // console.log(reactComponent.handleSubmit.toString().includes('handle'));
    console.log(reactComponent);
  
  // for (let functionName of memberFunctions) {
  //   console.log(functionName);
  //   if (functionName.startsWith('handle')) {
  //     reactComponent[functionName] = reactComponent[functionName].bind(reactComponent);
  //   }
  // }
}

export default autoBind;
module.exports = autoBind;