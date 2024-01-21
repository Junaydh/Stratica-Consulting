import Image from "next/image"

const Logo = ({ src }) => {
  return (
    <div>
      <Image src={src} alt="logo" height={200} width={200} />
    </div>
  )
}

export default Logo