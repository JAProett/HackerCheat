function foobarbaz(){
  for (let index = 1; index <= 100; index++) {
    let statement = '';
    if (index % 2 === 0) {
      statement += 'foo';
    }
    if (index % 3 === 0) {
      statement += 'bar';
    }
    if (index % 5 === 0) {
      statement += 'baz';
    }
    if (statement) {
      console.log(statement);
    } else {
      console.log(index);
    }
  }
}

foobarbaz();