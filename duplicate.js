function duplicateEncode(word){
      word = word.toLowerCase().split('');
      console.log(word);
      var result;
      result = word.map(function(a, i, w){
         return  w.indexOf(a) == w.lastIndexOf(a) ? '(':')'
          
      }).join('');
     
    console.log(result);
}
duplicateEncode("diin");