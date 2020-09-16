export function add(a, b) {
   return (a+b); 
};

function sub(a, b) {
    return (a-b); 
 };

 function mul(a, b) {
    return (a*b); 
 };

 function div(a, b) {
    return (a/b); 
 };

 export {sub, mul};
 export default div; //so when you import this module, default export be there definitely