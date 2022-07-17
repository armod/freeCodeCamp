function addTogether() 
{
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
  /* console.log(arguments.length);
  if(typeof arguments[0] !== "number")  
    //console.log("w ifie", arguments);
    return undefined;      
  if(arguments[1] === undefined)  
    //console.log("1 argument");
    return (arguments[1]) => addTogether(arguments[0], arguments[1]);  
  if(typeof(arguments[1]) !== "number")
    return undefined;
  else
    return undefined; */
}

addTogether(2,3);
addTogether(2);
//addTogether(5);
/* 
function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}
Wyjaśnienie problemu
Zrozumienie, co należy zrobić, może być dość skomplikowane. Zawsze istnieje wiele sposobów na zrobienie czegoś podczas kodowania, ale niezależnie od użytego algorytmu, musimy stworzyć program, który wykona następujące czynności:

Musi dodać dwie liczby przekazane jako parametry i zwrócić sumę.
Musi sprawdzić, czy którekolwiek z liczb są liczbami rzeczywistymi, w przeciwnym razie zwróć undefined i zatrzymaj program w tym miejscu.
Musi sprawdzić, czy przekazał jeden lub dwa argumenty. Więcej jest ignorowanych.
Jeśli ma tylko jeden argument, musi zwrócić funkcję, która używa tej liczby i oczekuje kolejnego, a następnie ją dodać.
Odpowiednie linki
Typ 2,3k
Obiekt argumentów 2.7k
Poradnik
Podpowiedź 1
Za każdym razem, gdy masz do czynienia z argumentem, musisz sprawdzić, czy jest zdefiniowany i czy jest to liczba.

Podpowiedź 2
Podczas pracy nad przypadkiem, w którym musi zwrócić funkcję, użycie closure może pomóc w napisaniu nowej funkcji w kategoriach addTogether().

Podpowiedź 3
Wzorzec wczesnego powrotu może uprościć Twój kod. */