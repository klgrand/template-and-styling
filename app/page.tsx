import Header from "@/components/Header"
import Card from "@/components/Card"
import posts from '@/constants/posts.json'


const Home = () => {
 return (
  <main>
    <Header />
    <div className="flex flex-col gap-4 mb-4">
      {posts.map((item, idx) => (
        <div key={item.id} >
          <Card
            index={idx}
            {...item}
          />
        </div>
      ))}
    </div>
    
  </main>
 )
}

export default Home