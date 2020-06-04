function animate(obj, target, callback) {
    clearInterval(obj.time);
    obj.time = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.time);
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + "px";
    }, 20)
}
// function animate(obj, target, callback) {
//     clearInterval(obj.time);
//     obj.time = setInterval(function() {
//         var step = (target - obj.offsetLeft) / 10;
//         if (step > 0) {
//             step = Math.ceil(step);
//         } else {
//             step = Math.floor(step);
//         }
//         if (obj.offsetLeft == target) {
//             clearInterval(obj.time)
//             if (callback) {
//                 callback();
//             }
//         }

//         obj.style.left = obj.offsetLeft + step + "px";

//     }, 15)
// }