onmessage = function(e) {
    //algo: "bubble", "heap", "merge", "quick"
    //data: array of input values
    var algo = e.data.algo;
    var data = e.data.data;
    var length = e.data.dataLength;
    if( algo=="BUBBLE" ) bubble(data, length);
}
function swap(arr, i, j) {
    // console.log("worker swap")
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    // console.log("worker post")
    postMessage({
        'action': "SWAP",
        'i': i,
        'j': j
    });
    // changeArr.push({
    //     'action': "SWAP",
    //     'i': i,
    //     'j': j
    // });
}

var changeArr = [];

function bubble(data, length) {
    // console.log("bbb");
    // swap(data, 0, 399);
    var t = Date.now();
    var i = 0;

    for( var i=0; i<length; i++ ) {
        for (var j = 0; j < length - i; j++) {
            if (data[j] > data[j + 1]) {
                // swap(data, j, j+1);
                swap(data, j, j+1);

            }
            // else changeArr.push({
            //     'action': ""
            // });
        }
    }
    // console.log(changeArr);
    // postMessage({
    //     'action': "ARR",
    //     'changeData': changeArr
    // });

    // var timer = setInterval(function() {
    //     for (var j = 0; j < length - i; j++) {
    //         if (data[j] > data[j + 1]) {
    //             // swap(data, j, j+1);
    //             swap(data, j, j+1);

    //         }
    //     }
    //     i++;
    //     if (i == length) {
    //         clearInterval(timer);
    //         console.log("bubble time:", Date.now()-t);
    //     }
    // }, 0);
    console.log("bubble time:", Date.now()-t);

}


function heap(data) {
    // console.log(data);
    var t = Date.now();
    
    function heapify() {
        var i = Math.floor(length/2)-1;
        var timer = setInterval(function() {
            adjust(i, length);
            if( --i < 0 ) {
                clearInterval(timer);
                pop();             
            }
        }, 0);
    }
    function pop() {
        var i = length-1;
        var timer = setInterval(function() {
            // swap(data, 0, i);
            swap_arr(data, eleArr, 0, i);
            adjust(0, i);
            if( --i < 0 ) {
                clearInterval(timer);
                console.log("heapsort time:", Date.now()-t);
                // console.log(data);
            }
        }, 0);
    }
    function adjust(i, n) {
        var k = data[i];
        var j = 2*i + 1;    //get left child
        while( j<n ) {
            if( j<n-1 && data[j] < data[j+1] ) j = j+1;
            if( k>= data[j] ) break;
            var c = Math.floor((j-1)/2);
            // swap(data, j, c);
            swap_arr(data, eleArr, j, c);
            j = 2*j + 1;
        }
    }
    
    heapify();
    
}

function mergeSort(data) {
    console.log(data);
    // n = length;
    var curr_size;  // For current size of subarrays to be merged 
    // curr_size varies from 1 to n/2 
    var left_start; // For picking starting index of left subarray 
    // to be merged 
    
    // Merge subarrays in bottom up manner.  First merge subarrays of 
    // size 1 to create sorted subarrays of size 2, then merge subarrays 
    // of size 2 to create sorted subarrays of size 4, and so on. 
    for (curr_size=1; curr_size<=length-1; curr_size = 2*curr_size) 
    { 
        // Pick starting point of different subarrays of current size 
        for (left_start=0; left_start<length-1; left_start += 2*curr_size) 
        { 
            // Find ending point of left subarray. mid+1 is starting  
            // point of right 
            var left_end = left_start + curr_size - 1; 
            
            var right_end = Math.min(left_start + 2*curr_size - 1, length-1); 
            
            // Merge Subarrays arr[left_start...mid] & arr[mid+1...right_end] 
            merge(left_start, left_end, right_end);
        }
    } 
    console.log(data);

    function merge(l, m, r) 
    { 
        var n1 = m - l + 1; 
        var n2 = r - m; 
        
        /* Copy data to temp arrays L[] and R[] */
        L = data.slice(l, m+1);
        R = data.slice(m+1, r+1);
        
        /* Merge the temp arrays back into arr[l..r]*/
        var i=0, j=0, k=l; 
        while (i < n1 && j < n2) 
        { 
            if (L[i] <= R[j]) data[k++] = L[i++]; 
            else data[k++] = R[j++];
        } 
        
        /* Copy the remaining elements of L[], if there are any */
        while (i < n1 && k<length) data[k++] = L[i++]; 
        
        /* Copy the remaining elements of R[], if there are any */
        while (j < n2 && k<length) data[k++] = R[j++];
    } 
}

function quickSort(data) {
    // data = [2, 7, 1, 6, 10, 3, 5, 9, 8, 4];
    function partition(low, high){
        let i = (low - 1)         //index of smaller element 
        let pivot = data[high]     //pivot 
        // console.log("pivot", pivot, "low", low, "high", high, "data", data.slice(low, high));

        let j = low;
        let timer = setInterval(function() {
            if( j==high ) {
                clearInterval(timer);
                // arr[i + 1], arr[high] = arr[high], arr[i + 1] 
                pi = (i + 1);
                quick(low, pi-1);
                quick(pi+1, high); 
            }
            else if( data[j] <= pivot){   
                //increment index of 
                //smaller element 
                i += 1
                swap_arr(data, eleArr, i, j)
            }
            j++;
        }, 0);
    }
    function quick(low, high) {
        if( low < high) {
            //pi is partitioning index, arr[p] is now 
            //at right place 
            partition(low, high);
        }
    }
    // console.log(data);
    quick(0, length-1);
    // console.log(data);

}