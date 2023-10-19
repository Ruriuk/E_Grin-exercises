let funnyNumber = 12345;
funnyNumber = funnyNumber.toString();
console.log("funnyNumber:", funnyNumber, typeof funnyNumber);


let funnyString = '12345';
funnyString = Number(funnyString);
console.log("funnyString:", funnyString, typeof funnyString);


let funnyTrue = '1';
funnyTrue = Boolean(funnyTrue);
console.log("funnyTrue:", funnyTrue, typeof funnyTrue);


let funnyFalse = '0';
funnyFalse = Boolean(funnyFalse);
console.log("funnyFalse:", funnyFalse, typeof funnyFalse);


let isTrue = false;
isTrue = isTrue.toString();
console.log("isTrue:", isTrue, typeof isTrue);


let isFalse = true;
isFalse = Number(isFalse);
console.log("isFalse:", isFalse, typeof isFalse);


let funnyText = 'BMW M5 F90 0-100KM/H 3.3sek';
funnyText = Number(funnyText);
console.log("funnyText:", funnyText, typeof funnyText);


let funnyNull = null;
funnyNull = String(funnyNull);
console.log("funnyNull:", funnyNull, typeof funnyNull);


let funnyUndefined = undefined;
funnyUndefined = String(funnyUndefined);
console.log("funnyUndefined:", funnyUndefined, typeof funnyUndefined);


isTrue = true;
isTrue = isTrue.toString();
console.log("isTrue:", isTrue, typeof isTrue);


isFalse = false;
isFalse = isFalse.toString();
console.log("isFalse:", isFalse, typeof isFalse);


let booleanString = 'true';
booleanString = Number(booleanString);
console.log("booleanString:", booleanString, typeof booleanString);


let otherBooleanString = 'false';
otherBooleanString = Boolean(otherBooleanString);
console.log("otherBooleanString:", otherBooleanString, typeof otherBooleanString);