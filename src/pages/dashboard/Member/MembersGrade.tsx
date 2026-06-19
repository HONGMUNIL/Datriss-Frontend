import { useState } from "react";
import Input from "../../../components/common/Input/Input";
import SelectBox from "../../../components/common/SelectBox/SelectBox";
import Button from "../../../components/common/Button/Button";
import Table from "../../../components/common/Table/Table";
import PageNation from "../../../components/common/Pagination/Pagination";
import memberGradeData from "../../../data/member-grades.json"





   const gradeColumns = [
        {label: "ID", width: "w-20"},
        {label: "등급명", },
        {label: "최소 결제금액", },
        {label: "헤택", },
        {label: "회원수", },
        {label: "상태", },
    ];

    const gradeStatusOptions = [
        {label:"상태 전체", value:"all"},
        {label:"운영중", value:"active"},
        {label:"중지", value:"inactive"}
    ];



function getGradeStatusText(status: string){
    if(status === "active"){
        return "운영중";
    }

    if(status ==="inactive"){
        return "중지";
    }

    return status;

}
function MembersGrade(){
    const [statusFilter, setStatusFilter] = useState("all");
    const [searchText, setSearchText] = useState("");
    const [keyword, setKeyword] = useState("");
    const [showPage, setShowPage] = useState(1);

    const pageSize = 10;


    const handleSearch = () =>{
        setKeyword(searchText);
        setShowPage(1);
    };

    const handleStatusChange =(value: string) =>{ 
        setStatusFilter(value);
        setShowPage(1);
    };

    const filterGrade = memberGradeData.filter((grade) =>{
        const isSearchMatched = 
        grade.gradeName.includes(keyword) ||
        grade.benefit.includes(keyword);

        const isStatusMatched = 
            statusFilter === "all" || grade.status === statusFilter;

            return isSearchMatched && isStatusMatched;
    });

    const totalPage = Math.ceil(filterGrade.length / pageSize);
    const startIndex = (showPage - 1) * pageSize;
    const currentGrade = filterGrade.slice(startIndex, startIndex + pageSize);
    return(
        <>  
            <div className="flex h-full flex-col bg-slate-200">
                <p className="p-5 text-2xl font-bold text-black">회원 등급관리</p>

                <div className="m-4 flex gap-2">
                    <Input
                        id="gradesearch"
                        type="text"
                        value={searchText}
                        onChange={setSearchText}
                        placeholder="검색어 입력(등급명, 혜택)"
                        onEnter={handleSearch}
                        className="h-11 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500"
                    />
                    <SelectBox
                        value={statusFilter}
                        onChange={handleStatusChange}
                        options={gradeStatusOptions}
                        className="w-40"
                        />

                    <Button
                        onClick={handleSearch}
                        className="h-11 w-24 bg-indigo-600 text-white hover:bg-indigo-700">
                            
                            검색
                            
                    </Button>

                </div>

                <Table columns={gradeColumns}>
                    {currentGrade.map((grade) => (
                        <tr key={grade.id} className="border-t border-slate-100">
                            <td className="px-4 py-3">{grade.id}</td>
                            <td className="px-4 py-3">{grade.gradeName}</td>
                            <td className="px-4 py-3">{grade.minAmount.toLocaleString()}원</td>
                            <td className="px-4 py-3">{grade.benefit}</td>
                            <td className="px-4 py-3">{grade.memberCount}</td>
                            <td className="px-4 py-3">{getGradeStatusText(grade.status)}</td>
                        </tr>
                    ))}

                </Table>

                <PageNation
                    showPage={showPage}
                    totalPage={totalPage}
                    onPageChange={setShowPage}/>
            </div>
        
        
        </>
    )
}

export default MembersGrade;