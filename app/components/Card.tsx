import Image from "next/image"

const Card = ({ title, image, rate, amout }) => {
    return (
        <div className="text-xl border border-gray-400 rounded-md p-5">
            <Image src={image} alt={title} />
            <h1 className="text-base">{title}</h1>
            <p>{rate}</p>
            <p>{amout}</p>
        </div>
    )
}

export default Card