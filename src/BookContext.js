import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, bookList] = useState([
        { 
            title: 'Book 01 Title',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit, tortor nec rutrum tristique, augue nibh ultricies mauris, eu dapibus justo quam at sem. Mauris a ullamcorper magna. Proin rutrum elit erat, non mollis turpis commodo sit amet. Nam sit amet elementum justo. Nunc cursus gravida auctor. Fusce ornare maximus sem. Cras ex nibh, auctor nec dolor eget, efficitur consectetur mi. Pellentesque elementum dignissim odio. Nullam tempus ante et erat viverra blandit.",
            id: 1
        },
        { 
            title: 'Book 02 Title',
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit, tortor nec rutrum tristique, augue nibh ultricies mauris, eu dapibus justo quam at sem. Mauris a ullamcorper magna. Proin rutrum elit erat, non mollis turpis commodo sit amet. Nam sit amet elementum justo. Nunc cursus gravida auctor. Fusce ornare maximus sem. Cras ex nibh, auctor nec dolor eget, efficitur consectetur mi. Pellentesque elementum dignissim odio. Nullam tempus ante et erat viverra blandit.",
            id: 2
        },
    ])
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider