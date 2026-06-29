import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import SelectBox from "../../../components/common/SelectBox/SelectBox";
import membersData from "../../../data/members.json";
import Table from "../../../components/common/Table/Table";
import Input from "../../../components/common/Input/Input";
import PageNation from "../../../components/common/Pagination/Pagination";



const memberColumns = [
  {label: "ID", width: "w-20" },
  {label: "이름",width: "w-[420px]" },
  {label: "이메일",width: "w-[420px]" },
  {label: "가입일",width: "w-[420px]"},
  {label: "등급",width: "w-[140px]"},
  {label: "상태",width: "w-[100px]" },
];

const memberStatusOptions = [
  { label: "상태 전체", value: "all" },
  { label: "활성", value: "active" },
  { label: "휴면", value: "dormant" },
  { label: "탈퇴", value: "withdrawn" },
];  

function getStatusText(status: string) {
  if (status === "active") return "활성";
  if (status === "dormant") return "휴면";
  if (status === "withdrawn") return "탈퇴";

  return status;
}



function Members() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [showPage, setShowPage] = useState(1);

  const pageSize = 10;


  // const filteredStatus = membersData.filter((member) => {
  //   if (statusFilter ==="all") {
  //     return true;
  //   }
  
  //   return member.status === statusFilter;
  // });

  const filteredMembers = membersData.filter((member) => {
    const isSearchOk =
      member.name.includes(keyword) ||
      member.email.includes(keyword);

    const isStatusOk =
      statusFilter === member.status || statusFilter ==="all";

      return isSearchOk && isStatusOk;
      
  });

  const handleSearch = () =>{
    setKeyword(searchText);
    setShowPage(1);
  };

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    setShowPage(1);
  }

  const totalPage = Math.ceil(filteredMembers.length / pageSize);

  const startIndex = (showPage - 1 ) * pageSize;

  const showMembers = filteredMembers.slice(startIndex, startIndex + pageSize);

  const pageNumbers = [];

  for (let i =1; i <= totalPage; i++){
    pageNumbers.push(i);
  }

  return (
    <div className="flex min-h-full h-full flex-col bg-slate-200">
      <p className="p-5 text-2xl font-bold text-black">회원 목록</p>

      <div className="m-4 flex gap-2">
        <Input
          id="search"
          type="text"
          value={searchText}
          onChange={setSearchText}
          onEnter={handleSearch}
          placeholder="검색어 입력 (이름, 이메일)"
          className="h-11 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500"
        />

        <SelectBox
          value={statusFilter}
          onChange={handleStatusChange}
          options={memberStatusOptions}
          className="w-40"
        />

        <Button 
              onClick={handleSearch}
              
              className="h-11 w-24 bg-indigo-600 text-white hover:bg-indigo-700">
              
          검색
        </Button>
      </div>


      <Table columns={memberColumns}>
        {showMembers.map((member) => (
          <tr key={member.id} className="border-t border-slate-100">
            <td className="px-4 py-3">{member.id}</td>
            <td className="px-4 py-3">{member.name}</td>
            <td className="px-4 py-3 truncate">{member.email}</td>
            <td className="px-4 py-3">{member.joinedAt}</td>
            <td className="px-4 py-3">{member.grade}</td>
            <td className="px-4 py-3">{getStatusText(member.status)}</td>
          </tr>
        ))}
      </Table>

     <div className="mx-4 mt-3 pb-4">
                    <p className="mb-2 text-sm text-slate-500">
                        총 {filteredMembers.length}건 / 페이지당 {pageSize}건
                    </p>

                    <PageNation
                        showPage={showPage}
                        totalPage={totalPage}
                        onPageChange={setShowPage}
                    />
                </div>
    </div>
  );
}

export default Members;