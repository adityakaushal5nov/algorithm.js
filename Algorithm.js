var Algorithm = /** @class */ (function () {
    function Algorithm() {
        var _this = this;
        //1. Bubble Sort
        this.bubbleSort = function (inputArray) {
            for (var i = 0; i != inputArray.length; i++) {
                for (var j = 0; j != inputArray.length; j++) {
                    if (inputArray[j] > inputArray[j + 1]) {
                        inputArray[j] = inputArray[j] + inputArray[j + 1];
                        inputArray[j + 1] = inputArray[j] - inputArray[j + 1];
                        inputArray[j] = inputArray[j] - inputArray[j + 1];
                    }
                }
            }
            return inputArray;
        }; //end bubble sort
        //2. SelectionSort
        this.selectionSort = function (inputArray) {
            for (var i = 0; i != inputArray.length; i++) {
                for (var j = i; j != inputArray.length; j++) {
                    if (inputArray[i] > inputArray[j + 1]) {
                        inputArray[i] = inputArray[i] + inputArray[j + 1];
                        inputArray[j + 1] = inputArray[i] - inputArray[j + 1];
                        inputArray[i] = inputArray[i] - inputArray[j + 1];
                    }
                }
            }
            return inputArray;
        }; //end selection sort
        //3. Insertion Sort
        this.insertionSort = function (inputArray) {
            for (var i = 1; i <= inputArray.length; i++) {
                var j = 0;
                while (j < i) {
                    if (inputArray[i] < inputArray[j]) {
                        inputArray[i] = inputArray[i] + inputArray[j];
                        inputArray[j] = inputArray[i] - inputArray[j];
                        inputArray[i] = inputArray[i] - inputArray[j];
                    }
                    j++;
                }
            }
            return inputArray;
        }; //end insertion sort
        //4. Merge Sort
        this.mergeSort = function (inputArray) {
            var low = 0, high = inputArray.length, mergeResult = [];
            if (inputArray.length == 1 || inputArray.length == 0)
                return inputArray;
            if (low < high) {
                var mid = Math.floor(low + high) / 2;
                var leftSortedArray = _this.mergeSort(inputArray.slice(low, mid));
                var rightSortedArray = _this.mergeSort(inputArray.slice(mid, high));
                mergeResult = _this.merge(leftSortedArray, rightSortedArray);
            }
            return mergeResult;
        }; //end merge sort
        // 4.1 Merge Procedure
        this.merge = function (list1, list2) {
            var i = 0, j = 0, k = 0, sortedArray = [];
            while (i < list1.length && j < list2.length) {
                if (list1[i] < list2[j])
                    sortedArray[k++] = list1[i++];
                else
                    sortedArray[k++] = list2[j++];
            }
            if (i == list1.length)
                sortedArray = sortedArray.concat(list2.slice(j, list2.length));
            if (j == list2.length)
                sortedArray = sortedArray.concat(list1.slice(i, list1.length));
            return sortedArray;
        }; //end merge procedure
        //5. Quick Sort
        this.quickSort = function (inputArray) {
            var len = inputArray.length;
            var pivot = _this.partition(inputArray);
            _this.quickSort(inputArray.slice(0, pivot - 1));
            _this.quickSort(inputArray.slice(pivot + 1, len));
            return inputArray;
        }; //end quick sort    
        this.partition = function (a) {
            console.log('Parray' + a);
            var j = 0;
            var pivot = a[a.length - 1];
            if (a.length == 1)
                return 0;
            for (var i = 0; i < a.length; i++) {
                if (a[i] < pivot) {
                    j++;
                    _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
                }
            }
            _b = [a[j], a[a.length - 1]], a[a.length - 1] = _b[0], a[j] = _b[1];
            console.log('pivoted array: ' + a);
            return j;
            var _a, _b;
        };
        this.heapSort = function (inputArray) {
            return inputArray;
        }; //end heap sort
    }
    return Algorithm;
}()); //end class
var temp = [551, 56, 1, 32, 67, 2, 717, 101, 0];
console.log(new Algorithm().quickSort(temp));
