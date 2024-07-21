const arr = [1, 40, -5, 10, 0];

function sort(arr) {
    for (const i in arr) {
        let min = arr[i];
        let ind = i;
        for (const j in arr) {
            if (j > i && arr[j] < min) {
                min = arr[j];
                ind = j;
            }
        }
        arr[ind] = arr[i];
        arr[i] = min;

    }
    console.log(arr);
}

sort(arr)