/*
buffer test

*/
//creates a zero-filleld buffer of length 10
const buf1=Buffer.alloc(10);
/*
Returns a JSON representation of buf. JSON.stringify() implicitly calls this function when stringifying a Buffer instance.

Buffer.from() accepts objects in the format returned from this method. In particular, Buffer.from(buf.toJSON()) works like Buffer.from(buf).
*/
console.log(buf1.toJSON());

const buf2=Buffer.from([0x01,0x2,0x3,0x4,0x5,0x06])
const buf2Json =JSON.stringify(buf2);
console.log(buf2Json);

console.log(buf2.toJSON())