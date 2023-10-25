import Image from 'next/image'
import { PostProps } from '@/types'
import AuthorDetail from './AuthorDetail'

interface CardPostProps extends PostProps {
  index: number
}

const Card:React.FC<CardPostProps> = ({
  id,
  author_id,
  title,
  body,
  image_url,
  created_at,
  index,
}) => {
  return (
    <div className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#ccecff]'} shadow-md`}>
      <AuthorDetail
        author_id={author_id}
        created_at={created_at}
      />
      <div className="p-4 flex gap-4">
        <div className="relative w-full max-w-[215px] min-w-[215px] h-[170px] ">
          <Image
            alt={`${id}`}
            src={image_url}
            layout="fill"
            className="w-full h-full object-fill"
          />
        </div>
        <div>
          <div className="font-bold text-[18px] pb-3">
            {title}
          </div>
          <div className="text-[14px]">
            {body}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card