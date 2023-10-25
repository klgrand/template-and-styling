import Image from 'next/image'
import { AvatarProps } from '@/types'


const Avatar:React.FC<AvatarProps> = ({
  image_url = '/images/placeholder.jpg'
}) => {
  return (
    <Image
      className="rounded-full"
      height="25"
      width="25"
      alt="Avatar"
      src={image_url}
    />
  )
}

export default Avatar