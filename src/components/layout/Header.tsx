function Header() {
    const email = localStorage.getItem("loginEmail");

    return(


        <>
        <div className="flex justify-end border-gray-300 p-2">
              <div className="flex items-center ">
                <p className="text-xs font-bold pr-3">로그인 계정</p>
                <p className="text-xs text-gray-600 pr-2">{email}</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center shadow hover:bg-gray-100">
                M
              </button>
        </div>
        </>
    )
}

export default Header