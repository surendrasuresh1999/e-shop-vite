export const Colors =[
    'White','Black','Red','Marun','Being','Pink','Green','Yellow'
]

export const Filters = [
    {
        id:"color",
        name:"Color",
        inputType:"checkbox",
        options:[
            { value:"white",lable:"White"},
            { value:"beige",lable:"Beige"},
            { value:"blue",lable:"Blue"},
            { value:"brown",lable:"Brown"},
            { value:"green",lable:"Green"},
            { value:"purple",lable:"Purple"},
            { value:"yellow",lable:"Yellow"},
        ]
    },
    {
        id:"size",
        name:"Size",
        inputType:"checkbox",
        options:[
            { value:"S",lable:"S"},
            { value:"M",lable:"M"},
            { value:"L",lable:"L"},
        ]
    },
    {
        id:"price",
        name:"Price",
        inputType:"radio",
        options:[
            {value:"159-399",lable:"₹159 To ₹399"},
            {value:"399-999",lable:"₹399 To ₹999"},
            {value:"999-1999",lable:"₹999 To ₹1999"},
            {value:"1999-2999",lable:"₹1999 To ₹2999"},
            {value:"3999-4999",lable:"₹3999 To ₹4999"},
        ]
    },
    {
        id:"discount",
        name:"Discount Range",
        inputType:"radio",
        options:[
            {value:"10",lable:"10% And Above"},
            {value:"20",lable:"20% And Above"},
            {value:"30",lable:"30% And Above"},
            {value:"40",lable:"40% And Above"},
            {value:"50",lable:"50% And Above"},
            {value:"60",lable:"60% And Above"},
            {value:"70",lable:"70% And Above"},
            {value:"80",lable:"80% And Above"}
        ]
    },
    {
        id:"stock",
        name:"Availability",
        inputType:"radio",
        options:[
            {value:"In_Stock",lable:"In Stock"},
            {value:"Out_Of_Stock",lable:"Out Of Stock"}
        ]
    },
]

// export const SingleFilters = [
//     {
//         id:"price",
//         name:"Price",
//         options:[
//             {value:"159-399",lable:"159 To 399"},
//             {value:"399-999",lable:"399 To 999"},
//             {value:"999-1999",lable:"999 To 1999"},
//             {value:"1999-2999",lable:"1999 To 2999"},
//             {value:"3999-4999",lable:"3999 To 4999"},
//         ]
//     },
//     {
//         id:"discount",
//         name:"Discount Range",
//         options:[
//             {value:"10",lable:"10% And Above"},
//             {value:"20",lable:"20% And Above"},
//             {value:"30",lable:"30% And Above"},
//             {value:"40",lable:"40% And Above"},
//             {value:"50",lable:"50% And Above"},
//             {value:"60",lable:"60% And Above"},
//             {value:"70",lable:"70% And Above"},
//             {value:"80",lable:"80% And Above"}
//         ]
//     },
//     {
//         id:"stock",
//         name:"Availability",
//         options:[
//             {value:"In_Stock",lable:"In Stock"},
//             {value:"Out_Of_Stock",lable:"Out Of Stock"}
//         ]
//     },
// ]