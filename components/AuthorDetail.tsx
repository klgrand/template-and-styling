
import { AuthorDetailProps } from '@/types'
import { dateFormatter } from '@/utils'
import Avatar from './Avatar'
import authers from '../constants/authors.json'


const AuthorDetail:React.FC<AuthorDetailProps> = ({
  author_id,
  created_at,
}) => {
  const auther = authers.find(item => item.id === author_id)
  return (
    <div className="px-4 py-2 border-b-[1px] border-b-gray-300 flex items-center gap-1">
      <Avatar image_url={auther?.avatar_url} />
      <div className="text-[#f64610] text-[13px] font-medium">
        {auther?.name}
      </div>
      <div className="text-gray-500 text-[13px]">
        {`posted on ${dateFormatter(created_at)}`}
      </div>
    </div>
  )
}

export default AuthorDetail