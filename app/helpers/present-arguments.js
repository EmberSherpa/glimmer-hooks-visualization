import Ember from 'ember';

const { typeOf, keys } = Ember;

export function presentArguments(params/*, hash*/) {
  const replacer = function(key, value) {
    if (typeOf(value) === 'function') {
      return 'function';
    }
    if (typeOf(value) === 'array') {
      return value;
    }
    return value;
  };
  const [arg] = params;
  const serialized = JSON.stringify(arg, replacer, 2);
  return syntaxHighlight(JSON.parse(serialized));
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
