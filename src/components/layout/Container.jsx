import React from 'react'

export default function Container({children, className, id}) {
    return <section id={id} className={`${className} w-full relative flex xs:px-8 lg:px-24`}>{children}</section>
}