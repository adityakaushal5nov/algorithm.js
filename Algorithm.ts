class Algorithm{

    //1. Bubble Sort
    bubbleSort = (inputArray: number[]) : number[] => {
        for(let i = 0; i != inputArray.length; i++){
            for(let j = 0; j != inputArray.length; j++){
                if(inputArray[j] > inputArray[j+1]) {
                    inputArray[j] = inputArray[j] + inputArray[j+1];
                    inputArray[j+1] = inputArray[j] - inputArray[j+1];
                    inputArray[j] = inputArray[j] - inputArray[j+1];
                }
            }
        }
        return inputArray;
    }//end bubble sort

    //2. SelectionSort
    selectionSort = (inputArray: number[]) : number[] => {
        for(let i = 0; i != inputArray.length; i++){
            for(let j = i; j != inputArray.length; j++){
                if(inputArray[i] > inputArray[j+1]) {
                    inputArray[i] = inputArray[i] + inputArray[j+1];
                    inputArray[j+1] = inputArray[i] - inputArray[j+1];
                    inputArray[i] = inputArray[i] - inputArray[j+1];
                }
            }
        }
        return inputArray;
    }//end selection sort

    //3. Insertion Sort
    insertionSort = (inputArray: number[]) : number[] => {
        for(let i = 1; i <= inputArray.length; i++){
            let j = 0;
            while(j < i){
                if(inputArray[i] < inputArray[j]) {
                    inputArray[i] = inputArray[i] + inputArray[j];
                    inputArray[j] = inputArray[i] - inputArray[j];
                    inputArray[i] = inputArray[i] - inputArray[j];
                }
                j++;
            }
        }
        return inputArray;
    }//end insertion sort

    //4. Merge Sort
    mergeSort = (inputArray: number[])  => {
        let low = 0, high = inputArray.length, mergeResult = [];

        if(inputArray.length == 1 || inputArray.length == 0 ) return inputArray;

        if(low < high){
            let mid = Math.floor(low + high)/2;

            let leftSortedArray = this.mergeSort(inputArray.slice(low, mid));

            let rightSortedArray = this.mergeSort(inputArray.slice(mid, high));
            
            mergeResult = this.merge(leftSortedArray, rightSortedArray);
        }
       return mergeResult;
    }//end merge sort

    // 4.1 Merge Procedure
    merge = (list1: number[], list2: number[]) : number[] => {
        let i = 0, j = 0, k = 0, sortedArray = [];

        while(i < list1.length && j < list2.length){
            if(list1[i] < list2[j])  sortedArray[k++] = list1[i++];
            else  sortedArray[k++] = list2[j++];
        }

        if(i == list1.length) sortedArray = sortedArray.concat(list2.slice(j, list2.length))

        if(j == list2.length) sortedArray = sortedArray.concat(list1.slice(i, list1.length))
            
        return sortedArray;
    }//end merge procedure

    //5. Quick Sort
    quickSort = (inputArray: number[]) : number[]  => {
        let len = inputArray.length;
        let pivot = this.partition(inputArray);
        this.quickSort(inputArray.slice(0, pivot-1));
        this.quickSort(inputArray.slice(pivot+1, len));
        return inputArray;
    }//end quick sort    

    partition = (a: number[]): number => {
        console.log('Parray' + a);
        let j = 0;
        let pivot = a[a.length-1];
        if(a.length == 1) return 0;
        for(let i=0; i<a.length ; i++){
            if(a[i] < pivot) {
                j++;
                [a[i], a[j]] = [a[j], a[i]];
            } 
        }

        [ a[a.length-1], a[j]] = [a[j], a[a.length-1] ];
        console.log('pivoted array: ' +  a);
        return j;
    }



    heapSort = (inputArray: number[]) : number[] => {
        return inputArray;
    }//end heap sort
       

}//end class

let temp = [551, 56, 1, 32, 67, 2, 717, 101, 0];
console.log(new Algorithm().quickSort(temp));

