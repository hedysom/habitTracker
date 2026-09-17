type ButtonProps = {
    children: string
}

export function Button({children}: ButtonProps){
 return <button className="bg-orange-600 hover:bg-orange-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed">{children}</button>
}