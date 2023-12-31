export default function MainDetails({name, address}){
    return (
        <>
        <section className="flex flex-col items-end justify-end">
            <h2 className="font-bold mb-1 md:text-4xl text-xl uppercase">{name}</h2>
                <p>{address}</p>
         </section>
        </>
    )
}