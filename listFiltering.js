function filter_list(l) {
 return l.filter(function(value) {
     return typeof value == 'number';
 })
}
console.log(filter_list([1, 2, 'a', 'b']));
