import Ember from 'ember';

const { typeOf, keys } = Ember;

export function presentArguments(params/*, hash*/) {
  const result = toString(parse(params));
  return syntaxHighlight(JSON.parse(result));
}

export default Ember.Helper.helper(presentArguments);

function syntaxHighlight(json) {
    if (typeof json !== 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function parse(args) {
  let parsed = [];
  const type = typeOf(args);
  const parseArg = function(argument, propName){
    const type = typeOf(argument);
    if (type === 'object') {
      let properties = keys(argument);
      parsed.push({ type, properties, args: argument, propName });
    }
  };
  if ( type === 'object' ) {
    keys(args).forEach(function(key){
      parseArg(args[key], key);
    });
  } else if ( type === 'array') {
    args.forEach(parseArg);
  }
  return parsed;
}

function toString(parsed) {
  return parsed.map(function(arg){
    let parts = [];
    arg.properties.forEach(function(prop){
      let value = arg.args[prop];
      let type = typeOf(value);
      if (type === 'object') {
        let parsed = parse(value);
        let output = parsed.map(function(part) {
          return `"${part.propName}": ${toString([part])}`;
        }).join(', ');
        parts.push(`"${prop}": {${output}}`);
      } else if (type === 'string') {
        parts.push(`"${prop}": "${value}"`);
      } else if (type === 'function') {
        parts.push(`"${prop}": "function"`);
      }
    });
    return `{${parts.join(', ')}}`;
  }).join();
}
