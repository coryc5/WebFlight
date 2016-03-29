function uncommentingEJS(string){
  string.replace(/<!-- <%([\w\W]*?)%> -->/g, function(match, subMatch) {return "<%"+subMatch+"%>" });
  console.log('STRING🙏', string);
  return string;
}

module.exports = uncommentingEJS
