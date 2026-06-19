import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button/Button';

function Home() {   
  const navigate = useNavigate();

  

      return (
        <>
        <div className=" w-screen h-screen bg-black p-10 border-box items-center justify-center">
          <div className="box-content bg-white rounded-lg h-150 border-1 p-10">
            <div className="flex justify-between border-b border-gray-300">
              <div className="flex items-center ">
                <Button onClick={() => {console.log("찍"); navigate("/")}} className="w-10 h-10 mr-2 mb-2 rounded-lg">
                  <img src="/d.png" alt="logo" className="w-full h-full object-cover rounded-lg" />
                </Button>
                <p className="text-2xl font-medium pb-3">datriss</p>
              </div>
              <Button onClick={() => navigate("/login")} className="btn btn-primary h-full">로그인</Button>
            </div>  
    
            <div className="justify-center items-center text-center mt-50">
              <p className="text-black text-4xl pb-10 font-bold">데이터로 비즈니스를 잇다, datriss</p>
              <p className="text-black">datriss는 회원과 결제 데이터를 한 곳에서 관리하는 어드민 솔루션입니다.
                 <br />간결한 화면과 빠른 검색으로 운영 효율울 높입니다.</p>
              <Button onClick={() => navigate("/login")} className="btn btn-primary mt-7">로그인하고 시작하기</Button>
            </div>
          </div>
        </div>
        </>
      )
    }

export default Home