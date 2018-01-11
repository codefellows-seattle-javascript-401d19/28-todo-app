export default function(context, Component) {
  let memberFunctions = Object.getOwnPropertyNames(Component.prototype);
  for(let functionName of memberFunctions) {
    if(functionName.startsWith('handle')) {
      context[functionName] = context[functionName].bind(context);
    }
  }
}
