const mathematiques = new Course(1,"TypeMathematiques","Mathematiques",30);
S.decl('a', [[1,10]]);
S.decl('b', [[1,5]]);
S.decl('c',[[1,19]]);
S.gt('a', 'b');
S.eq('b','c');
FD.distribute.naive(S, ['a', 'b','c']);





