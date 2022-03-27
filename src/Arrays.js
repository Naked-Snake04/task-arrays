/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let array1 = data.split(',').map(Number);
    array1.sort((a, b) => a - b);
    let array2 = array1.join();
    return array2;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let array1 = data.filter(function (n) {
        return n <= 100;
    });
    return array1;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array3 = [];
    while (array1.length || array2.length) {
        if (array1.length) {
            array3.push(array1.shift());
        }
        if (array2.length) {
            array3.push(array2.shift());
        }
    }
    return array3;
}
